import asyncHandler from "express-async-handler";
import { isValidObjectId } from "mongoose";
import { NextResponse } from "next/server";
import Teacher from "@/models/teacher.model.js";
import connectDB from "@/DB_Config/connectDB.js";
import { deleteFromCloudinary, uploadOnCloudinary } from "@/utils/cloudinary";

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
            expertise,
            experience,
            achievements,
            capacity,
            availability,
            languages,
            standards
        } = await req.json();

        // if (![firstName, lastName, username, email, avatar, phoneNumber, about, experienceDetails, experties, capacity, availability].every(Boolean)) {
        //     return NextResponse.json(
        //         {message: "no value passed"},
        //         {error: 400})
        // }
        // Check if userId is a valid ObjectId
        if (!isValidObjectId(teacherId)) {
            return NextResponse.json({ error: "Please provide a valid teacherId" }, { status: 400 });
        }

        // // Find the teacher by userId
        let teacher = await Teacher.findById(teacherId);

        if (!teacher) {
            return NextResponse.json({ message: "Teacher not found" }, { status: 404 });
        }

        let avatarURL = avatar;
        if (!avatar.includes("res.cloudinary.com")) {
            avatarURL = await uploadOnCloudinary(avatar)

            if (!avatarURL.url) {
                return NextResponse.json({ error: "Something went wrong while uploading, please try again" },
                    { status: 500 });

            }
            avatarURL = avatarURL.url
            const oldAvatarURL = teacher?.avatar

            if (oldAvatarURL) {
                try {
                    await deleteFromCloudinary(oldAvatarURL)

                } catch (error) {
                    return NextResponse.json({ error: "Something went wrong while deleting old avatar, please try again" },
                        { status: 500 });

                }
            }

        }

        // // Update values
        let updateValue = {};

        if (teacher?.currentMentees === teacher?.capacity) {
            updateValue.isFull = true;
        } else if (teacher?.currentMentees !== teacher?.capacity) {
            updateValue.isFull = false;
        }

        if (firstName) updateValue.firstName = firstName;

        if (lastName) updateValue.lastName = lastName;

        if (username) updateValue.username = username;

        if (email) updateValue.email = email;

        if (avatar) updateValue.avatar = avatarURL;

        if (phoneNumber) updateValue.phoneNumber = phoneNumber;

        if (about) updateValue.about = about;

        if (expertise) updateValue.experties = expertise;

        if (languages) updateValue.languages = languages;

        if (standards) updateValue.standards = standards;

        if (capacity) updateValue.capacity = capacity;

        if (availability) updateValue.availability = availability;

        if (experience || achievements) {
            updateValue.experienceDetails = {
                timeOfExperience: experience || "",
                achievements: achievements || ""
            };
        }

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
