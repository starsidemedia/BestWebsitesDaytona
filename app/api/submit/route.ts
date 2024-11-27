import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message, type } = body;

  try {
    // Prepare email content
    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: process.env.EMAIL_RECIPIENT, // Send to yourself
      subject:
        type === "contact"
          ? "New Contact Form Submission from Best Websites Daytona"
          : "New Newsletter Signup from Best Websites Daytona",
      text:
        type === "contact"
          ? `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
          : `New newsletter signup: ${email}`,
      html:
        type === "contact"
          ? `<h1>New Contact Form Submission</h1><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`
          : `<h1>New Newsletter Signup</h1><p><strong>Email:</strong> ${email}</p>`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Submission successful" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}
