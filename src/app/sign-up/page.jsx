import SignUpForm from "@/components/signUpPage/SignUpForm";
import React from "react";

const SignUpPage = () => {
  return (
    <section className="my-20">
      <div className="max-w-7xl mx-auto px-5">
        <div>
          <div className="mb-8 text-white flex flex-col items-center">
            <h2 className="text-2xl font-bold">Join HireLoop From Today</h2>

            <p className="mt-2 opacity-70">
              Where talent meets opportunity — faster than ever.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <SignUpForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
