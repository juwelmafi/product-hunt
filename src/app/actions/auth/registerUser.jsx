"use server";

import dbConnect from "@/lib/dbConnect";
import bcrypt from "bcrypt";
export const registerUser = async (payload) => {
  console.log(payload)
  const userCollection = dbConnect("user");
  // validation

  const { email, password } = payload;


  if (!email || !password) {
    return {success: false};
  }
  const user = await userCollection.findOne({ email: payload.email });
  if (!user) {
    const hashedPass = await bcrypt.hash(password, 10);
    payload.password = hashedPass;
    const result = await userCollection.insertOne(payload);
    const {acknowledged, insertedId} = result;
    return {acknowledged, insertedId};
  }

  return {success: false};
};
