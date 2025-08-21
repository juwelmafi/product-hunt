import { registerUser } from "@/app/actions/auth/registerUser";
import React from "react";
import { useState } from "react";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerUser({ name, email, password });
  };

  return (
    <form className="space-y-4" onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label className="block mb-1 text-gray-700 font-medium">
          Full Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
          placeholder="Enter your full name"
        />
      </div>

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
        Register
      </button>
    </form>
  );
}
