import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import connectDb from "@/db/connectDb";
import User from "@/models/User"; // Change to your actual User model filename if it differs

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
    }

    const body = await req.json();
    const { name, username, profilepic } = body;

    await connectDb();

    // Check if username is already taken by someone else
    if (username && username !== session.user.username) {
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return NextResponse.json({ error: "Username is already taken" }, { status: 400 });
      }
    }

    // Update the user profile using their authenticated email address
    const updatedUser = await User.findOneAndUpdate(
      { email: session.user.email },
      {
        $set: {
          name,
          username,
          profilepic
        }
      },
      { new: true }
    );

    if (!updatedUser) {
      return NextResponse.json({ error: "User profile not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Profile updated successfully!", user: updatedUser }, { status: 200 });

  } catch (error) {
    console.error("Database update error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}



