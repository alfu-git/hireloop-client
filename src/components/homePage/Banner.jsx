import React from "react";
import Image from "next/image";
import { Button, SearchField, Separator } from "@heroui/react";
import { MapPin, Search } from "lucide-react";

const Banner = () => {
  return (
    <section className="mt-20 md:mt-40">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-col items-center text-center">
          {/* new jobs title-bar */}
          <div className="mb-8 flex items-center">
            <div className="w-15 h-px bg-linear-to-l from-[#A8A8A8] to-transparent" />

            <div className="px-6 py-3 bg-linear-to-b from-[#474747] via-transparent to-transparent border-t border-[#A8A8A8] rounded-3xl flex flex-wrap gap-4 items-center justify-center">
              <Image
                src={"/assets/images/leather-bag.png"}
                alt="Leather Bag"
                width={30}
                height={30}
              />

              <p className="flex flex-wrap justify-center gap-1 text-xl">
                <span className="text-white font-bold">50,000+</span>
                <span className="text-[#FFFFFF]/50">NEW JOBS THIS MONTH</span>
              </p>
            </div>

            <div className="w-15 h-px bg-linear-to-r from-[#A8A8A8] to-transparent" />
          </div>

          <h1 className="mb-4 text-white text-[40px] sm:text-[45px] md:text-[52px] lg:text-[56px] font-bold">
            Find Your Dream Job Today
          </h1>

          <p className="mb-12 max-w-196 text-white opacity-70 md:text-xl">
            HireLoop connects top talent with world-class companies. Browse
            thousands of curated opportunities and land your next role — faster.
          </p>

          {/* search field */}
          <div className="mb-6 py-3 px-6 bg-[#101010] border border-white/20 rounded-2xl flex flex-wrap md:flex-nowrap gap-4 md:gap-6 items-center">
            <SearchField name="search">
              <SearchField.Group className={"bg-transparent"}>
                <SearchField.SearchIcon />
                <SearchField.Input
                  className="w-full"
                  placeholder="Job title, skill or company"
                />
                <SearchField.ClearButton />
              </SearchField.Group>
            </SearchField>

            <Separator orientation="vertical" className="hidden sm:block" />

            <SearchField name="search">
              <SearchField.Group className={"bg-transparent"}>
                <SearchField.SearchIcon>
                  <MapPin />
                </SearchField.SearchIcon>

                <SearchField.Input
                  className="w-full"
                  placeholder="Location or Remote"
                />
                <SearchField.ClearButton />
              </SearchField.Group>
            </SearchField>

            <Button className={"rounded-xl h-12 w-full md:w-auto"}>
              <Search className="w-6 h-6" />
            </Button>
          </div>

          {/* tending position */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="mr-2 text-white opacity-70">
              Trending Position
            </span>

            <span className="py-1.5 px-3 bg-[#1A1A1B] border border-white/10 rounded-3xl text-white text-sm">
              Product Designer
            </span>

            <span className="py-1.5 px-3 bg-[#1A1A1B] border border-white/10 rounded-3xl text-white text-sm">
              AI Engineering
            </span>

            <span className="py-1.5 px-3 bg-[#1A1A1B] border border-white/10 rounded-3xl text-white text-sm">
              Dev-ops Engineer
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
