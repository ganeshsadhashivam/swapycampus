import { connect } from "@/dbconfig/dbconfig";
import User from "@/models/userModel";

import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcrypt";

// export async function POST(request:NextRequest)=>{
//     try{

//         const reuestBody = await request.json()

//     }catch(error:any){
//         return NextResponse.json({error:error.message},{status:500})
//     }
// }

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const { firstname, lastname, email, password } = await request.json();

    console.log("i am from route.ts", firstname, lastname, email, password);

    // Validate the input
    if (!firstname || !lastname || !email || !password) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    // Connect to the database
    await connect();

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "Email already exists." },
        { status: 409 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return NextResponse.json(
      { message: "User created successfully!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { message: "Something went wrong." },
      { status: 500 }
    );
  }
}
