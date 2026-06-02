import React from "react";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="max-w-7xl mx-auto px-5">
        {/* top */}
        <div className="flex flex-col lg:flex-row gap-y-15 justify-between lg:items-center">
          {/* left col */}
          <div>
            <Link href={"/"} className="block mb-6">
              <Image
                src={"/assets/images/logo.png"}
                alt="HireLoop Logo"
                width={100}
                height={40}
              />
            </Link>

            <p className="opacity-50 leading-relaxed max-w-xs">
              The AI-native career platform. Built for people who take their
              work seriously.
            </p>
          </div>

          <div className="flex flex-wrap gap-15">
            {/* product */}
            <div>
              <h3 className="text-[#5C53FE] text-lg font-medium mb-6">
                Product
              </h3>

              <ul className="space-y-2 text-[#D0D5DD]">
                <li>
                  <Link href="/" className="hover:text-[#D0D5DD]/80">
                    Job discovery
                  </Link>
                </li>

                <li>
                  <Link href="/" className="hover:text-[#D0D5DD]/80">
                    Worker AI
                  </Link>
                </li>

                <li>
                  <Link href="/" className="hover:text-[#D0D5DD]/80">
                    Companies
                  </Link>
                </li>

                <li>
                  <Link href="/" className="hover:text-[#D0D5DD]/80">
                    Salary data
                  </Link>
                </li>
              </ul>
            </div>

            {/* navigation */}
            <div>
              <h3 className="text-[#5C53FE] text-lg font-medium mb-6">
                Navigations
              </h3>

              <ul className="space-y-2 text-[#D0D5DD]">
                <li>
                  <Link href="/" className="hover:text-[#D0D5DD]/80">
                    Help center
                  </Link>
                </li>

                <li>
                  <Link href="/" className="hover:text-[#D0D5DD]/80">
                    Career library
                  </Link>
                </li>

                <li>
                  <Link href="/" className="hover:text-[#D0D5DD]/80">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* resources */}
            <div>
              <h3 className="text-[#5C53FE] text-lg font-medium mb-6">
                Resources
              </h3>

              <ul className="space-y-2 text-[#D0D5DD]">
                <li>
                  <Link href="/" className="hover:text-[#D0D5DD]/80">
                    Brand Guideline
                  </Link>
                </li>

                <li>
                  <Link href="/" className="hover:text-[#D0D5DD]/80">
                    Newsroom
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="mt-18 flex flex-col gap-y-5 md:flex-row justify-between items-center!">
          {/* social */}
          <div className="flex gap-3 mt-6">
            <Link
              href={"https://www.facebook.com/m.a.faz.495430"}
              target="_blank"
              className="w-10 h-10 text-white bg-white/5 hover:bg-white/10 transition rounded-lg flex items-center justify-center cursor-pointer"
            >
              <FaFacebookF size={18} />
            </Link>

            <Link
              href={"https://github.com/alfu-git"}
              target="_blank"
              className="w-10 h-10 text-white bg-indigo-500 hover:opacity-80 transition rounded-lg flex items-center justify-center cursor-pointer"
            >
              <BsGithub size={18} />
            </Link>

            <Link
              href={"https://www.linkedin.com/in/md-alfaz-dev7/"}
              target="_blank"
              className="w-10 h-10 text-white bg-white/5 hover:bg-white/10 transition rounded-lg flex items-center justify-center cursor-pointer"
            >
              <FaLinkedinIn size={18} />
            </Link>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 items-center justify-center">
            <p className="opacity-70 text-[#ACABB2] hover:text-[#ACABB2]/90">
              Copyright {new Date().getFullYear()} — HireLoop
            </p>

            <Link href="/" className="text-[#ACABB2] hover:text-[#ACABB2]/90">
              Terms & Policy - Privacy Guideline
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
