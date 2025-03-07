"use client";
import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";
import { useAuthStore } from "@/stores/useAuthStore";
import { useRouter } from "next/navigation";
import { useToast } from "@/providers/ToastProvier";
import SocialButton from "@/components/Auth/SocialButton";

interface FormDataType {
  email: string;
  password: string;
  confirmPassword: string;
}

interface AuthResult {
  success: boolean;
  error?: string;
}

const SignUpPage: React.FC = () => {
  const [formData, setFormData] = useState<FormDataType>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordError, setPasswordError] = useState<string>("");

  const { signUp, signInWithGoogle, signInWithFacebook, loading, error, setError } = useAuthStore();
  const toast = useToast();
  const router = useRouter();

  useEffect(() => {
    if (error) {
      toast.error(error);
      setError(null);
    }
  }, [error, setError, toast]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const handleSuccessfulSignUp = useCallback(
    (loadingToastId: string) => {
      toast.dismiss(loadingToastId);
      toast.success("Account created successfully!");
      setTimeout(() => router.push("/"), 500);
    },
    [router, toast]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      const { email, password, confirmPassword } = formData;

      if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
        toast.error("All fields are required");
        return;
      }

      if (password !== confirmPassword) {
        setPasswordError("Passwords do not match");
        return;
      } else {
        setPasswordError("");
      }

      try {
        const loadingToastId = toast.loading("Creating account...");
        const result = await signUp(email, password);

        if (result?.success) {
          handleSuccessfulSignUp(loadingToastId);
        } else if (result?.error) {
          toast.dismiss(loadingToastId);
          toast.error(result.error);
        }
      } catch (err: unknown) {
        const errorMessage =
          err instanceof Error ? err.message : "An error occurred while creating your account";
        toast.error(errorMessage);
        console.error(err);
      }
    },
    [formData, signUp, toast, handleSuccessfulSignUp]
  );

  const createSocialSignInHandler = useCallback(
    (
      provider: string,
      providerFn: () => Promise<AuthResult>,
      loadingMessage: string
    ) =>
    async (): Promise<void> => {
      try {
        const loadingToastId = toast.loading(loadingMessage);
        const result = await providerFn();

        if (result.success) {
          handleSuccessfulSignUp(loadingToastId);
        } else if (result.error) {
          toast.dismiss(loadingToastId);
          toast.error(result.error);
        }
      } catch (err: unknown) {
        const errorMessage =
          err instanceof Error
            ? err.message
            : `An error occurred while signing up with ${provider}`;
        toast.error(errorMessage);
        console.error(err);
      }
    },
    [toast, handleSuccessfulSignUp]
  );

  const handleGoogleSignUp = useCallback(
    createSocialSignInHandler(
      "Google",
      signInWithGoogle,
      "Signing up with Google..."
    ),
    [createSocialSignInHandler, signInWithGoogle]
  );

  const handleFacebookSignUp = useCallback(
    createSocialSignInHandler(
      "Facebook",
      signInWithFacebook,
      "Signing up with Facebook..."
    ),
    [createSocialSignInHandler, signInWithFacebook]
  );

  // Icons for social buttons
  const facebookIcon: React.ReactNode = (
    <svg
      className="h-4 w-4 sm:h-5 sm:w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M24,12.073c0,5.989-4.394,10.954-10.13,11.855v-8.363h2.789l0.531-3.46H13.87V9.86c0-0.947,0.464-1.869,1.95-1.869h1.509V5.045c0,0-1.37-0.234-2.679-0.234c-2.734,0-4.52,1.657-4.52,4.656v2.637H7.091v3.46h3.039v8.363C4.395,23.025,0,18.061,0,12.073c0-6.627,5.373-12,12-12S24,5.445,24,12.073z" />
    </svg>
  );

  const googleIcon: React.ReactNode = (
    <svg
      className="h-4 w-4 sm:h-5 sm:w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
    </svg>
  );

  return (
    <div className="max-w-md mx-auto p-4 sm:p-6">
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-bold">Create Your Account</h1>
        <p className="mt-2 text-gray-600">
          Join Printerval and start shopping today!
        </p>
      </div>

      {passwordError && (
        <div className="p-3 mb-4 text-sm text-red-700 bg-red-100 rounded-md">
          {passwordError}
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
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="space-y-1 sm:space-y-2">
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>

        <div className="space-y-1 sm:space-y-2">
          <label htmlFor="confirmPassword" className="block text-sm font-medium">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            required
            className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 sm:py-3 px-4 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
          disabled={loading}
        >
          {loading ? "Creating Account..." : "Sign Up"}
        </button>
      </form>

      <div className="mt-6 sm:mt-8">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">or</span>
          </div>
        </div>

        <div className="mt-4 sm:mt-6 flex justify-center space-x-4">
          <SocialButton
            onClick={handleFacebookSignUp}
            disabled={loading}
            ariaLabel="Sign up with Facebook"
            bgColor="bg-blue-900"
            icon={facebookIcon}
          />
          <SocialButton
            onClick={handleGoogleSignUp}
            disabled={loading}
            ariaLabel="Sign up with Google"
            bgColor="bg-red-500"
            icon={googleIcon}
          />
        </div>
      </div>

      <p className="mt-6 sm:mt-8 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link
          href="/sign-in"
          className="font-medium text-orange-500 hover:underline"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SignUpPage;