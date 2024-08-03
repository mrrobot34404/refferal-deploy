// app/api/auth/[...nextauth]/route.js
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/app/firebase';
import { connectToDB } from '@/utilis/mongodb';
import User from '@/utilis/model/user';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials.email || !credentials.password) {
          throw new Error('Email and Password are required');
        }

        try {
          await connectToDB();

          const userCredential = await signInWithEmailAndPassword(
            auth,
            credentials.email,
            credentials.password
          );

          if (userCredential.user) {
            // Check if the user exists in the database and create/update as needed
            const existingUser = await User.findOne({ email: userCredential.user.email });

            if (!existingUser) {
              // If user doesn't exist, create a new user entry
              const newUser = new User({
                email: userCredential.user.email,
                username: userCredential.user.displayName || 'User',
                password: credentials.password, // Consider hashing the password before storing
                phoneNumber: null,
                verified: false,
                level: 0,
                status: 'Unpaid',
                screenShot: '',
                planName: '',
                utiNumber: '',
                planPrice: 0,
                isAdmin: false,
              });

              await newUser.save();
            }

            // Return user object with necessary properties
            return {
              email: userCredential.user.email,
              username: userCredential.user.displayName || 'User',
            };
          }

          // If sign-in failed
          return null;
        } catch (error) {
          console.error('Authentication Error:', error);
          throw new Error('Authentication failed');
        }
      },
    }),
  ],
  pages: {
    signIn: '/signin',
    error: '/auth/error',
  },
});

export { handler as GET, handler as POST };
