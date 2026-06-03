import { Button } from "@heroui/react";
import { ArrowRight, Plus } from "lucide-react";
import React from "react";
import { AiTwotoneCrown } from "react-icons/ai";
import { IoFlash } from "react-icons/io5";
import { LuChartNoAxesCombined } from "react-icons/lu";

const Pricing = () => {
  const packages = [
    {
      type: "Starter",
      price: 0,
      icon: <AiTwotoneCrown className="w-6 h-6" />,
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited",
      ],
    },
    {
      type: "Growth",
      price: 17,
      icon: <LuChartNoAxesCombined className="w-6 h-6" />,
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited",
      ],
    },
    {
      type: "Starter",
      price: 99,
      icon: <IoFlash className="w-6 h-6" />,
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited",
      ],
    },
  ];
  return (
    <section className="py-30">
      <div className="max-w-7xl mx-auto px-5">
        <div>
          {/* title */}
          <div className="mb-16 flex flex-col items-center text-center">
            <div className="mb-4 flex gap-4 items-center">
              <span className="block w-2 h-2 bg-[#5C53FE]" />

              <p className="text-white sm:text-xl opacity-80">Pricing</p>

              <span className="block w-2 h-2 bg-[#5C53FE]" />
            </div>

            <h2 className="max-w-122 text-[33px] sm:text-5xl text-white leading-tight">
              Pay for the leverage, not the listings
            </h2>
          </div>

          {/* content */}
          <div>
            <div className="mb-6 flex justify-center">
              <div className="p-2 max-w-fit bg-white/15 border border-[#F6F6F6]/10 rounded-[36px] flex gap-5 items-center">
                <Button
                  className={
                    "px-4 h-10.5 rounded-[40px] bg-white border border-[#090A15]/10 text-[#010103] text-lg font-medium"
                  }
                >
                  Monthly
                </Button>

                <div className="flex gap-2 items-center text-white">
                  <span className="text-lg font-medium">Yearly</span>

                  <span className="py-1 px-2.5 bg-[#DC02CE] border border-[#7A7B8F]/10 rounded-3xl">
                    25%
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`w-full p-6 border rounded-3xl text-white ${pkg.type === "Growth" ? "bg-[#151516] border-white/20" : "bg-[#010103] border-[#F6EFE1]/20"}`}
                >
                  <div className="mb-8 flex justify-between items-center">
                    <div className="flex gap-4 items-center">
                      <span className="p-2 border border-[#595959]/40 rounded-lg text-[#F7C2FF]">
                        {pkg?.icon}
                      </span>

                      <span className="text-2xl">{pkg?.type}</span>
                    </div>

                    <p className="flex items-baseline">
                      <span className="text-[40px] font-semibold">
                        ${pkg?.price}
                      </span>

                      <span className="text-sm">/month</span>
                    </p>
                  </div>

                  <div className="mb-18">
                    <p className="mb-3 text-lg font-medium">
                      Start building your insights hub:
                    </p>

                    <div className="space-y-4">
                      {pkg?.features?.map((feature, index) => (
                        <p key={index} className="flex gap-3 items-center">
                          <span className="p-1 bg-[#595959]/30 border border-[#F6EFE1]/10 rounded-xl">
                            <Plus />
                          </span>

                          <span className="opacity-70">{feature}</span>
                        </p>
                      ))}
                    </div>
                  </div>

                  <Button
                    className={`px-6 h-14 rounded-xl font-semibold flex justify-between items-center w-full ${pkg?.type === "Growth" ? "bg-white text-[#010103]" : "bg-[#595959]/50 text-white"}`}
                  >
                    <span>Choose This Plan</span>

                    <ArrowRight className="w-6 h-6" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
