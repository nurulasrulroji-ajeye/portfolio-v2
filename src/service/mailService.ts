import { NextResponse } from "next/server";

var nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------
export async function sendMail(subject: string, toEmail: string, otpText: string) {
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PW,
        },
    });

    var mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: toEmail,
        subject: subject,
        html: otpText,
    };

    // send mail
    // await transporter.sendMail(mailOptions, (err: any, info: any) => {
    //     if (err) {
    //         console.error(err)
    //     } else {
    //         console.log('Email sent: ' + info.response);
    //     }
    // });

    await new Promise((resolve, reject) => {
        // send mail
        transporter.sendMail(mailOptions, (err: any, response: any) => {
            if (err) {
                reject(err);
            } else {
                resolve(response);
            }
        });
    });
}