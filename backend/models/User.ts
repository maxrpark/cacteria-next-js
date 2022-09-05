import { Document, Schema, Model, model } from "mongoose";
import bcrypt from "bcryptjs";
import { UserInt } from "../../ts/interfaces";

interface userModel extends UserInt {
  comparePassword: (candidatePassword: string) => string;
}

type UserSchemaInt = userModel & Document;

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

UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.comparePassword = async function (
  candidatePassword: string
) {
  let isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

let User: Model<UserSchemaInt>;
try {
  User = model<UserSchemaInt>("User");
} catch (error) {
  User = model<UserSchemaInt>("User", UserSchema);
}
export default User;
