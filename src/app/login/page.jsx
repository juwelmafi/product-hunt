"use client";
import LoginForm from "./components/LoginForm";

export default function LoginPage() {
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

        <LoginForm/>

        <p className="text-center mt-4 text-gray-600 text-sm">
          Don’t have an account?{" "}
          <a href="/register" className="text-emerald-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
