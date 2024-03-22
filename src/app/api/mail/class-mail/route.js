import transporter from "@/utils/nodemailer.js";
import { NextResponse } from "next/server";
import schedule from 'node-schedule';

const sendClassEmail = async (email) => {
    try {
        await transporter.sendMail({
            from: `Knowledge Nest <${process.env.MAIL}>`,
            to: email,
            subject: "class link",
            html: `<h1>${"link of class"}</h1>`
        });
    } catch (error) {
        console.log("Error sending class link:", error.message);
    }
};

export const POST = async (req) => {
    const { emailOfStudent, emailOfTeacher, date } = await req.json();

    schedule.scheduleJob(date, () => {
        sendClassEmail(emailOfStudent);
        sendClassEmail(emailOfTeacher);
    });

    try {
        return NextResponse.json({ message: "Task scheduled" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong while scheduling OTP task" }, { status: 200 });
    }
};
