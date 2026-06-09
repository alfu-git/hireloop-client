"use server";

import { revalidatePath } from "next/cache";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const getServerMutation = async (path) => {
  const res = await fetch(`${baseUrl}${path}`);
  return res.json();
};

export const postServerMutation = async (path, data) => {
  const res = await fetch(`${baseUrl}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

export const updateServerMutation = async (path, data, refreshPath) => {
  const res = await fetch(`${baseUrl}${path}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
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
