import asyncHandler from "express-async-handler";
import Session from "@/models/session.model.js";
import { NextResponse } from "next/server";
import { isValidObjectId } from "mongoose";
import connectDB from "@/DB_Config/connectDB.js";
import schedule from 'node-schedule';

connectDB()

export const POST = asyncHandler(async (req) => {
    try {
        const { teacherId, studentId, startTime, endTime, topics } = await req.json();

        // Check if teacherId and studentId are valid ObjectId
        if (!isValidObjectId(teacherId) || !isValidObjectId(studentId)) {
            return NextResponse.json({ error: "Please provide valid teacherId and studentId" }, { status: 400 });
        }


        // Create a new session instance
        const newSession = await Session.create({
            teacherId,
            studentId,
            startTime,
            endTime,
            status: false,
            topics,
        });

        schedule.scheduleJob(startTime, async () => {
            await Session.findByIdAndUpdate(
                newSession._id,
                { status: true },
                { new: true }
            )
        })

        schedule.scheduleJob(endTime, async () => {
            await Session.findByIdAndUpdate(
                newSession._id,
                { status: false },
                { new: true }
            )
        })

        return NextResponse.json(
            { message: "Session created successfully", session: newSession },
            { status: 201 });

    } catch (error) {
        console.error("Error creating session:", error.message);
        return NextResponse.json({ error: "Something went wrong while creating the session" }, { status: 500 });
    }
});
