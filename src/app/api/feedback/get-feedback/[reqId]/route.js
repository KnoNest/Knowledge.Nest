import asyncHandler from "express-async-handler";
import Feedback from "@/models/feedback.model.js";
import { NextResponse } from "next/server";
import connectDB from "@/DB_Config/connectDB.js";

connectDB()

export const GET = asyncHandler(async (req, {params}) => {
    try {

        const { reqId } = params

        // Fetch all feedback from the database
        const feedback = await Feedback.find({
            $or: [{toTeacherId: reqId}, { fromStudentId: reqId }, { _id: reqId}]
        });

        return NextResponse.json( feedback );

    } catch (error) {
        console.error("Error fetching feedback:", error.message);

        return NextResponse.json(
            { error: "Something went wrong while fetching feedback" || error.message }, 
            { status: 500 });
    }
});
