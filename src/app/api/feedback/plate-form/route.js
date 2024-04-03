import asyncHandler from "express-async-handler";
import { NextResponse } from "next/server";
import { isValidObjectId } from "mongoose";
import connectDB from "@/DB_Config/connectDB.js";
import PlateFormFeedBack from "@/models/plateformFeedback.model";

connectDB()

export const POST = asyncHandler(async (req) => {
    try {
        const { userId, feedBack } = await req.json();

        // Check if sessionId, fromStudentId, and toTeacherId are valid ObjectId
        if (!isValidObjectId(userId)) {
            return NextResponse.json({ error: "Please provide valid userID" }, { status: 400 });
        }
        

        // Create a new feedback 
        const newFeedback = await PlateFormFeedBack.create({
            userId,
            feedBack
        });

        return NextResponse.json(
            { message: "Feedback created successfully", feedback: newFeedback }, 
            { status: 201 });

    } catch (error) {
        console.error("Error creating feedback:", error.message);

        return NextResponse.json(
            { error: "Something went wrong while creating the feedback" || error.message }, 
            { status: 500 });
    }
});
