"use server";

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
