import SignInForm from "@/components/signInPage/SignInForm";
import React from "react";

const LogInPage = () => {
  return (
    <section className="my-20">
      <div className="max-w-7xl mx-auto px-5">
        <div>
          <div className="mb-8 text-white flex flex-col items-center">
            <h2 className="text-2xl font-bold">Continue Your Journey</h2>

            <p className="mt-2 opacity-70">
              Pick up where you left off — opportunities are waiting.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <SignInForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogInPage;
