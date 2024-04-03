import asyncHandler from "express-async-handler";
import { NextResponse } from "next/server";
import { isValidObjectId } from "mongoose";
import connectDB from "@/DB_Config/connectDB";
import PlateFormFeedBack from "@/models/plateformFeedback.model";

connectDB()

export const PATCH = asyncHandler(async (req, { params }) => {
    try {
        const { feedbackId } = params;

        const { feedBack } = await req.json();

        // Check if feedbackId is a valid ObjectId
        if (!isValidObjectId(feedbackId)) {
            return NextResponse.json({ error: "Please provide a valid feedbackId" }, { status: 400 });
        }

        // Find the feedback by feedbackId
        let feedback = await PlateFormFeedBack.findById(feedbackId);

        if (!feedback) {
            return NextResponse.json({ message: "Feedback not found" }, { status: 404 });
        }


        // Save the updated feedback
        const updatedFeedback = await PlateFormFeedBack.findByIdAndUpdate(
            feedbackId,
            {
                feedBack: feedBack,
            },
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
