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
        console.log("Class link sent to:", email);
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
        console.log(error.message);
        return NextResponse.json({ message: "Something went wrong while scheduling OTP task" }, { status: 200 });
    }
};
