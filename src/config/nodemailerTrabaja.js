import nodemailer from "nodemailer";
import path from "path";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: "dev@quickgold.es",
  attachments: [
    {
      filename: "curriculum.pdf",
      path: path.join(process.cwd(), "public", "curriculum.pdf"),
      contentType: "application/pdf",
    },
  ],
};
