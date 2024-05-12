import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import ejs from "ejs";
import nodemailer from "nodemailer";

const smtpOptions = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "alokshakya2601@gmail.com",
    pass: "xnpcpkkkaywqfvvk",
  },
};

const transporter = nodemailer.createTransport({
  ...smtpOptions,
});

export async function POST(req, res) {
  console.log("req from form side: ", req);
  const fromData = await req.json();
  const templatePath = path.join(process.cwd(), "/lib/demo.ejs");
  const template = fs.readFileSync(templatePath, "utf8");
  const emailData = {
    username: fromData?.username,
    phone: fromData?.phone,
    email: fromData?.email,
    message: fromData?.message,
  };

  const emailContent = ejs.render(template, emailData);
  try {
    let result = await transporter.sendMail({
      from: "alokshakya2601@gmail.com",
      to: fromData?.email,
      subject: `${fromData?.username} - ${fromData?.email} Sent you a message about this ${fromData?.message} address.`,
      html: emailContent,
    });
    console.log(result, "-----result");
    return NextResponse.json(
      {
        msg: "Send email successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error, "error ------ cc");
    return NextResponse.json(
      { error },
      {
        status: 500,
      }
    );
  }
}
