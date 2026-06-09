import CompanyRegisterFormModal from "@/components/dashboardPage/recruiter/company/CompanyRegisterFormModal";
import { getUserSession } from "@/lib/session";
import React from "react";

const RecruiterCompanyPage = async () => {
  const session = await getUserSession();
  const user = session?.user;

  const companies = false;

  return (
    <section className="text-white">
      <div>
        <div className="py-5 max-w-7xl mx-auto px-5 border-b border-[#444748] flex justify-between items-center">
          <h3 className="text-2xl font-medium">My Companies</h3>

          <div></div>
        </div>

        <div className="max-w-7xl mx-auto px-5">
          {companies ? (
            <div className="mt-12">
              <div className="flex justify-between items-center mb-16">
                <div>
                  <h2 className="mb-2 text-[32px] font-medium">My Companies</h2>

                  <p className="opacity-60">
                    Manage your registered companies and their verification
                    states.
                  </p>
                </div>

                <CompanyRegisterFormModal recruiter={user} />
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center text-center min-h-screen">
              <div>
                <h3 className="mb-3 text-4xl font-bold">
                  No Company Register Yet
                </h3>

                <p className="mb-8 max-w-140 opacity-60">
                  To start creating structural job posts and tracking incoming
                  pipelines, configure your workspace profile.
                </p>

                <CompanyRegisterFormModal recruiter={user} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RecruiterCompanyPage;
