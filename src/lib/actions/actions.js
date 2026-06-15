"use server";

import { postServerMutation, updateServerMutation } from "./server";

export const jobPostAction = async (newJobData) => {
  return postServerMutation(`/jobs`, newJobData);
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

export const postSubscriptionInfo = async (subsInfo) => {
  return postServerMutation("/subscriptions", subsInfo);
};

export const companyStatusUpdateAction = async (companyId, updateData) => {
  return updateServerMutation(
    `/companies/${companyId}`,
    updateData,
    "/dashboard/admin/companies",
  );
};
