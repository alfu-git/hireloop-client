import { getServerMutation } from "../actions/server";
import { getUserSession } from "../session";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const getJobsByCompanyId = async (companyId, status = "Active") => {
  const res = await fetch(
    `${baseUrl}/company-jobs?companyId=${companyId}&status=${status}`,
  );
  return res.json();
};

export const getCompaniesByRecruiterId = async (recruiterId) => {
  return getServerMutation(`/my-companies?recruiterId=${recruiterId}`);
};

export const getLoggedInRecruiterCompany = async () => {
  const session = await getUserSession();
  const user = session?.user;
  return await getCompaniesByRecruiterId(user?.id);
};
