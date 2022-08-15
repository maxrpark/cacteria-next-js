import { NextApiRequest, NextApiResponse } from "next";
import { StatusCodes } from "http-status-codes";
import connectDB from "../../backend/connectDB/connectDB";
import dotenv from "dotenv";
dotenv.config();

import { newsletterSubscription } from "../../utils/emails";
import NewsletterEmails from "../../backend/models/NewsletterEmails";
import DiscountCode from "../../backend/models/DiscountCode";

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, name } = req.body;

  if (!email || !name) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "please provide all values" });
  }

  try {
    await connectDB(process.env.MONGO_URL as string);
    const alreadyExist = await NewsletterEmails.findOne({ email });

    if (!alreadyExist) {
      let code = (Math.random() + 1).toString(36).substring(7);
      let newEmail = await NewsletterEmails.create({ email, name });

      const newDiscount = await DiscountCode.create({
        email: newEmail._id,
        code,
      });
      await newsletterSubscription({
        name,
        email,
        code: newDiscount.code,
      });
      res.status(StatusCodes.OK).json({ msg: "success" });
    } else {
      res.status(StatusCodes.BAD_REQUEST).json({ msg: "Already subscribed" });
    }
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.OK).json({ msg: error });
  }
};

export default sendEmail;
