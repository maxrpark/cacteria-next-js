import { NextApiHandler } from "next";
import { StatusCodes } from "http-status-codes";
import { sendPurchaseEmail } from "../../utils/emails";

const sendPurchaseEmailMsg: NextApiHandler = async (req, res) => {
  const { email, name, total_amount, cart } = req.body;

  if (!email || !name || !total_amount || !cart) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "please provide all values" });
  } else {
    try {
      await sendPurchaseEmail({ name, email, cart, total_amount });
      res.status(StatusCodes.OK).json({ msg: "please check your email" });
    } catch (error) {
      res.status(StatusCodes.OK).json({ msg: error });
    }
  }
};

export default sendPurchaseEmailMsg;
