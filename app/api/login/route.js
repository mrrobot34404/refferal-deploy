import User from "@/utilis/model/user";
import { connectToDB } from "@/utilis/mongodb";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    // Connect to the database
    await connectToDB();

    // Query the database to get all users
    const users = await User.find({}).lean(); // Use lean() to get plain JavaScript objects

    // Return the users as a JSON response
    return NextResponse.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
};

export const POST = async(req, res) => {
    const users = User; // Note: 'users' should be plural since it's an array
    const payload = await req.json();
    const { username, password } = payload;

    try {
        await connectToDB();
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            return NextResponse.json({ message: "User successfully logged in" });
        } else {
            return NextResponse.json({ message: "Wrong credentials" });
        }
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong" });
    }
};