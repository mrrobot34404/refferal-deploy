import User from '@/utilis/model/user';
import { connectToDB } from '@/utilis/mongodb';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
  try {
    // Connect to the database
    await connectToDB();

    // Extract data from the request body
    const {
      email,
      username,
      password,
      planName,
      screenShot,
      utiNumber,
      address,
      block,
      postOffice,
      state,
      country,
      number,
      nomineeName,
      father,
      relation,
      referalId
    } = await req.json();

    // Validate required fields
    if (!email || !username || !password || !address || !block || !father || !postOffice || !state || !country || !number || !nomineeName || !relation) {
      return NextResponse.json({ error: 'All fields are required!' }, { status: 400 });
    }

    // Check if the user already exists by email
    const existingUser = await User.findOne({ email }).lean();
    if (existingUser) {
      return NextResponse.json({ error: 'User with this email already exists!' }, { status: 400 });
    }

    // Create a new user
    const newUser = new User({
      email,
      username,
      password,
      planName,
      utiNumber,
      screenShot,
      address,
      block,
      postOffice,
      state,
      country,
      number,
      nomineeName,
      father,
      relation,
      referalId
    });

    // Save the new user to the database
    await newUser.save();

    // Return a success response
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
};
