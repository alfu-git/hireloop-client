import { getAllJobs } from "@/lib/api/data";
import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";
import JobCard from "../shared/JobCard";

const SmartJob = async () => {
  const jobs = await getAllJobs();

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
            {jobs.map((job) => (
              <JobCard key={job?._id} job={job} />
            ))}
          </div>

          {/* all job open button */}
          <div className="flex justify-center">
            <Link href={"/browse-jobs"}>
              <Button
                className={
                  "px-6 h-14.5 bg-white border border-[#090A15]/10 rounded-xl text-[#0B0B14] text-lg font-medium shadow-[0_3px_10px_0_rgba(255,255,255,0.2)]"
                }
              >
                View all job open
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartJob;
