import JobDetailsCard from "@/components/jobDetailsPage/JobDetailsCard";
import { getJobById } from "@/lib/api/data";
import React from "react";

const JobDetailsPage = async ({ params }) => {
  const { id } = await params;

  const job = await getJobById(id);

  return (
    <section className="my-20 text-white">
      <div className="max-w-7xl mx-auto px-5">
        <div>
          <JobDetailsCard job={job} />
        </div>
      </div>
    </section>
  );
};

export default JobDetailsPage;
