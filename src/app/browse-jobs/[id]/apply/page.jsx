import JobApplyForm from "@/components/jobApplyPage/JobApplyForm";
import { getApplicationsByApplicantId, getJobById } from "@/lib/api/data";
import { getUserSession } from "@/lib/session";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const JobApplyPage = async ({ params }) => {
  const { id } = await params;

  const job = await getJobById(id);

  const session = await getUserSession();
  const user = session?.user;

  const userApplications = await getApplicationsByApplicantId(user?.id);

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

  const plan = {
    name: "Free",
    maxApplicationsPerMonth: 3,
  };

  return (
    <section className="my-20">
      <div className="max-w-7xl mx-auto px-5">
        <div>
          <div className="mb-8">
            <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-linear-to-br from-zinc-900 via-zinc-900/80 to-zinc-950 p-6 shadow-lg">
              {/* subtle glow effect */}
              <div className="absolute inset-0 bg-[radial-linear(circle_at_top,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none" />

              <div className="relative z-10 flex flex-col gap-3">
                <h5 className="text-sm text-zinc-400">
                  You have applied so far
                </h5>

                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold text-white">
                    {userApplications.length} / {plan.maxApplicationsPerMonth}
                  </p>

                  <span className="text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
                    {plan.category} Plan
                  </span>
                </div>

                {/* progress bar */}
                <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white transition-all duration-500"
                    style={{
                      width: `${(userApplications.length / plan.maxApplicationsPerMonth) * 100}%`,
                    }}
                  />
                </div>

                <p className="text-sm text-zinc-400">
                  Upgrade your plan to apply for more positions.
                </p>

                <div>
                  <Link
                    href="/pricing"
                    className="inline-block text-sm font-medium px-4 py-2 rounded-lg bg-white text-black hover:bg-zinc-200 transition"
                  >
                    View Plans
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {userApplications.length < plan.maxApplicationsPerMonth && (
            <JobApplyForm applicant={user} job={job} />
          )}
        </div>
      </div>
    </section>
  );
};

export default JobApplyPage;
