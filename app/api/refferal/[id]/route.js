import User from "@/utilis/model/user";
import { connectToDB } from "@/utilis/mongodb";
import { NextResponse } from "next/server";


export const GET = async (req, { params }) => {
    try {
      // Connect to the database
      await connectToDB();
  
      // Extract the user ID from the URL parameters
      const { id } = params;
  
      if (!id) {
        return NextResponse.json({ error: 'ID parameter is required' }, { status: 400 });
      }
  
      // Query the database to get users with the specific referralId, excluding those with an empty referralId
      const users = await User.find({
        referalId: id,
      });
  
      if (users.length === 0) {
        return NextResponse.json({ error: 'No users found' }, { status: 404 });
      }
  
      // Return the users as a JSON response
      return NextResponse.json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
    }
  };


