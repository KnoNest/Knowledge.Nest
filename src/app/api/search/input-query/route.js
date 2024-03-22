import connectDB from "@/DB_Config/connectDB";
import Teacher from "@/models/teacher.model.js";
import asyncHandler from "express-async-handler";
import { NextResponse } from "next/server";

connectDB();

export const POST = asyncHandler(async (req) => {
    try {
        const { query } = await req.json();

        if (!query) {
            return NextResponse.json({ error: "Please provide a query to search tutors" }, { status: 400 });
        }


        
        const subjectRegex = subjects.map(subject => new RegExp(subject, 'i'));
        const tutors = await Teacher.find({
            $and: [
                { experties: { $in: subjectRegex } }, 
                { standard: { $in: standardLevels } } 
            ]
        });
        


        return NextResponse.json(tutors);
    } catch (error) {
        return NextResponse.json({ error: "Something went wrong while searching tutors by query" }, { status: 500 });
    }
});
