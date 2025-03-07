"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useAuthStore } from "@/stores/useAuthStore";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { resetPassword, loading, error, setError } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setMessage("");
      setError(null);
      await resetPassword(email);
      setMessage("Check your email for password reset instructions");
    } catch (err) {
      // Error is already set in the store
      console.error(err);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 sm:p-6">
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-bold">Reset Your Password</h1>
        <p className="mt-2 text-gray-600">
          Enter your email address and well send you a link to reset your
          password.
        </p>
      </div>

      {message && (
        <div className="p-3 mb-4 text-sm text-green-700 bg-green-100 rounded-md">
          {message}
        </div>
      )}

      {error && (
        <div className="p-3 mb-4 text-sm text-red-700 bg-red-100 rounded-md">
          {error}
        </div>
      )}

      <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-1 sm:space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 sm:py-3 px-4 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition-colors"
          disabled={loading}
        >
          {loading ? "Sending..." : "Reset Password"}
        </button>
      </form>

      <div className="mt-6 text-center">
        <Link href="/sign-in" className="text-orange-500 hover:underline">
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
