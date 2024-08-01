import User from '@/utilis/model/user';
import { connectToDB } from '@/utilis/mongodb';

export async function PATCH(request, { params }) {
  const { id } = params;
  const updates = await request.json();

  try {
    await connectToDB();

    // Build the update object dynamically based on provided fields
    const updateFields = {};
    if (updates.status !== undefined) updateFields.status = updates.status;
    if (updates.plan !== undefined) updateFields.plan = updates.plan;
    if (updates.phoneNumber !== undefined) updateFields.phoneNumber = updates.phoneNumber;
    if (updates.level !== undefined) updateFields.level = updates.level;

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
