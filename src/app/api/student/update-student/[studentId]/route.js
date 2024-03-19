import asyncHandler from "express-async-handler";
import { isValidObjectId } from "mongoose";
import { NextResponse } from "next/server";
import Student from "@/models/student.model.js";
import connectDB from "@/DB_Config/connectDB.js";

connectDB()
// COMPLETE SUBJECT UPDATE
export const PATCH = asyncHandler(async (req, { params }) => {
    try {
        const { studentId } = params;
        const { 
            firstName, 
            lastName, 
            username, 
            email, 
            avatar, 
            phoneNumber, 
            about, 
            board, 
            goals } = await req.json();

        // if (![firstName, lastName, username, email, avatar, phoneNumber, about, board, goals].every(Boolean)) {
        //     return NextResponse.json(
        //         {message: "no value passed"},
        //         {error: 400})
        // }

        // Check if studentId is a valid ObjectId
        if (!isValidObjectId(studentId)) {
            return NextResponse.json({ error: "Please provide a valid studentId" }, { status: 400 });
        }
        
        // Find the student by studentId
        let student = await Student.findById(studentId);
        
        if (!student) {
            return NextResponse.json({ message: "Student not found" }, { status: 404 });
        }
        
        let updateValue = {}
        
        if (firstName) {
            updateValue.firstName = firstName;
        }
        if (lastName) {
            updateValue.lastName = lastName;
        }
        if (username) {
            updateValue.username = username;
        }
        if (email) {
            updateValue.email = email;
        }
        if (avatar) {
            updateValue.avatar = avatar;
        }
        if (phoneNumber) {
            updateValue.phoneNumber = phoneNumber;
        }
        if (about) {
            updateValue.about = about;
        }
        if (board) {
            updateValue.board = board;
        }
        if (goals) {
            updateValue.goals = goals;
        }
        // Update the student's profile
        const updatedStudent = await Student.findByIdAndUpdate(
            studentId,
            updateValue,
            { new: true }
        );

        if (!updatedStudent) {
            return NextResponse.json({ error: 'Something went wrong while updating the student' }, { status: 500 });
        }

        return NextResponse.json(updatedStudent);
    } catch (error) {
        return NextResponse.json({ error: "Something went wrong while updating the student" }, { status: 500 });
    }
});
