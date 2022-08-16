import nodemailer from "nodemailer";
import nodemailerConfig from "./nodemailerConfig";

interface emailContent {
  to: string;
  subject: string;
  html: string;
}

const sendEmail = async ({ to, subject, html }: emailContent) => {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport(nodemailerConfig);

  return transporter.sendMail({
    from: '"Cacteria" <cacteria@gmail.com>', // sender address
    to,
    subject,
    // text,
    html,
  });
};

export default sendEmail;