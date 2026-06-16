"use client";

import { ListBox, SearchField, Select } from "@heroui/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const JobSearchAndFilterField = ({ filters }) => {
  const [searchValue, setSearchValue] = useState("" || filters.search);
  const [categoryFilterValue, setCategoryFilterValue] = useState(
    "" || filters.jobCategory,
  );
  const [typeFilterValue, setTypeFilterValue] = useState("" || filters.jobType);
  const [currencyFilterValue, setCurrencyFilterValue] = useState(
    "" || filters.currency,
  );

  const router = useRouter();

  useEffect(() => {
    const searchParams = new URLSearchParams();

    if (searchValue) {
      searchParams.set("search", searchValue);
    }

    if (categoryFilterValue) {
      searchParams.set("jobCategory", categoryFilterValue);
    }
    if (typeFilterValue) {
      searchParams.set("jobType", typeFilterValue);
    }
    if (currencyFilterValue) {
      searchParams.set("currency", currencyFilterValue);
    }

    const queryPath = `?${searchParams.toString()}`;
    router.push(queryPath);
  }, [
    searchValue,
    categoryFilterValue,
    typeFilterValue,
    currencyFilterValue,
    router,
  ]);

  return (
    <div className="grid grid-cols lg:grid-row gap-7.5 lg:grid-cols-12">
      {/* search */}
      <SearchField
        name="search"
        value={searchValue}
        onChange={setSearchValue}
        className="w-full lg:col-span-5"
      >
        <SearchField.Group className={"px-2 h-15"}>
          <SearchField.SearchIcon />
          <SearchField.Input placeholder="Search..." />
          <SearchField.ClearButton />
        </SearchField.Group>
      </SearchField>

      {/* filter */}
      <div className="lg:col-span-7 flex gap-2 items-center">
        {/* filter by category */}
        <Select
          className="w-full"
          value={categoryFilterValue}
          onChange={(value) => setCategoryFilterValue(value)}
          placeholder="Filter by category"
        >
          <Select.Trigger className={"py-5 px-5"}>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>

          <Select.Popover>
            <ListBox>
              <ListBox.Item id="Technology" textValue="Technology">
                Technology
                <ListBox.ItemIndicator />
              </ListBox.Item>

              <ListBox.Item id="Design" textValue="Design">
                Design
                <ListBox.ItemIndicator />
              </ListBox.Item>

              <ListBox.Item id="Marketing" textValue="Marketing">
                Marketing
                <ListBox.ItemIndicator />
              </ListBox.Item>

              <ListBox.Item id="Business" textValue="Business">
                Business
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>

        {/* filter by type */}
        <Select
          className="w-full"
          value={typeFilterValue}
          onChange={(value) => setTypeFilterValue(value)}
          placeholder="Filter by type"
        >
          <Select.Trigger className={"py-5 px-5"}>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>

          <Select.Popover>
            <ListBox>
              <ListBox.Item id="Full-Time" textValue="Full-Time">
                Full-Time
                <ListBox.ItemIndicator />
              </ListBox.Item>

              <ListBox.Item id="Part-Time" textValue="Part-Time">
                Part-Time
                <ListBox.ItemIndicator />
              </ListBox.Item>

              <ListBox.Item id="Remote" textValue="Remote">
                Remote
                <ListBox.ItemIndicator />
              </ListBox.Item>

              <ListBox.Item id="Contract" textValue="Contract">
                Contract
                <ListBox.ItemIndicator />
              </ListBox.Item>

              <ListBox.Item id="Internship" textValue="Internship">
                Internship
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>

        {/* filter by currency */}
        <Select
          className="w-full"
          value={currencyFilterValue}
          onChange={(value) => setCurrencyFilterValue(value)}
          placeholder="Filter by currency"
        >
          <Select.Trigger className={"py-5 px-5"}>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>

          <Select.Popover>
            <ListBox>
              <ListBox.Item id="BDT" textValue="BDT">
                BDT
                <ListBox.ItemIndicator />
              </ListBox.Item>

              <ListBox.Item id="USD" textValue="USD">
                USD
                <ListBox.ItemIndicator />
              </ListBox.Item>

              <ListBox.Item id="EUR" textValue="EUR">
                EUR
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>
      </div>
    </div>
  );
};

export default JobSearchAndFilterField;
