import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="flex flex-col items-center">
        {/* Animated Spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute w-full h-full border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute w-12 h-12 top-2 left-2 border-4 border-emerald-400 border-b-transparent rounded-full animate-spin-reverse"></div>
        </div>

        {/* Loading Text */}
        <p className="mt-6 text-gray-600 text-lg font-semibold tracking-wide animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}
