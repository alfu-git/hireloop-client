import { Button } from "@heroui/react";
import { BriefcaseBusiness, MapPin } from "lucide-react";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { TbCoinEuro } from "react-icons/tb";

const SmartJob = () => {
  const jobs = [
    {
      jobName: "Frontend Developer",
      jobType: "Hybrid",
      location: "New York, USA",
      salary: "€25-€40",
      description:
        "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    },
    {
      jobName: "Frontend Developer",
      jobType: "Hybrid",
      location: "New York, USA",
      salary: "€25-€40",
      description:
        "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    },
    {
      jobName: "Frontend Developer",
      jobType: "Hybrid",
      location: "New York, USA",
      salary: "€25-€40",
      description:
        "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    },
  ];

  return (
    <section className="my-30">
      <div className="max-w-7xl mx-auto px-5">
        <div>
          {/* title */}
          <div className="mb-16 flex flex-col items-center text-center">
            <div className="mb-4 flex gap-4 items-center">
              <span className="block w-2 h-2 bg-[#5C53FE]" />

              <p className="text-white sm:text-xl opacity-80">
                SMART JOB DISCOVERY
              </p>

              <span className="block w-2 h-2 bg-[#5C53FE]" />
            </div>

            <h2 className="max-w-122 text-[33px] sm:text-5xl text-white leading-tight">
              The roles you&apos;d never find by searching
            </h2>
          </div>

          {/* jobs */}
          <div className="mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="pt-8 px-6 pb-10 bg-[#151516] rounded-3xl text-white"
              >
                <h3 className="mb-3 text-2xl sm:text-[32px] font-medium">
                  {job?.jobName}
                </h3>

                <p className="mb-8 opacity-60">{job?.description}</p>

                <div className="mb-10 flex flex-wrap gap-2">
                  <span className="py-1.5 px-3 bg-[#1F1F1F] rounded-3xl flex gap-2 items-center">
                    <MapPin className="w-4 h-4" />

                    <span className="text-sm font-medium">{job?.location}</span>
                  </span>

                  <span className="py-1.5 px-3 bg-[#1F1F1F] rounded-3xl flex gap-2 items-center">
                    <BriefcaseBusiness className="w-4 h-4" />

                    <span className="text-sm font-medium">{job?.jobType}</span>
                  </span>

                  <span className="py-1.5 px-3 bg-[#1F1F1F] rounded-3xl flex gap-2 items-center">
                    <TbCoinEuro className="w-4 h-4" />

                    <span className="text-sm font-medium">
                      {job?.salary}/hour
                    </span>
                  </span>
                </div>

                <Button
                  className={
                    "px-0 h-auto bg-transparent text-base font-semibold"
                  }
                >
                  Apply Now <FaArrowRightLong />
                </Button>
              </div>
            ))}
          </div>

          {/* all job open button */}
          <div className="flex justify-center">
            <Button
              className={
                "px-6 h-14.5 bg-white border border-[#090A15]/10 rounded-xl text-[#0B0B14] text-lg font-medium shadow-[0_3px_10px_0_rgba(255,255,255,0.2)]"
              }
            >
              View all job open
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartJob;
