import { NextApiHandler } from "next";
import { StatusCodes } from "http-status-codes";
import { sendPurchaseEmail } from "../../utils/emails";

const sendPurchaseEmailMsg: NextApiHandler = async (req, res) => {
  const { costumer_details, total_amount, cart_items } = req.body;
  console.log(costumer_details, total_amount, cart_items);

  if (!costumer_details || !total_amount || !cart_items) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "please provide all values" });
  } else {
    try {
      await sendPurchaseEmail({ costumer_details, cart_items, total_amount });
      res.status(StatusCodes.OK).json({ msg: "please check your email" });
    } catch (error) {
      res.status(StatusCodes.OK).json({ msg: error });
    }
  }
};

export default sendPurchaseEmailMsg;
