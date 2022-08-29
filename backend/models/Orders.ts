import mongoose, { Schema, Document, model } from "mongoose";
import { costumerCheckoutInfoInt, CartItemInt } from "../../ts/interfaces";

const CostumerCheckOutSchema = new Schema<costumerCheckoutInfoInt>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const CartItemsSchema = new Schema<CartItemInt>({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

interface OrderInterface extends Document {
  total: number;
  hasDiscount: boolean;
  cart_items: CartItemInt[];
  costumer_details: costumerCheckoutInfoInt;
  status: string;
}

const OrderSchema = new Schema<OrderInterface>({
  total: {
    type: Number,
    required: true,
  },
  hasDiscount: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    enum: ["pending", "success", "canceled"],
    default: "pending",
  },
  cart_items: [CartItemsSchema],
  costumer_details: CostumerCheckOutSchema,
});

let Order: mongoose.Model<OrderInterface>;
try {
  Order = model<OrderInterface>("Order");
} catch (error) {
  Order = model<OrderInterface>("Order", OrderSchema);
}
export default Order;
