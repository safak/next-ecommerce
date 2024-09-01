"use client";

import { useWixClient } from "@/hooks/useWixClient";
import { LoginState } from "@wix/sdk";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const RegisterPage = () => {
  const wixClient = useWixClient();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleRecaptcha = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await wixClient.auth.register({
        email,
        password,
        captchaTokens: { invisibleRecaptchaToken: captchaToken || "" },
        profile: { nickname: username },
      });

      if (response?.loginState === LoginState.SUCCESS) {
        setMessage("Registration successful! Logging you in...");
        const tokens = await wixClient.auth.getMemberTokensForDirectLogin(
          response.data.sessionToken!
        );

        Cookies.set("refreshToken", JSON.stringify(tokens.refreshToken), {
          expires: 2,
        });
        wixClient.auth.setTokens(tokens);
        router.push("/");
      } else if (response?.loginState === LoginState.EMAIL_VERIFICATION_REQUIRED) {
        setMessage("Please verify your email address.");
        router.push("/email-verification");
      } else {
        throw new Error("Registration failed. Please try again.");
      }
    } catch (err) {
      if (err instanceof Error) {
        console.error("An error occurred:", err.message);
        setError(err.message || "Something went wrong!");
      } else {
        console.error("An unexpected error occurred:", err);
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center">
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-semibold">Register</h1>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            placeholder="john"
            className="ring-2 ring-gray-300 rounded-md p-4"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-700">E-mail</label>
          <input
            type="email"
            name="email"
            placeholder="john@gmail.com"
            className="ring-2 ring-gray-300 rounded-md p-4"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="ring-2 ring-gray-300 rounded-md p-4"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <ReCAPTCHA
          sitekey="<YOUR_RECAPTCHA_SITE_KEY>"
          onChange={handleRecaptcha}
        />
        <button
          className="bg-lama text-white p-2 rounded-md disabled:bg-pink-200 disabled:cursor-not-allowed"
          disabled={isLoading || !captchaToken}
        >
          {isLoading ? "Loading..." : "Register"}
        </button>
        {error && <div className="text-red-600">{error}</div>}
        <div
          className="text-sm underline cursor-pointer"
          onClick={() => router.push("/login")}
        >
          Already have an account?
        </div>
        {message && <div className="text-green-600 text-sm">{message}</div>}
      </form>
    </div>
  );
};

export default RegisterPage;

