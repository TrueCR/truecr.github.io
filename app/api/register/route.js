import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const { email, password, role } = await request.json();
    
    // Check if the user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });
    
    if (existingUser) {
      // User already exists
      return NextResponse.json({ message: "User already exists" }, { status: 409 });
    }
    
    // Salt and hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
    // Include the 'role' field in the data passed to prisma.user.create
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        role,
      },
    });
    
    return NextResponse.json({ message: "User created successfully", user });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ message: "Error creating user", error: error.message }, { status: 500 });
  }
}
