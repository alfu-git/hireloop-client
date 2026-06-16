import JobSearchAndFilterField from "@/components/browseJobsPage/JobSearchAndFilterField";
import JobCard from "@/components/shared/JobCard";
import { getAllJobs } from "@/lib/api/data";
import React from "react";

const BrowseJobsPage = async ({ searchParams }) => {
  const filters = await searchParams;

  const searchQuery = new URLSearchParams(filters);
  const searchQueryString = searchQuery.toString();

  const jobs = await getAllJobs(searchQueryString);

  return (
    <section className="my-20 text-white">
      <div className="max-w-7xl mx-auto px-5">
        <div>
          {/* title */}
          <div className="my-10">
            <h2 className="text-2xl font-bold">
              Browse Jobs That Match Your Ambition
            </h2>

            <p className="mt-2 opacity-70 max-w-xl">
              Discover curated job opportunities tailored to your skills and
              goals. Start your journey with HireLoop today.
            </p>
          </div>

          {/* search + filter field */}
          <JobSearchAndFilterField filters={filters} />

          {/* all jobs */}
          <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobCard key={job?._id} job={job} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseJobsPage;
