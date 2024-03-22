import connectDB from "@/DB_Config/connectDB";
import Teacher from "@/models/teacher.model.js";
import asyncHandler from "express-async-handler";
import { NextResponse } from "next/server";

connectDB();

export const GET = asyncHandler(async (req) => {
    try {
        const tutors = await Teacher.find({});
        return NextResponse.json(tutors);
    } catch (error) {
        return NextResponse.json({ error: "Something went wrong while searching tutors" }, { status: 500 });
    }
});
