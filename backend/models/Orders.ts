import mongoose, { Schema, Document, model } from "mongoose";
import {
  costumerCheckoutInfoInt,
  CartItemInt,
  OrderInterface,
} from "../../ts/interfaces";

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

type OrderISchemaInt = OrderInterface & Document;

const OrderSchema = new Schema<OrderISchemaInt>(
  {
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
  },
  {
    timestamps: true,
  }
);

let Order: mongoose.Model<OrderISchemaInt>;
try {
  Order = model<OrderISchemaInt>("Order");
} catch (error) {
  Order = model<OrderISchemaInt>("Order", OrderSchema);
}
export default Order;
