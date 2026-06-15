"use server";

import { revalidatePath } from "next/cache";
import { getUserToken } from "../session";
import { redirect } from "next/navigation";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const authHeader = async () => {
  const token = await getUserToken();
  const header = {
    authorization: `Bearer ${token}`,
  };
  return token ? header : {};
};

export const getServerMutation = async (path) => {
  const res = await fetch(`${baseUrl}${path}`);
  return res.json();
};

export const protectedGetServerMutation = async (path) => {
  const res = await fetch(`${baseUrl}${path}`, {
    headers: await authHeader(),
  });
  return handleStatusCode(res);
};

export const postServerMutation = async (path, data) => {
  const res = await fetch(`${baseUrl}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return handleStatusCode(res);
};

export const updateServerMutation = async (path, data, refreshPath) => {
  const res = await fetch(`${baseUrl}${path}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      ...(await authHeader()),
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to update company data");
  }

  const result = await res.json();

  if (result?.modifiedCount > 0) {
    revalidatePath(`${refreshPath}`);
  }

  return result;
};

// handle 401, 403 status code
const handleStatusCode = (res) => {
  if (res.status === 401) {
    redirect("/unauthorized");
  } else if (res.status === 403) {
    redirect("/unauthorized");
  }

  return res.json();
};
