"use server";

import { postServerMutation, updateServerMutation } from "./server";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const jobPostAction = async (newJobData) => {
  const res = await fetch(`${baseUrl}/jobs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newJobData),
  });

  return res.json();
};

export const companyCreateAction = async (companyData) => {
  return postServerMutation("/companies", companyData);
};

export const companyUpdateAction = async (recruiterId, updatedData) => {
  return updateServerMutation(
    `/update/my-companies?recruiterId=${recruiterId}`,
    updatedData,
    "/dashboard/recruiter/company",
  );
};
