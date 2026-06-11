import React from "react";
import { BriefcaseBusiness, MapPin } from "lucide-react";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  HiOutlineCurrencyBangladeshi,
  HiOutlineCurrencyDollar,
} from "react-icons/hi";
import { TbCoinEuro } from "react-icons/tb";
import { Button } from "@heroui/react";
import Link from "next/link";

const JobCard = ({ job }) => {
  return (
    <div className="pt-8 px-6 pb-10 bg-[#151516] rounded-3xl text-white">
      <h3 className="mb-3 text-2xl sm:text-[32px] font-medium">
        {job?.jobTitle}
      </h3>

      <p className="mb-8 opacity-60">{job?.requirements}</p>

      <div className="mb-10 flex flex-wrap gap-2">
        <span className="py-1.5 px-3 bg-[#1F1F1F] rounded-3xl flex gap-2 items-center">
          <MapPin className="w-4 h-4" />

          <span className="text-sm font-medium">{job?.location}</span>
        </span>

        <span className="py-1.5 px-3 bg-[#1F1F1F] rounded-3xl flex gap-2 items-center">
          <BriefcaseBusiness className="w-4 h-4" />

          <span className="text-sm font-medium">{job?.jobType}</span>
        </span>

        <span className="py-1.5 px-3 bg-[#1F1F1F] rounded-3xl flex gap-2 items-center">
          {job?.currency === "USD" ? (
            <HiOutlineCurrencyDollar className="w-4 h-4" />
          ) : job?.currency === "EUR" ? (
            <TbCoinEuro className="w-4 h-4" />
          ) : (
            <HiOutlineCurrencyBangladeshi />
          )}

          <span className="text-sm font-medium">
            {job?.minSalary}-{job?.maxSalary}/month
          </span>
        </span>
      </div>

      <Link href={`/browse-jobs/${job?._id}`}>
        <Button
          className={"px-0 h-auto bg-transparent text-base font-semibold"}
        >
          Apply Now <FaArrowRightLong />
        </Button>
      </Link>
    </div>
  );
};

export default JobCard;
