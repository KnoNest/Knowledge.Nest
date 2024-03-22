import connectDB from "@/DB_Config/connectDB";
import Teacher from "@/models/teacher.model.js";
import asyncHandler from "express-async-handler";
import { NextResponse } from "next/server";

connectDB();

export const POST = asyncHandler(async (req) => {
    try {
        const { subjects, experience, languages, standards } = await req.json();

        if (!subjects || !experience || !languages || !standards) {
            return NextResponse.json({ error: "Please provide all fields to search tutors" }, { status: 400 });
        }

        const tutors = await Teacher.aggregate([
            {
                $match: {
                    $or: [
                        { experties: { $regex: subjects, $options: 'i' } },
                        { 'experienceDetails.timeOfExperience': experience },
                        { languages: { $regex: languages, $options: "i" } },
                        { standards: { $regex: standards, $options: "i" } }
                    ]
                }
            }
        ]);

        return NextResponse.json(tutors);
    } catch (error) {
        return NextResponse.json({ error: "Something went wrong while searching tutors by query" }, { status: 500 });
    }
});
