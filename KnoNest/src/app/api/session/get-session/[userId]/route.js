import asyncHandler from "express-async-handler";
import Session from "@/models/session.model.js";
import { NextResponse } from "next/server";

export const GET = asyncHandler(async (req, { params }) => {
    try {

        const { userId } = params

        // Fetch all sessions from the database
        const sessions = await Session.find({
            $or: [{studentId: userId}, {teacherId: userId}]
        });

        return NextResponse.json( sessions );
        
    } catch (error) {

        console.error("Error fetching sessions:", error.message);
        return NextResponse.json(
            { error: "Something went wrong while fetching sessions" || error.message }, 
            { status: 500 });
    }
});
