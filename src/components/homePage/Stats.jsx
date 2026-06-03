import React from "react";
import { LuPackageSearch } from "react-icons/lu";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { RiUserSearchFill } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa";

const Stats = () => {
  const statsData = [
    {
      icon: <LuPackageSearch className="w-6 h-6" />,
      data: `${50}K`,
      title: "Active Jobs",
    },
    {
      icon: <TbBuildingSkyscraper className="w-6 h-6" />,
      data: `${12}K`,
      title: "Companies",
    },
    {
      icon: <RiUserSearchFill className="w-6 h-6" />,
      data: `${2}M`,
      title: "Job Seekers",
    },
    {
      icon: <FaRegStar className="w-6 h-6" />,
      data: `${97}%`,
      title: "Active Jobs",
    },
  ];

  return (
    <section className="mb-18 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        <div>
          <div className="relative bg-[url('/assets/images/globe.png')] bg-cover bg-center bg-no-repeat">
            {/* overlay */}
            <div className="absolute inset-0 bg-[#010103]/50 z-1" />

            {/* content */}
            <div className="relative z-10">
              <h3 className="pt-70 mb-12 max-w-180 mx-auto text-center text-white/70 text-[40px] font-medium">
                Assisting over{" "}
                <strong className="text-white">15,000 job seekers</strong> find
                their dream positions.
              </h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {statsData.map((data, index) => (
                  <div
                    key={index}
                    className="w-full p-6 bg-linear-to-b from-[#010102] to-[#313131] border border-white/10 rounded-2xl text-white"
                  >
                    <span>{data?.icon}</span>

                    <h2 className="mt-10 mb-4 text-[56px] font-semibold">
                      {data?.data}
                    </h2>

                    <span className="text-lg">{data?.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
