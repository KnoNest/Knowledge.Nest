import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import connectDB from "@/DB_Config/connectDB";
import jwt from "jsonwebtoken";
import Teacher from "@/models/teacher.model.js";

// Connect to the database
connectDB();

// Handler for POST request (Teacher sign-up)
export const POST = asyncHandler(async (req) => {
    try {
        // Extract necessary fields from request body
        const { firstName, lastName, username, email, phoneNumber, password, experties, timeOfExperience } = await req.json();

        // Check if all required fields are provided
        if (![firstName, lastName, username, email, phoneNumber, password, experties, timeOfExperience ].every(Boolean)) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        // Check if email or username already exists
        const existingMentee = await Teacher.findOne({
            $or: [{ email }, { username }, { phoneNumber }]
        });
        

        if (existingMentee) {
            return NextResponse.json({ error: "teacher already exists" }, { status: 400 });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new Mentee document
        const newTeacher = await Teacher.create({
            firstName,
            lastName,
            username,
            phoneNumber,
            email,
            experienceDetails: {
                timeOfExperience
            },
            experties,
            password: hashedPassword,
            isVerified: true, 
        });

        // Handle error if newTeacher creation fails
        if (!newTeacher) {
            return NextResponse.json(
                { error: "Something went wrong while creating a new teacher" }, 
                { status: 500 }
            );
        }

        // Prepare success response
        const response = NextResponse.json(
            { message: "Teacher signed up successfully", newTeacher }, 
            { status: 201 }
        );

        // Generate JWT token for authentication
        const tokenValue = {
            _id: newTeacher._id,
            username: newTeacher.username,
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
        // Handle any errors
        console.error("Error signing up teacher:", error.message);
        return NextResponse.json(
            { error: "Something went wrong while signing up teacher" }, 
            { status: 500 }
        );
    }
});
