import connectDB from "@/DB_Config/connectDB";
import Student from "@/models/student.model.js";
import asyncHandler from "express-async-handler";
import { NextResponse } from "next/server";
import { isValidObjectId } from "mongoose";

connectDB()

export const GET = asyncHandler(async (req, { params }) => {
    const { studentId } = params;
    
    if (!isValidObjectId(studentId)) {
        return NextResponse.json(
            {error: "studentId not given"},
            {status: 400})
    }

    const student = await Student.findById(studentId).select("username _id email")

    if (!student) {
        return NextResponse.json(
            {error: `no user found by studentId ${studentId}`})
    }

    return NextResponse.json(student)
});