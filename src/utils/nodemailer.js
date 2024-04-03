import nodemailer from "nodemailer"

const email = process.env.MAIL;
const pass = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: email,
        pass: pass
    }
});



export default transporter;