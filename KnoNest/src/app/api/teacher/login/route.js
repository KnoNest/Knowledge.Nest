import asyncHandler from "express-async-handler";
import Teacher from "@/models/teacher.model.js";
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

        // Find teacher document by email or username
        const teacher = await Teacher.findOne({
            $or: [{ email: credentials }, { username: credentials }]
        });
        
        // If no teacher found, return error
        if (!teacher) {
            return NextResponse.json(
                { error: "Invalid credentials" }, 
                { status: 401 });
        }
        
        // Prepare data to include in the response
        const teacherData = {
            username: teacher?.username,
            _id: teacher?._id
        }
        
        // Check if the provided password matches the hashed password in the database
        const isPasswordMatch = await bcrypt.compare(password, teacher?.password);
        

        // If password doesn't match, return error
        if (!isPasswordMatch) {
            return NextResponse.json(
                { error: "Invalid password" }, 
                { status: 401 });
        }
        
        // Prepare success response
        const response = NextResponse.json(
            { message: "Login succcessfull", teacherData }, 
            { status:201}
        );

        // Generate JWT token
        const tokenValue = {
            _id: teacher._id,
            username: teacher.username,
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
        console.error("Error logging in teacher:", error.message);
        return NextResponse.json(
            { error: "Something went wrong while logging in" }, 
            { status: 500 });
    }
});
