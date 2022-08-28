import { StatusCodes } from "http-status-codes";
import { NextApiHandler } from "next";
import Order from "../../backend/models/Orders";
import connectDB from "../../backend/connectDB/connectDB";
import dotenv from "dotenv";
dotenv.config();

const createOrder: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    const { cart_items, costumer_details } = req.body;
    if (!cart_items || !costumer_details) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "Please provide all values" });
    }
    try {
      await connectDB(process.env.MONGO_URL as string);
      const order = await Order.create(req.body);
      res.status(StatusCodes.OK).json(order);
    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).json({ msg: error });
    }
  } else {
    res.status(StatusCodes.BAD_REQUEST).json({ msg: "Method not allow" });
  }
};

export default createOrder;
