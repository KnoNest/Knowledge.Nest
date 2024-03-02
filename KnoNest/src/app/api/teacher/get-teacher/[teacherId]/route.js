import connectDB from "@/DB_Config/connectDB";
import Teacher from "@/models/teacher.model.js";
import asyncHandler from "express-async-handler";
import { NextResponse } from "next/server";
import { isValidObjectId } from "mongoose";

connectDB()

export const GET = asyncHandler(async (req, { params }) => {
    const { teacherId } = params;
    
    if (!isValidObjectId(teacherId)) {
        return NextResponse.json(
            {error: "teacherId not given"},
            {status: 400})
    }

    const teacher = await Teacher.findById(teacherId).select("username _id email")

    if (!teacher) {
        return NextResponse.json(
            {error: `no user found by metorId ${teacherId}`})
    }

    return NextResponse.json(teacher)
});