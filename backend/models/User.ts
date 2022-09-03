import mongoose, { Document, Schema, Model, model } from "mongoose";
import { User } from "../../ts/interfaces/interfaces";

type UserSchemaInt = User & Document;

const UserSchema = new Schema<UserSchemaInt>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  passwordToken: {
    type: String,
  },
  passwordTokenExpirationDate: {
    type: Date,
  },
});

let User: Model<UserSchemaInt>;
try {
  User = model<UserSchemaInt>("User");
} catch (error) {
  User = model<UserSchemaInt>("User", UserSchema);
}
export default User;
