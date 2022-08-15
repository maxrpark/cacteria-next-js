import mongoose, { Document, Schema, model } from "mongoose";

interface discountCodeInt extends Document {
  code: string;
  email: mongoose.Types.ObjectId;
  isCodeUsed: boolean;
}

const discountCodeSchema = new Schema({
  code: {
    type: String,
    required: [true, "code missing"],
  },
  email: {
    type: mongoose.Types.ObjectId,
    ref: "Newsletteremails",
    required: true,
  },
  isCodeUsed: {
    type: Boolean,
    default: false,
  },
});

// const DiscountCode = discountCodeSchema
//   ? model<discountCodeInt>("DiscountCode")
//   : model<discountCodeInt>("DiscountCode", discountCodeSchema);

let DiscountCode: mongoose.Model<discountCodeInt>;
try {
  DiscountCode = model<discountCodeInt>("DiscountCode");
} catch (error) {
  DiscountCode = model<discountCodeInt>("DiscountCode", discountCodeSchema);
}
export default DiscountCode;
