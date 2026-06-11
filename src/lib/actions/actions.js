"use server";

import {
  getServerMutation,
  postServerMutation,
  updateServerMutation,
} from "./server";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const jobPostAction = async (newJobData) => {
  return postServerMutation(`${baseUrl}/jobs`, newJobData);
};

export const applicationPostAction = async (applyData) => {
  return postServerMutation("/all-applications", applyData);
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
