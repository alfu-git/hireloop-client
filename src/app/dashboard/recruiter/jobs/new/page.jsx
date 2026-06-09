import NewJobPostForm from "@/components/dashboardPage/recruiter/jobs/NewJobPostForm";
import React from "react";

const NewJobPostPage = () => {
  return (
    <section className="my-5">
      <div className="max-w-7xl mx-auto px-5">
        <div>
          <NewJobPostForm />
        </div>
      </div>
    </section>
  );
};

export default NewJobPostPage;
