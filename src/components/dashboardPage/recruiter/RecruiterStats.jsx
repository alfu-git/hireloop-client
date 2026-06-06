import React from "react";
import { FiUsers } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoFlashOutline } from "react-icons/io5";
import { MdOutlineTextSnippet } from "react-icons/md";
import StatCard from "./StatCard";

const RecruiterStats = () => {
  const statsData = [
    {
      title: "Total Job Posts",
      amount: 48,
      icon: <MdOutlineTextSnippet className="w-5 h-5" />,
    },
    {
      title: "Total Applicants",
      amount: 1284,
      icon: <FiUsers className="w-5 h-5" />,
    },
    {
      title: "Active Jobs",
      amount: 18,
      icon: <IoFlashOutline className="w-5 h-5" />,
    },
    {
      title: "Jobs Closed",
      amount: 32,
      icon: <IoMdCheckmarkCircleOutline className="w-5 h-5" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {statsData.map((data, index) => (
        <StatCard key={index} data={data} />
      ))}
    </div>
  );
};

export default RecruiterStats;
