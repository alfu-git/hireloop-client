import NewJobPostForm from "@/components/dashboardPage/recruiter/jobs/NewJobPostForm";
import { getLoggedInRecruiterCompany } from "@/lib/api/data";
import React from "react";

const NewJobPostPage = async () => {
  const company = await getLoggedInRecruiterCompany();

  return (
    <section className="my-5">
      <div className="max-w-7xl mx-auto px-5">
        <div>
          <NewJobPostForm company={company} />
        </div>
      </div>
    </section>
  );
};

export default NewJobPostPage;
