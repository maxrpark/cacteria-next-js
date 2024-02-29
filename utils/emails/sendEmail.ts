import dotenv from "dotenv";
import sgMail from "@sendgrid/mail";
import nodemailer from "nodemailer";
import nodemailerConfig from "./nodemailerConfig";

dotenv.config();
interface emailContent {
  to: string;
  subject: string;
  html: string;
}

const sendEmail = async ({ to, subject, html }: emailContent) => {
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

  const transporter = nodemailer.createTransport(nodemailerConfig);

  const msg = {
    from: '"Cacteria" <proyectoindit@gmail.com>', // sender address
    to,
    subject,
    // text,
    html,
  };
  // const info = await sgMail.send(msg);

  const info = await transporter.sendMail(msg);

  return info;
};

export default sendEmail;
