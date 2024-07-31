import { User } from "@/utilis/auth";
import { NextResponse } from "next/server";


export const GET =  (req) => {
   const users = User;
   return NextResponse.json(users);
  };

export const POST = async(req, res) => {
    const users = User; // Note: 'users' should be plural since it's an array
    const payload = await req.json();
    const { username, password } = payload;

    try {
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