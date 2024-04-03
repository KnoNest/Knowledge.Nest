import transporter from "@/utils/nodemailer.js";
import { NextResponse } from "next/server";
import toast from "react-hot-toast";

const sendMail = async (email, fullName, question) => {
    try {
        await transporter.sendMail({
            from: `${fullName} <${email}>`,
            to: process.env.MAIL,
            subject: `Question asked from ${fullName}`,
            html: `<h1>${fullName}</h1><div style={{color: "Blue"}}>${question}</div>`
        });
    } catch (error) {
        console.log("Error sending message", error.message);
    }
};

export const POST = async (req) => {
    const { email, fullName, question } = await req.json();

    try {
        if (!email.trim() || !fullName.trim() || !question.trim()) {
            return NextResponse.json({error: "Please provide all field"}, {status: 200})
        }
    
        sendMail(email, fullName, question) 

        return NextResponse.json({message: "Sended Successfully"})
    
    } catch (error) {
        toast.error("Something went wrong while sending")
    }
    
};
