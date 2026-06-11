"use client";

import {
  Header,
  Label,
  ListBox,
  SearchField,
  Select,
  Separator,
} from "@heroui/react";
import React, { useState } from "react";

const JobSearchAndFilterField = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("");

  return (
    <div className="flex gap-7.5 justify-between items-center">
      {/* search */}
      <SearchField
        name="search"
        value={searchValue}
        onChange={setSearchValue}
        className="w-full"
      >
        <Label className="text-lg">Search</Label>

        <SearchField.Group className={'px-2 h-15'}>
          <SearchField.SearchIcon />
          <SearchField.Input placeholder="Search..." />
          <SearchField.ClearButton />
        </SearchField.Group>
      </SearchField>

      {/* filter */}
      <Select
        className="w-full"
        value={filterValue}
        onChange={(value) => setFilterValue(value)}
        placeholder="Select an item"
      >
        <Label className="text-lg">Filter</Label>

        <Select.Trigger className={'py-5 px-5'}>
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          <ListBox>
            <ListBox.Section>
              <Header>Category</Header>

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
            </ListBox.Section>

            <Separator />

            <ListBox.Section>
              <Header>Type</Header>

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
            </ListBox.Section>

            <Separator />

            <ListBox.Section>
              <Header>Currency</Header>

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
            </ListBox.Section>
          </ListBox>
        </Select.Popover>
      </Select>
    </div>
  );
};

export default JobSearchAndFilterField;
