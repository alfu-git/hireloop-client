import { getUserSession } from "@/lib/session";
import {
  Gear,
  House,
  LayoutSideContentLeft,
  Magnifier,
  CirclePlus,
  Factory,
  Envelope,
  Person,
} from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import Link from "next/link";
import { FaMoneyBill, FaRegBookmark } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { MdOutlineDashboard } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";
import { TbBriefcase2 } from "react-icons/tb";

export async function DashboardSideBar() {
  const userSession = await getUserSession();
  const user = userSession?.user;

  const seekerNavLinks = [
    { icon: MdOutlineDashboard, href: "/dashboard/seeker", label: "Dashboard" },
    { icon: Magnifier, href: "/browse-jobs", label: "Jobs" },
    {
      icon: FaRegBookmark,
      href: "/dashboard/seeker/saved-jobs",
      label: "Saved Jobs",
    },
    {
      icon: RiPagesLine,
      href: "/dashboard/seeker/applications",
      label: "Applications",
    },
    {
      icon: FaMoneyBill,
      href: "/dashboard/seeker/billing",
      label: "Billing",
    },
    { icon: Gear, href: "/dashboard/seeker/settings", label: "Settings" },
  ];

  const recruiterNavLinks = [
    { icon: House, href: "/dashboard/recruiter", label: "Home" },
    { icon: Magnifier, href: "/dashboard/recruiter/jobs", label: "Jobs" },
    {
      icon: CirclePlus,
      href: "/dashboard/recruiter/jobs/new",
      label: "Post A Job",
    },
    {
      icon: Factory,
      href: "/dashboard/recruiter/company",
      label: "Company Profile",
    },
    {
      icon: Envelope,
      href: "/dashboard/recruiter/messages",
      label: "Messages",
    },
    { icon: Person, href: "/dashboard/recruiter/profile", label: "Profile" },
    { icon: Gear, href: "/dashboard/recruiter/settings", label: "Settings" },
  ];

  const adminNavLinks = [
    { icon: MdOutlineDashboard, href: "/dashboard/admin", label: "Dashboard" },
    { icon: LuUsers, href: "/dashboard/admin/users", label: "Users" },
    {
      icon: Factory,
      href: "/dashboard/admin/companies",
      label: "Companies",
    },
    {
      icon: TbBriefcase2,
      href: "/dashboard/admin/jobs",
      label: "Jobs",
    },
    {
      icon: FaMoneyBill,
      href: "/dashboard/admin/payments",
      label: "Payments",
    },
    { icon: Gear, href: "/dashboard/recruiter/settings", label: "Settings" },
  ];

  const navItems =
    user?.role === "seeker"
      ? seekerNavLinks
      : user?.role === "recruiter"
        ? recruiterNavLinks
        : adminNavLinks || [];

  const navContent = (
    <nav className="flex flex-col gap-1">
      {navItems.map((item) => (
        <Link href={item?.href} key={item.label}>
          <button
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
            type="button"
          >
            <item.icon className="size-5 text-muted" />
            {item.label}
          </button>
        </Link>
      ))}
    </nav>
  );

  return (
    <>
      <aside className="hidden w-64 shrink-0 border-r border-default p-4 lg:block">
        {navContent}
      </aside>

      <Drawer>
        <Button variant="secondary" className={"lg:hidden"}>
          <LayoutSideContentLeft />
          Sidebar
        </Button>

        <Drawer.Backdrop>
          <Drawer.Content placement="left">
            <Drawer.Dialog>
              <Drawer.CloseTrigger />
              <Drawer.Header>
                <Drawer.Heading>Navigation</Drawer.Heading>
              </Drawer.Header>
              <Drawer.Body>{navContent}</Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </>
  );
}
