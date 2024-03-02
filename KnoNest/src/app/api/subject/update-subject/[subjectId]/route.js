import asyncHandler from "express-async-handler";
import Subject from "@/models/subject.model.js";
import { NextResponse } from "next/server";
import connectDB from "@/DB_Config/connectDB.js";
import { isValidObjectId } from "mongoose";

connectDB()

export const PATCH = asyncHandler(async (req, {params}) => {
    try {
        const { subjectId } = params;
        const { name, description } = await req.json();

        if (!name && !description) {
            return NextResponse.json(
                {message: "No value passed"}
            )
        }
        // Check if subjectId is a valid ObjectId
        if (!isValidObjectId(subjectId)) {
            return NextResponse.json(
            { error: "Please provide a valid subjectId" }, 
            { status: 400 });
        }
        
        const updateValue = {}

        if (name) {
            updateValue.name = name;
        }
        if (description) {
            updateValue.description = description;
        }
        // Find the subject by subjectId
        const updatedSubject = await Subject.findByIdAndUpdate(
            subjectId,
            updateValue,
            { new: true } // Return the updated document
        );
        if (!updatedSubject) {
            return NextResponse.json({ message: "Subject not found" }, { status: 404 });
        }


        return NextResponse.json(
            { message: "Subject updated successfully", updatedSubject });

    } catch (error) {
        console.error("Error updating subject:", error.message);
        return NextResponse.json({ error: "Something went wrong while updating the subject" }, { status: 500 });
    }
});
