import User from '@/utilis/model/user';
import { connectToDB } from '@/utilis/mongodb';
import { NextResponse } from 'next/server';






export const GET = async (req, { params }) => {
  try {
    // Connect to the database
    await connectToDB();

    // Extract the user ID from the URL parameters
    const { id } = params;

    if (!id) {
      return NextResponse.json({ error: 'ID parameter is required' }, { status: 400 });
    }

    // Query the database to get a specific user by ID
    const user = await User.findById(id).lean(); // Use findById for a single user

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Return the user as a JSON response
    return NextResponse.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json({ error: 'Failed to fetch user' }, { status: 500 });
  }
};


export async function PATCH(request, { params }) {
  const { id } = params;
  const updates = await request.json();

  try {
    await connectToDB();

    // Build the update object dynamically based on provided fields
    const updateFields = {};
    if (updates.status !== undefined) updateFields.status = updates.status;
    if (updates.planName !== undefined) updateFields.planName = updates.planName;
    if (updates.utiNumber !== undefined) updateFields.utiNumber = updates.utiNumber;
    if (updates.planPrice !== undefined) updateFields.planPrice = updates.planPrice;
    if (updates.screenShot !== undefined) updateFields.screenShot = updates.screenShot;
    if (updates.phoneNumber !== undefined) updateFields.phoneNumber = updates.phoneNumber;
    if (updates.level !== undefined) updateFields.level = updates.level;
    if (updates.verified !== undefined) updateFields.verified = updates.verified;
    
    // Update user record
    const result = await User.findByIdAndUpdate(
      id,
      updateFields,
      { new: true } // Return the updated document
    );

    if (!result) {
      return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
    }

    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    console.error('Error updating user:', error);
    return new Response(JSON.stringify({ error: 'Failed to update user' }), { status: 500 });
  }
}
