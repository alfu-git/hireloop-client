import { ChartLine, Hexagon, Search } from "lucide-react";
import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { MdOutlineContactPage } from "react-icons/md";
import { TbChartBar, TbClick } from "react-icons/tb";

const FeaturesJob = () => {
  const details = [
    {
      title: "Smart Search",
      icon: <Search className="w-8 h-8" />,
      description: "Find your ideal job with advanced filters.",
    },
    {
      title: "Salary Insights",
      icon: <ChartLine className="w-8 h-8" />,
      description: "Get real salary data to negotiate confidently.",
    },
    {
      title: "Top Companies",
      icon: <TbChartBar className="w-8 h-8" />,
      description: "Apply to vetted companies that are hiring.",
    },
    {
      title: "Saved Jobs",
      icon: <FaRegBookmark className="w-8 h-8" />,
      description: "Manage apps & favorites on your dashboard.",
    },
    {
      title: "One-Click Apply",
      icon: <TbClick className="w-8 h-8" />,
      description: "Simplify your job applications for an easier process!",
    },
    {
      title: "Resume Builder",
      icon: <MdOutlineContactPage className="w-8 h-8" />,
      description: "Create professional resumes with modern templates.",
    },
    {
      title: "Skill-Based Matching",
      icon: <Hexagon className="w-8 h-8" />,
      description: "Discover jobs that match your skills and experience.",
    },
    {
      title: "Career Growth Resources",
      icon: <HiMiniArrowTrendingUp className="w-8 h-8" />,
      description: "Boost your career with quick interview tips.",
    },
  ];

  return (
    <section className="py-30 bg-[#151516]">
      <div className="max-w-7xl mx-auto px-5">
        <div>
          {/* title */}
          <div className="mb-16 flex flex-col items-center text-center">
            <div className="mb-4 flex gap-4 items-center">
              <span className="block w-2 h-2 bg-[#5C53FE]" />

              <p className="text-white sm:text-xl opacity-80">FEATURES JOB</p>

              <span className="block w-2 h-2 bg-[#5C53FE]" />
            </div>

            <h2 className="max-w-122 text-[33px] sm:text-5xl text-white leading-tight">
              Everything you need to succeed
            </h2>
          </div>

          {/* details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {details.map((detail, index) => (
              <div key={index} className="flex gap-6 items-center">
                <div className="p-6 bg-linear-to-b from-[#010102] to-[#313131] rounded-lg">
                  <span className="text-[#F7C2FF]">{detail?.icon}</span>
                </div>

                <div className="text-white">
                  <h6 className="mb-2 text-lg font-medium">{detail?.title}</h6>

                  <p className="opacity-70 leading-relaxed">
                    {detail?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesJob;
