import asyncHandler from "express-async-handler";
import Student from "@/models/student.model.js";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import connectDB from "@/DB_Config/connectDB.js";

// Connect to the database
connectDB();

// Handler for POST request
export const POST = asyncHandler(async (req) => {
    try {
        // Extract credentials and password from request body
        const { credentials, password } = await req.json();

        // Check if credentials and password are provided
        if ((!credentials || !credentials.trim()) || (!password || !password.trim())) {
            return NextResponse.json(
                { error: "Both fields are required" },
                { status: 400 }
            );
        }

        // Find student document by email or username
        const student = await Student.findOne({
            $or: [{ email: credentials }, { username: credentials }]
        });
        
        // If no student found, return error
        if (!student) {
            return NextResponse.json(
                { error: "Invalid credentials" }, 
                { status: 401 });
        }

        // Prepare data to include in the response
        const studentData = {
            username: student?.username,
            _id: student?._id
        }

        // Check if the provided password matches the hashed password in the database
        const isPasswordMatch = await bcrypt.compare(password, student.password);

        // If password doesn't match, return error
        if (!isPasswordMatch) {
            return NextResponse.json(
                { error: "Invalid password" }, 
                { status: 401 });
        }
        
        // Prepare success response
        const response = NextResponse.json(
            { message: "Login succcessfull", studentData }, 
            { status:201}
        );

        // Generate JWT token
        const tokenValue = {
            _id: student._id,
            username: student.username,
        }
        const token = jwt.sign(tokenValue, process.env.TOKEN_SECRET, {
            expiresIn: "10d"
        });

        // Set token as a cookie in the response
        response.cookies.set("token", token, {
            httpOnly: true,
            // secure: true, // Enable if served over HTTPS
            sameSite: "Strict",  
            maxAge: 10 * 24 * 60 * 60 * 1000 // 10 days in milliseconds
        });

        // Return the response
        return response;

    } catch (error) {
        // Handle any errors
        console.error("Error logging in student:", error.message);
        return NextResponse.json(
            { error: "Something went wrong while logging in" }, 
            { status: 500 });
    }
});
