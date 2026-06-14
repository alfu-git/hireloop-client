import CompanyEditFormModal from "@/components/dashboardPage/recruiter/company/CompanyEditFormModal";
import CompanyRegisterFormModal from "@/components/dashboardPage/recruiter/company/CompanyRegisterFormModal";
import { getCompaniesByRecruiterId } from "@/lib/api/data";
import { getUserSession } from "@/lib/session";
import { Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RecruiterCompanyPage = async () => {
  const session = await getUserSession();
  const user = session?.user;

  const companies = (await getCompaniesByRecruiterId(user?.id)) || [];

  return (
    <section className="text-white">
      <div>
        <div className="py-5 max-w-7xl mx-auto px-5 border-b border-[#444748] flex justify-between items-center">
          <h3 className="text-2xl font-medium">My Companies</h3>

          <div></div>
        </div>

        <div className="max-w-7xl mx-auto px-5">
          {companies && companies.length > 0 ? (
            <div className="mt-12">
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-5 mb-16">
                <div>
                  <h2 className="mb-2 text-[32px] font-medium">My Companies</h2>

                  <p className="opacity-60">
                    Manage your registered companies and their verification
                    states.
                  </p>
                </div>

                <CompanyRegisterFormModal recruiter={user} />
              </div>

              <div>
                {companies.map((company) => (
                  <div
                    key={company?._id}
                    className="p-6 bg-[#111111] border border-[#2D2D2D] rounded-[12px]"
                  >
                    <div className="mb-5  flex flex-col-reverse md:flex-row gap-4 justify-between">
                      <div className="flex gap-4 items-center">
                        <figure className="p-2 bg-[#1A191C] rounded-lg">
                          <Image
                            src={company?.logo}
                            alt={company?.companyName}
                            width={60}
                            height={60}
                            className="rounded-md"
                          />
                        </figure>

                        <div className="flex gap-5">
                          <div>
                            <h4 className="mb-1 text-2xl font-bold">
                              {company?.companyName}
                            </h4>

                            <Link
                              href={company?.websiteUrl}
                              target="_blank"
                              className="text-sm text-[#C4C7C8] flex gap-1.5 items-center"
                            >
                              <Globe className="w-4 h-4" />
                              <span>{company?.websiteUrl}</span>
                            </Link>
                          </div>

                          <span
                            className={`
                              py-0.5 px-2 border font-medium rounded-md text-xs max-h-fit
                              ${
                                company?.status === "Pending"
                                  ? "bg-yellow-500/10 border-yellow-400/40 text-yellow-500"
                                  : company?.status === "Approved"
                                    ? "bg-green-500/10 border-green-400/40 text-green-500"
                                    : "bg-red-500/10 border-red-400/40 text-red-500"
                              }
                            `}
                          >
                            {company?.status}
                          </span>
                        </div>
                      </div>

                      <div className="self-end md:self-auto">
                        <CompanyEditFormModal
                          recruiter={user}
                          company={company}
                        />
                      </div>
                    </div>

                    <div className="pt-5 mb-5 border-t border-[#C4C7C8] flex flex-col lg:flex-row gap-4 items-center">
                      <div className="w-full p-4 bg-[#0D0D0F] border border-[#C4C7C8] rounded-lg">
                        <p className="mb-2 text-[#C4C7C8]">INDUSTRY CATEGORY</p>

                        <span className="text-lg font-bold">
                          {company?.category}
                        </span>
                      </div>

                      <div className="w-full p-4 bg-[#0D0D0F] border border-[#C4C7C8] rounded-lg">
                        <p className="mb-2 text-[#C4C7C8]">LOCATION</p>

                        <span className="text-lg font-bold">
                          {company?.location}
                        </span>
                      </div>

                      <div className="w-full p-4 bg-[#0D0D0F] border border-[#C4C7C8] rounded-lg">
                        <p className="mb-2 text-[#C4C7C8]">COMPANY SCALE</p>

                        <span className="text-lg font-bold">
                          {company?.employeeCount}
                        </span>
                      </div>
                    </div>

                    <div>
                      <p className="mb-2 text-base sm:text-lg font-medium">
                        ABOUT OUR VISION & CULTURE
                      </p>

                      <p className="p-4 text-[#C4C7C8] bg-[#0C0B0E] rounded-lg">
                        {company?.description}
                      </p>
                    </div>
                  </div>
                ))}
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
