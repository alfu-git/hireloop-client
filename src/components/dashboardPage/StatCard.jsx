import React from "react";

const StatCard = ({ data }) => {
  return (
    <div className="p-6 bg-[#1B1B1C] border border-[#444748] rounded-[12px] flex flex-col text-white">
      <span className="mb-10 p-3 max-w-fit bg-[#353436] rounded-lg text-[#E5E2E3]">
        {data?.icon}
      </span>

      <h5 className="mb-2 text-[#C4C7C8] text-sm">{data?.title}</h5>

      <span className="text-2xl font-medium">{data?.amount}</span>
    </div>
  );
};

export default StatCard;
