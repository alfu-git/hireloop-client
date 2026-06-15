import { headers } from "next/headers";
import { auth } from "./auth";
import { redirect } from "next/navigation";

export const getUserSession = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return session || null;
};

export const getUserToken = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return session?.session?.token || null;
};

export const requireRole = async (role) => {
  const userSession = await getUserSession();
  const user = userSession?.user;

  if (user?.role !== role) {
    return redirect("/unauthorized");
  }
};
