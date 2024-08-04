import Transection from "@/utilis/model/transection";
import { connectToDB } from "@/utilis/mongodb";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    // Connect to the database
    await connectToDB();

    // Query the database to get all users
    const transections = await Transection.find({}).lean(); // Use lean() to get plain JavaScript objects

    // Calculate the total sum of the planPrice field
    const totalPlanPrice = transections.reduce((total, transection) => total + (transection.Amount || 0), 0);

    // Return the total price as a JSON response
    return NextResponse.json({ totalPlanPrice });
  } catch (error) {
    console.error('Error fetching total plan price:', error);
    return NextResponse.json({ error: 'Failed to fetch total plan price' }, { status: 500 });
  }

};

export const POST = async (req) => {
    try {
      // Connect to the database
      await connectToDB();
  
      // Parse the JSON body of the request
      const body = await req.json();
  
      // Create a new transection document
      const newTransection = new Transection(body);
  
      // Save the transection to the database
      await newTransection.save();
  
      // Return the saved transection as a JSON response
      return NextResponse.json(newTransection, { status: 201 });
    } catch (error) {
      console.error('Error creating new transection:', error);
      return NextResponse.json({ error: 'Failed to create new transection' }, { status: 500 });
    }
  };
  