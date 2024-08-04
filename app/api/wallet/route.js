import User from "@/utilis/model/user";
import { connectToDB } from "@/utilis/mongodb";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    // Connect to the database
    await connectToDB();

    // Query the database to get all users
    const users = await User.find({}).lean(); // Use lean() to get plain JavaScript objects

    // Calculate the total sum of the planPrice field
    const totalPlanPrice = users.reduce((total, user) => total + (user.planPrice || 0), 0);

    // Return the total price as a JSON response
    return NextResponse.json({ totalPlanPrice });
  } catch (error) {
    console.error('Error fetching total plan price:', error);
    return NextResponse.json({ error: 'Failed to fetch total plan price' }, { status: 500 });
  }
};