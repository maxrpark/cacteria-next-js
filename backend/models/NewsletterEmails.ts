import mongoose, { Document, Schema, model } from "mongoose";

interface newsletterEmailInt extends Document {
  email: string;
  name: string;
}

const NewsletterEmailSchema = new Schema({
  email: {
    type: String,
    required: [true, "Please provide email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
    unique: true,
  },
  name: {
    type: String,
    required: [true, "Please provide name"],
    minlength: 3,
    maxlength: 20,
  },
});

let NewsletterEmails: mongoose.Model<newsletterEmailInt>;
try {
  NewsletterEmails = model<newsletterEmailInt>("NewsletterEmails");
} catch (error) {
  NewsletterEmails = model<newsletterEmailInt>(
    "NewsletterEmails",
    NewsletterEmailSchema
  );
}
export default NewsletterEmails;
