import asyncHandler from "express-async-handler";
import Feedback from "@/models/feedback.model.js";
import { NextResponse } from "next/server";
import { isValidObjectId } from "mongoose";
import connectDB from "@/DB_Config/connectDB.js";

connectDB()

export const POST = asyncHandler(async (req) => {
    try {
        const { sessionId, fromStudentId, toTeacherId, content, rating, visibility } = await req.json();

        // Check if sessionId, fromStudentId, and toTeacherId are valid ObjectId
        if (!isValidObjectId(sessionId) || !isValidObjectId(fromStudentId) || !isValidObjectId(toTeacherId)) {
            return NextResponse.json({ error: "Please provide valid session, student, and teacher IDs" }, { status: 400 });
        }

        // Create a new feedback 
        const newFeedback = await Feedback.create({
            sessionId,
            fromStudentId,
            toTeacherId,
            content,
            rating,
            visibility
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
