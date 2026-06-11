import JobApplyForm from "@/components/jobApplyPage/JobApplyForm";
import { getJobById } from "@/lib/api/data";
import { getUserSession } from "@/lib/session";
import { redirect } from "next/navigation";
import React from "react";

const JobApplyPage = async ({ params }) => {
  const { id } = await params;

  const job = await getJobById(id);

  const session = await getUserSession();
  const user = session?.user;

  if (!user) {
    redirect(`/sign-in?redirect=/browse-jobs/${id}/apply`);
  }

  if (user?.role !== "seeker") {
    return (
      <div className="w-full min-h-screen flex flex-col justify-center items-center text-white p-6">
        <p className="text-zinc-400 text-lg text-center">
          Only job seekers can apply for this positions. Please sign in with a
          seeker account to proceed.
        </p>
      </div>
    );
  }

  return (
    <section className="my-20">
      <div className="max-w-7xl mx-auto px-5">
        <div>
          <JobApplyForm job={job} />
        </div>
      </div>
    </section>
  );
};

export default JobApplyPage;
