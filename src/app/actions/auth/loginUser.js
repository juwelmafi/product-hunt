"use server";

import dbConnect from "@/lib/dbConnect";
import bcrypt from "bcrypt";
export const loginUser = async (payload) => {
  const { email, password } = payload;
  const userCollection = dbConnect("user");
  const user = await userCollection.findOne({ email });
  if (!user) {
    return null;
  }

  const isPassOK = bcrypt.compare(user.password, password);

  if (!isPassOK) {
    return null;
  }

  return user;
};
