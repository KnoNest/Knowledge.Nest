import asyncHandler from "express-async-handler";
import Feedback from "@/models/feedback.model.js";
import { NextResponse } from "next/server";
import { isValidObjectId } from "mongoose";
import connectDB from "@/DB_Config/connectDB";

connectDB()

export const PATCH = asyncHandler(async (req, { params }) => {
    try {
        const { feedbackId } = params;

        const { content, rating, visibility } = await req.json();

        if (!content && !rating && !visibility) {
            return NextResponse.json(
                { message: "no value passed" },
                { status: 400 })
        }

        // Check if feedbackId is a valid ObjectId
        if (!isValidObjectId(feedbackId)) {
            return NextResponse.json({ error: "Please provide a valid feedbackId" }, { status: 400 });
        }

        // Find the feedback by feedbackId
        let feedback = await Feedback.findById(feedbackId);

        if (!feedback) {
            return NextResponse.json({ message: "Feedback not found" }, { status: 404 });
        }

        const updateValue = {}

        if (content) {
            updateValue.content = content;
        }
        if (rating) {
            updateValue.rating = rating;
        }
        if (visibility) {
            updateValue.visibility = visibility;
        }

        // Save the updated feedback
        const updatedFeedback = await Feedback.findByIdAndUpdate(
            feedbackId,
            updateValue,
            { new: true }
        )

        if (!updatedFeedback) {
            return NextResponse.json({ error: "Something went wrong while updating the feedback" }, { status: 500 });
        }

        return NextResponse.json(
            { message: "Feedback updated successfully", feedback: updatedFeedback });

    } catch (error) {
        console.error("Error updating feedback:", error.message);

        return NextResponse.json(
            { error: "Something went wrong while updating the feedback" || error.message },
            { status: 500 });
    }
});
