"use client";

import React, { useState } from "react";
import { Link, Button } from "@heroui/react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { authClient } from "@/lib/auth-client";
import AvatarDropdown from "./AvatarDropdown";
import Loading from "../Loading";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const pathname = usePathname();

  const navLinks = (
    <>
      <li>
        <Link
          href="/browse-jobs"
          className={`${pathname === "/browse-jobs" ? "text-[#5C53FE] font-bold" : "text-white text-base"}`}
        >
          Browse Jobs
        </Link>
      </li>

      <li>
        <Link
          href="/company"
          className={`${pathname === "/company" ? "text-[#5C53FE] font-bold" : "text-white text-base"}`}
        >
          Company
        </Link>
      </li>

      <li>
        <Link
          href="/pricing"
          className={`${pathname === "/pricing" ? "text-[#5C53FE] font-bold" : "text-white text-base"}`}
        >
          Pricing
        </Link>
      </li>

      {user?.email && (
        <li>
          <Link
            href={
              user?.role === "seeker"
                ? "/dashboard/seeker"
                : "/dashboard/recruiter"
            }
            className={`${pathname === "/dashboard/seeker" || pathname === "/dashboard/recruiter" ? "text-[#5C53FE] font-bold" : "text-white text-base"}`}
          >
            Dashboard
          </Link>
        </li>
      )}
    </>
  );

  return (
    <nav className="mt-5 sticky top-0 z-40 w-full">
      <header className="flex gap-4 items-center justify-between max-w-7xl mx-auto px-5">
        <div className="flex items-center gap-4">
          <Button
            className="lg:hidden p-0 h-auto bg-transparent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </Button>

          <Link href="/">
            <Image
              src={"/assets/images/logo.png"}
              alt="HireLoop Logo"
              width={100}
              height={40}
            />
          </Link>
        </div>

        <div className="p-2 lg:pl-8 lg:py-2 lg:pr-2 sm:bg-[#222222] rounded-2xl flex items-center">
          <div className="hidden lg:flex items-center">
            <ul className="items-center gap-10 flex">{navLinks}</ul>

            <div className="mx-6 border-r border-[#A8A8A8]/40 h-5 my-auto" />
          </div>

          <div className="flex gap-3 sm:gap-4 items-center">
            {isPending ? (
              <Loading />
            ) : user ? (
              <AvatarDropdown user={user} />
            ) : (
              <Link href="/sign-in">
                <Button className="sm:px-6 sm:h-13 bg-transparent text-[#5C53FE] sm:text-lg font-semibold">
                  Sign In
                </Button>
              </Link>
            )}

            <Link href="/sign-up">
              <Button className="px-2 sm:px-6 h-9 sm:h-12 bg-white rounded-lg text-[#0B0B14] text-sm sm:text-lg font-medium">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* toggle menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:hidden mx-5 mt-1 max-w-fit rounded-xl bg-[#111]/80 backdrop-blur-xl border border-white/10 shadow-lg"
          >
            <ul className="flex flex-col gap-3 p-4">{navLinks}</ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
