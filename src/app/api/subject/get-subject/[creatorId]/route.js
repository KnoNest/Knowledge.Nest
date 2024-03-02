import asyncHandler from "express-async-handler";
import Subject from "@/models/subject.model.js"; // Assuming you have the Subject model imported
import { NextResponse } from "next/server";
import connectDB from "@/DB_Config/connectDB.js";

connectDB()

export const POST = asyncHandler(async (req, {params}) => {
    try {
        const { creatorId } = params;

        const subject = await Subject.findOne({ creator: creatorId });

        if (!subject) {
            return NextResponse.json(
                { error: "Subject with this creator not found" }, 
                { status: 400 });
        }


        return NextResponse.json(
            { message: "Subject found successfully", subject }, 
            { status: 201 });

    } catch (error) {
        console.error("Error adding subject:", error.message);

        return NextResponse.json(
            { error: "Something went wrong while finding the subject" }, 
            { status: 500 });
    }
});
