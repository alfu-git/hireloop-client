import { requireRole } from "@/lib/session";

const adminPageLayout = async ({ children }) => {
  await requireRole("admin");
  return children;
};

export default adminPageLayout;
