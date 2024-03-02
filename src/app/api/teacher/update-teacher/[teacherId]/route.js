import asyncHandler from "express-async-handler";
import { isValidObjectId } from "mongoose";
import { NextResponse } from "next/server";
import Teacher from "@/models/teacher.model.js";
import connectDB from "@/DB_Config/connectDB.js";

connectDB()
// COMPLETE SUBJECT UPDATE
export const PATCH = asyncHandler(async (req, { params }) => {
    try {
        const { teacherId } = params;
        const {
            firstName,
            lastName,
            username,
            email,
            avatar,
            phoneNumber,
            about,
            experties,
            experienceDetails,
            capacity,
            availability,
            goals
        } = await req.json();

        if (![firstName, lastName, username, email, avatar, phoneNumber, about, experienceDetails, experties, capacity, availability, goals].every(Boolean)) {
            return NextResponse.json(
                {message: "no value passed"},
                {error: 400})
        }
        // Check if userId is a valid ObjectId
        if (!isValidObjectId(teacherId)) {
            return NextResponse.json({ error: "Please provide a valid teacherId" }, { status: 400 });
        }

        // Find the teacher by userId
        let teacher = await Teacher.findById(teacherId);

        if (!teacher) {
            return NextResponse.json({ message: "Teacher not found" }, { status: 404 });
        }

        // Update values
        let updateValue = {};

        if (teacher?.currentMentees === teacher?.capacity) {
            updateValue.isFull = true;

        } else if (teacher.currentMentees !== teacher?.capacity) {
            updateValue.isFull = false;
        }

        if (firstName) updateValue.firstName = firstName;

        if (lastName) updateValue.lastName = lastName;

        if (username) updateValue.username = username;

        if (email) updateValue.email = email;

        if (avatar) updateValue.avatar = avatar;

        if (phoneNumber) updateValue.phoneNumber = phoneNumber;

        if (about) updateValue.about = about;

        if (experties) updateValue.experties = experties;

        if (experienceDetails) updateValue.experienceDetails = experienceDetails;

        if (capacity) updateValue.capacity = capacity;


        if (availability) updateValue.availability = availability;

        if (goals) updateValue.goals = goals;

        // Update the teacher's profile
        const updatedTeacher = await Teacher.findByIdAndUpdate(
            teacherId,
            updateValue,
            { new: true }
        );

        if (!updatedTeacher) {
            return NextResponse.json({ error: 'Something went wrong while updating the teacher' }, { status: 500 });
        }

        return NextResponse.json(updatedTeacher);
    } catch (error) {
        console.error("Error updating teacher:", error.message);
        return NextResponse.json({ error: "Something went wrong while updating the teacher" }, { status: 500 });
    }
});
