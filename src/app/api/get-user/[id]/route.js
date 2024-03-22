import connectDB from "@/DB_Config/connectDB";
import Teacher from "@/models/teacher.model.js";
import asyncHandler from "express-async-handler";
import { NextResponse } from "next/server";
import { isValidObjectId } from "mongoose";
import Student from "@/models/student.model.js";

connectDB()

export const GET = asyncHandler(async (req, { params }) => {
    const { id } = params;
    
    if (!isValidObjectId(id)) {
        return NextResponse.json(
            {error: "id not given"},
            {status: 400})
    }

    const teacher = await Teacher.findById(id).select("-password")
    let student
    if (!teacher) {
        student = await Student.findById(id).select("-password")
    }

    if (!teacher && !student) {
        return NextResponse.json(
            {error: `no user found by id ${id}`})
    }
    const user = teacher ? teacher : student
    return NextResponse.json(user)
});