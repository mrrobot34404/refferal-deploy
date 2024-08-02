import User from "@/utilis/model/user";
import { connectToDB } from "@/utilis/mongodb";
import { NextResponse } from "next/server";

export const POST = async(req,res) =>{
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' });
    }

    try {
      await connectToDB();

      const user = await User.findOne({ email });

      if (user) {
        return NextResponse.json(user);
      } else {
        return NextResponse.json({ error: 'User not found' });
      }
    } catch (error) {
      return NextResponse.json({ error: 'Internal server error' });
    }
  } 
