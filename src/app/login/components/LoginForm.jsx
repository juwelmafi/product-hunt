"use client";
import React, { useReducer } from "react";
import { useState } from "react";
import { signIn } from "next-auth/react";
import SocialLogin from "./SocialLogin";
// import { useRouter } from "next/router";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signIn("credentials", { email, password, callbackUrl: "/products" });
      // router.push("/")
      // console.log({ email, password });
    } catch (error) {
      console.log(error);
      alert("Athentication Faild");
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block mb-1 text-gray-700 font-medium">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label className="block mb-1 text-gray-700 font-medium">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
          placeholder="Enter your password"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition"
      >
        Login
      </button>
      <SocialLogin/>
    </form>
  );
}
