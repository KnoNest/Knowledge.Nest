import asyncHandler from "express-async-handler";
import Subject from "@/models/subject.model.js"; // Assuming you have the Subject model imported
import { NextResponse } from "next/server";
import connectDB from "@/DB_Config/connectDB.js";

connectDB()

export const POST = asyncHandler(async (req, {params}) => {
    try {
        const { creatorId } = params;
        const { name, description } = await req.json();

        const existingSubject = await Subject.findOne({ creator: creatorId });

        if (existingSubject) {
            return NextResponse.json(
                { error: "Subject with this creator already exists" }, 
                { status: 400 });
        }

        // Create a new subject instance
        const newSubject = await  Subject.create({
            creator: creatorId,
            name, 
            description 
        });

        if (!newSubject) {
            return NextResponse.json(
                { error: "Something went wrong while adding the subject" }, 
                { status: 500 });
        }

        return NextResponse.json(
            { message: "Subject added successfully", newSubject }, 
            { status: 201 });

    } catch (error) {
        console.error("Error adding subject:", error.message);

        return NextResponse.json(
            { error: "Something went wrong while adding the subject" }, 
            { status: 500 });
    }
});
