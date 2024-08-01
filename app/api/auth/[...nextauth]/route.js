// app/api/auth/[...nextauth]/route.js
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/app/firebase';
import User from '@/utilis/model/user';
import { connectToDB } from '@/utilis/mongodb';

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
            const user = {
              email: userCredential.user.email,
              username: userCredential.user.displayName || null,
              password: credentials.password, // Note: Hash this before saving
              phoneNumber: null,
              verified: false,
              level: 0,
              status: 'Unpaid',
              payments: null,
              plan: null,
              isAdmin: false,
            };

            console.log('Saving user:', user);

            const result = await User.updateOne(
              { email: user.email },
              user,
              { upsert: true }
            );

            console.log('Update result:', result);

            return user;
          }

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
