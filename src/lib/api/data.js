import { getServerMutation } from "../actions/server";
import { getUserSession } from "../session";

export const getAllJobs = async () => {
  return getServerMutation("/company-jobs");
};

export const getJobById = async (jobId) => {
  return getServerMutation(`/company-jobs/${jobId}`);
};

export const getJobsByCompanyId = async (companyId, status = "Active") => {
  return getServerMutation(
    `/company-jobs?companyId=${companyId}&status=${status}`,
  );
};

export const getApplicationsByApplicantId = async (applicantId) => {
  return getServerMutation(`/all-applications?applicantId=${applicantId}`);
};

export const getAllCompanies = async () => {
  return getServerMutation("/my-companies");
};

export const getCompaniesByRecruiterId = async (recruiterId) => {
  return getServerMutation(`/my-companies?recruiterId=${recruiterId}`);
};

export const getLoggedInRecruiterCompany = async () => {
  const session = await getUserSession();
  const user = session?.user;
  return await getCompaniesByRecruiterId(user?.id);
};

export const getPlanByPlanId = async (planId) => {
  return getServerMutation(`/plans?planId=${planId}`);
};
