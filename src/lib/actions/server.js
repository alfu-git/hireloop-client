"use server";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const postServerMutation = async (api, data) => {
  const res = await fetch(`${baseUrl}${api}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};
