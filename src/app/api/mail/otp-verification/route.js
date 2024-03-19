import transporter from "@/utils/nodemailer.js";
import { NextResponse } from "next/server";
import otpGenerator from "otp-generator";

const sendOTP = async (email, otp) => {

    try {
        await transporter.sendMail({
            from: `Knowledge Nest <${process.env.MAIL}>`,
            to: email,
            subject: "Verifiction OTP",
            html: `<h1>${otp, "don't worry about email, I will beautify it"}</h1>`
        });
        console.log("OTP sent to:", email);
    } catch (error) {
        console.log("Error sending OTP:", error.message);
    }
};

export const POST = async (req) => {
    const { email } = await req.json();

    if (!email.trim()) {
        return NextResponse.json({error: "Please provide email"}, {status: 200})
    }

    const otp = otpGenerator.generate(4, { digits: true });

    sendOTP(email, otp) 

    try {
        return NextResponse.json({ message: "OTP sended", otp }, { status: 200 });
    } catch (error) {
        console.log(error.message);
        return NextResponse.json({ message: "Something went wrong while sending OTP" }, { status: 200 });
    }
};
