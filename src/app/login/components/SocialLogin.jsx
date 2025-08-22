// components/SocialLogin.jsx
"use client";
import { signIn } from "next-auth/react";
import React from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

export default function SocialLogin() {
  const handleSocialLogin = async (providerName) => {
    const result = await signIn(providerName, { callbackUrl: "/" });
    if (result) {
      toast.success("Successfully logged in");
    }
  };
  return (
    <div className="flex justify-center mt-4">
      <button
      type="button"
        onClick={() => handleSocialLogin("google")}
        className="flex w-full items-center justify-center gap-2 px-4 py-2 shadow-md hover:bg-gray-100 transition-all duration-200"
      >
        <FcGoogle size={24} />
        <span className="font-medium text-gray-700">Continue with Google</span>
      </button>
    </div>
  );
}
