import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

import bcrypt from "bcryptjs";
import connectDB from "../../../backend/connectDB/connectDB";
import User from "../../../backend/models/User";

export default NextAuth({
  secret: process.env.JWT_SECRET,
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },

  providers: [
    CredentialsProvider({
      async authorize(credentials: any) {
        const { email, password } = credentials;
        await connectDB(process.env.MONGO_URL as string);
        const user = await User.findOne({ email });

        if (!user) {
          throw new Error("Invalid credentials");
        }

        const isPasswordCorrect = await user.comparePassword(password);

        if (!isPasswordCorrect) {
          throw new Error("Invalid credentials");
        }

        return user;
      },
      credentials: {},
    }),
  ],
});
