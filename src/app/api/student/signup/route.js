import asyncHandler from "express-async-handler";
import Student from "@/models/student.model.js";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import connectDB from "@/DB_Config/connectDB";
import jwt from "jsonwebtoken";

// Connect to the database
connectDB();

// Handler for POST request (Student sign-up)
export const POST = asyncHandler(async (req) => {
    try {
        // Extract necessary fields from request body
        const { firstName, lastName, username, email, phoneNumber, password, board } = await req.json();

        // Check if all required fields are provided
        if (![firstName, lastName, username, email, phoneNumber, password, board].every(Boolean)) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        // Check if email or username already exists
        const existingStudent = await Student.findOne({
            $or: [{ email }, { username }, {phoneNumber}]
        });

        if (existingStudent) {
            return NextResponse.json({ error: "Email or username already exists" }, { status: 400 });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new Student document
        const newStudent = await Student.create({
            firstName,
            lastName,
            username,
            email,
            phoneNumber,
            board,
            password: hashedPassword,
            isVerified: true, // Assuming newly signed up Students are verified
        });

        // Handle error if newStudent creation fails
        if (!newStudent) {
            return NextResponse.json(
                { error: "Something went wrong while creating a new student" }, 
                { status: 500 }
            );
        }

        // Prepare success response
        const response = NextResponse.json(
            { message: "Student signed up successfully", newStudent }, 
            { status: 201 }
        );

        // Generate JWT token for authentication
        const tokenValue = {
            _id: newStudent._id,
            username: newStudent.username,
        };

        const token =  jwt.sign(tokenValue, process.env.TOKEN_SECRET, {
            expiresIn: "10d",
        });

        // Set token as a cookie in the response
        response.cookies.set("token", token, {
            httpOnly: true,
            // secure: true, // Enable if served over HTTPS
            sameSite: "Strict",  
            maxAge: 10 * 24 * 60 * 60 * 1000 // 10 days in milliseconds
        });

        return response;

    } catch (error) {
        
        console.error("Error signing up student:", error.message);
        return NextResponse.json(
            { error: "Something went wrong while signing up student" }, 
            { status: 500 }
        );
    }
});
