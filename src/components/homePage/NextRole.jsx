import { Button } from "@heroui/react";
import React from "react";

const NextRole = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-5">
        <div className="pt-30 pb-10 sm:pt-60 sm:pb-30 relative bg-[url('/assets/images/cta-bg.png')] bg-cover bg-center bg-no-repeat">
          {/* content */}
          <div className="flex flex-col items-center text-center text-white">
            <h2 className="mb-4 max-w-172 text-4xl sm:text-[64px] font-medium">
              Your next role is already looking for you
            </h2>

            <p className="mb-12 sm:text-xl opacity-70">
              Build a profile in three minutes. The matches start arriving
              tomorrow morning.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Button
                className={
                  "h-12 sm:h-14.5 px-6 bg-white border border-[#090A15]/10 rounded-[12px] shadow-[0_3px_10px_0_rgba(255,255,255,0.2)] text-[#0B0B14] text-base sm:text-lg font-semibold"
                }
              >
                Create a free account
              </Button>

              <Button
                className={
                  "px-6 h-12 sm:h-14.5 bg-[#0E0B16] border border-[#D7D7D7]/30 rounded-[12px] text-base sm:text-lg font-medium"
                }
              >
                View pricing
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextRole;
