"use client";

import React, { useState } from "react";
import { Button } from "@heroui/react";
import { ArrowRight } from "lucide-react";
import { AiTwotoneCrown } from "react-icons/ai";
import { IoFlash } from "react-icons/io5";
import { LuChartNoAxesCombined } from "react-icons/lu";

const PricingPageContent = () => {
  const [activeTab, setActiveTab] = useState("seekers");

  const pricingData = {
    seekers: [
      {
        id: "seeker_free",
        name: "Free",
        price: 0,
        icon: <AiTwotoneCrown className="w-5 h-5" />,
        features: [
          "Browse & save up to 10 jobs",
          "Apply to 3 jobs/month",
          "Basic profile",
          "Email alerts",
        ],
      },
      {
        id: "seeker_pro",
        name: "Pro",
        price: 19,
        highlight: true,
        icon: <LuChartNoAxesCombined className="w-5 h-5" />,
        features: [
          "Apply up to 30 jobs/month",
          "Unlimited saved jobs",
          "Application tracking",
          "Salary insights",
        ],
      },
      {
        id: "seeker_premium",
        name: "Premium",
        price: 39,
        icon: <IoFlash className="w-5 h-5" />,
        features: [
          "Unlimited applications",
          "Profile boost",
          "Early job access",
          "Priority support",
        ],
      },
    ],

    recruiters: [
      {
        id: "recruiter_free",
        name: "Free",
        price: 0,
        icon: <AiTwotoneCrown className="w-5 h-5" />,
        features: [
          "3 active job posts",
          "Basic applicant management",
          "Standard visibility",
        ],
      },
      {
        id: "recruiter_growth",
        name: "Growth",
        price: 49,
        highlight: true,
        icon: <LuChartNoAxesCombined className="w-5 h-5" />,
        features: [
          "10 active job posts",
          "Applicant tracking",
          "Basic analytics",
          "Email support",
        ],
      },
      {
        id: "recruiter_enterprise",
        name: "Enterprise",
        price: 149,
        icon: <IoFlash className="w-5 h-5" />,
        features: [
          "50 active job posts",
          "Advanced analytics",
          "Featured listings",
          "Team collaboration",
          "Priority support",
        ],
      },
    ],
  };

  const plans = pricingData[activeTab];

  return (
    <div>
      {/* Title */}
      <div className="mb-10 text-center">
        <h2 className="text-white text-4xl sm:text-5xl font-semibold">
          Simple, transparent pricing
        </h2>

        <p className="text-white/60 mt-4">
          Choose the plan that fits your needs
        </p>
      </div>

      {/* Toggle */}
      <div className="flex justify-center mb-12">
        <div className="flex bg-white/10 border border-white/10 p-1 rounded-full">
          <button
            onClick={() => setActiveTab("seekers")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition ${
              activeTab === "seekers" ? "bg-white text-black" : "text-white/70"
            }`}
          >
            Job Seekers
          </button>

          <button
            onClick={() => setActiveTab("recruiters")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition ${
              activeTab === "recruiters"
                ? "bg-white text-black"
                : "text-white/70"
            }`}
          >
            Recruiters
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-6 rounded-3xl border transition flex flex-col ${
              plan.highlight
                ? "bg-[#151516] border-white/20 scale-[1.02]"
                : "bg-[#0B0B0D] border-white/10"
            }`}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-lg border border-white/20 text-[#C084FC]">
                  {plan.icon}
                </span>
                <h3 className="text-white text-xl font-semibold">
                  {plan.name}
                </h3>
              </div>

              <div className="text-white">
                <span className="text-3xl font-bold">${plan.price}</span>
                <span className="text-sm text-white/60">/month</span>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-10">
              {plan.features.map((feature, i) => (
                <p key={i} className="text-white/70 text-sm">
                  • {feature}
                </p>
              ))}
            </div>

            {/* Button */}
            <div className="mt-auto">
              <form action="/api/checkout_sessions" method="POST">
                <section>
                  <input type="hidden" name="plan_id" value={plan?.id} />
                  <Button
                    type="submit"
                    role="link"
                    className={`w-full h-12 rounded-xl font-medium flex justify-between items-center ${
                      plan.highlight
                        ? "bg-white text-black"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    <span>Choose Plan</span>
                    <ArrowRight size={18} />
                  </Button>
                </section>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPageContent;
