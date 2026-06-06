"use client";

import RecruiterStats from "@/components/dashboardPage/recruiter/RecruiterStats";
import { authClient } from "@/lib/auth-client";
import React from "react";

const RecruiterDashboardHomePage = () => {
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  return (
    <section className="mt-4 mb-8">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-white">
          <h2 className="mt-8 mb-16 text-[32px] font-medium">
            Welcome back, {user?.name}
          </h2>

          <RecruiterStats />
        </div>
      </div>
    </section>
  );
};

export default RecruiterDashboardHomePage;
