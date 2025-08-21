"use client";
import RegisterForm from "./components/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow">
        <h1 className="text-2xl font-bold text-center mb-6">Register</h1>

        <RegisterForm />
        <p className="text-center mt-4 text-gray-600 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-emerald-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
