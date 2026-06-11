"use client";

import React from "react";
import { MapPin, BriefcaseBusiness, CalendarDays } from "lucide-react";
import {
  HiOutlineCurrencyDollar,
  HiOutlineCurrencyBangladeshi,
} from "react-icons/hi";
import { TbCoinEuro } from "react-icons/tb";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const JobDetailsCard = ({ job }) => {
  const getCurrencyIcon = () => {
    if (job?.currency === "USD") {
      return <HiOutlineCurrencyDollar className="w-5 h-5" />;
    } else if (job?.currency === "EUR") {
      return <TbCoinEuro className="w-5 h-5" />;
    } else {
      return <HiOutlineCurrencyBangladeshi className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-[#111111] text-white rounded-3xl p-6 md:p-10 border border-[#1f1f1f] shadow-xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
        <div className="flex items-center gap-4">
          <Image
            src={job?.companyLogo}
            alt="company"
            width={56}
            height={56}
            className="w-14 h-14 rounded-xl object-cover border border-[#2a2a2a]"
          />

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
              {job?.jobTitle}
            </h2>

            <p className="text-sm text-gray-400">{job?.companyName}</p>
          </div>
        </div>

        <Link href={`/browse-jobs/${job?._id}/apply`}>
          <Button className="bg-linear-to-r from-indigo-500 to-purple-600 text-white font-semibold px-8 py-3 rounded-xl hover:opacity-90 transition">
            Apply
          </Button>
        </Link>
      </div>

      {/* Info Tags */}
      <div className="flex flex-wrap gap-3 mb-8">
        <div className="flex items-center gap-2 bg-[#1a1a1a] px-3 py-1.5 rounded-full text-sm text-gray-300">
          <MapPin className="w-4 h-4" />
          {job?.location}
        </div>

        <div className="flex items-center gap-2 bg-[#1a1a1a] px-3 py-1.5 rounded-full text-sm text-gray-300">
          <BriefcaseBusiness className="w-4 h-4" />
          {job?.jobType}
        </div>

        <div className="flex items-center gap-2 bg-[#1a1a1a] px-3 py-1.5 rounded-full text-sm text-gray-300">
          {getCurrencyIcon()}
          {job?.minSalary} - {job?.maxSalary} / month
        </div>

        <div className="flex items-center gap-2 bg-[#1a1a1a] px-3 py-1.5 rounded-full text-sm text-gray-300">
          <CalendarDays className="w-4 h-4" />
          Deadline: {job?.deadlineDate}
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-2">Job Description</h3>

          <p className="text-gray-400 leading-relaxed">
            {job?.responsibilities}
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Requirements</h3>
          <p className="text-gray-400 leading-relaxed">{job?.requirements}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Benefits</h3>
          <p className="text-gray-400 leading-relaxed">{job?.benefits}</p>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsCard;
