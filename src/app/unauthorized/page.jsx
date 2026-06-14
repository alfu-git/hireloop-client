import React from "react";
import Link from "next/link";
import { Lock } from "lucide-react";

const UnauthorizedPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-5">
      <div className="max-w-xl w-full text-center">
        {/* Card */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl p-10">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-red-500/10 p-5 rounded-full">
              <Lock className="text-red-500 w-10 h-10" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Access Denied
          </h1>

          {/* Subtitle */}
          <p className="text-gray-400 mb-8">
            You don’t have permission to access this page. Please login with the
            correct role or go back home.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <button className="px-6 py-3 rounded-lg bg-white text-gray-900 font-semibold hover:bg-gray-200 transition">
                Go Home
              </button>
            </Link>

            <Link href="/sign-in">
              <button className="px-6 py-3 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition">
                Login
              </button>
            </Link>
          </div>
        </div>

        {/* Footer text */}
        <p className="text-gray-500 text-sm mt-6">
          Error Code: 401 Unauthorized
        </p>
      </div>
    </section>
  );
};

export default UnauthorizedPage;
