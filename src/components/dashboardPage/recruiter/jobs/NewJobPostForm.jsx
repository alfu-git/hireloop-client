"use client";

import React, { useState } from "react";
import { MapPin } from "lucide-react";
import {
  Button,
  DateField,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  ListBox,
  Radio,
  RadioGroup,
  Select,
  TextArea,
  TextField,
} from "@heroui/react";
import { Calendar } from "@gravity-ui/icons";
import { jobPostAction } from "@/lib/actions/jobsAction";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

const NewJobPostForm = () => {
  const [jobCategory, setJobCategory] = useState("");
  const [jobType, setJobType] = useState("");
  const [currency, setCurrency] = useState("");
  const [responsibilitiesValue, setResponsibilitiesValue] = useState("");
  const [requirementsValue, setRequirementsValue] = useState("");
  const [benefitsValue, setBenefitsValue] = useState("");
  const [formError, setFormError] = useState("");

  const isResponsibilitiesValueInvalid =
    responsibilitiesValue.length > 0 && responsibilitiesValue.length < 20;
  const isRequirementsValueInvalid =
    requirementsValue.length > 0 && requirementsValue.length < 20;
  const isBenefitsValueInvalid =
    benefitsValue.length > 0 && benefitsValue.length < 20;

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const jobData = {
      jobTitle: formData.get("jobTitle"),
      jobCategory,
      jobType,
      minSalary: Number(formData.get("minSalary")),
      maxSalary: Number(formData.get("maxSalary")),
      currency,
      location: formData.get("location"),
      locationType: formData.get("locationType"),
      deadlineDate: formData.get("deadlineDate"),
      responsibilities: responsibilitiesValue,
      requirements: requirementsValue,
      benefits: benefitsValue,
      companyId: "123",
      status: "active",
      isPubliclyVisible: true,
    };

    if (
      !jobData.jobTitle ||
      !jobData.jobCategory ||
      !jobData.jobType ||
      !jobData.minSalary ||
      !jobData.maxSalary ||
      !jobData.currency ||
      !jobData.location ||
      !jobData.locationType ||
      !jobData.deadlineDate ||
      !jobData.responsibilities ||
      !jobData.requirements
    ) {
      setFormError("Please fill all required fields.");
      return;
    }

    setFormError("");

    const res = await jobPostAction(jobData);

    if (res.insertedId) {
      toast.success(`${jobData.jobTitle} job posted successfully`);
      redirect("/dashboard/recruiter/jobs");
    }
  };

  return (
    <div
      className={`w-full max-w-3xl mx-auto bg-[#0f0f0f] border ${formError ? "border-red-500" : "border-white/10"} rounded-2xl shadow-2xl overflow-hidden`}
    >
      {/* header */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
        <div>
          <h2 className="mb-2 text-2xl font-semibold">Post a New Job</h2>

          <p className="text-sm text-white/50">
            Fill job details to hire candidates
          </p>
        </div>
      </div>

      {/* body */}
      <div className="p-6">
        {/* error message */}
        {formError && (
          <p className="mb-4 text-red-500 text-sm text-center">{formError}</p>
        )}

        <Form onSubmit={handleOnSubmit} className="space-y-6">
          {/* title + category */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            {/* title */}
            <TextField className="w-full" name="jobTitle">
              <Label className="mb-2">Job Title</Label>

              <Input placeholder="e.g. Senior Frontend Engineer" />
            </TextField>

            {/* category */}
            <Select
              className="w-full"
              placeholder="Select one"
              value={jobCategory}
              onChange={(value) => setJobCategory(value)}
            >
              <Label className="mb-2">Job Category</Label>

              <Select.Trigger>
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
          </div>

          {/* type + salary range */}
          <div className="grid grid-cols lg:grid-row lg:grid-cols-6 gap-6 items-center">
            {/* type */}
            <Select
              className="w-full lg:col-span-2"
              placeholder="Select one"
              value={jobType}
              onChange={(value) => setJobType(value)}
            >
              <Label className="mb-2">Job Type</Label>

              <Select.Trigger>
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

            {/* salary range */}
            <div className="lg:col-span-4">
              <Label>Salary Range</Label>

              <div className="mt-2 grid grid-cols-3 gap-3 items-center">
                {/* min  */}
                <TextField name="minSalary" type="number">
                  <Input min="1" placeholder="Min" />
                </TextField>

                {/* max */}
                <TextField name="maxSalary" type="number">
                  <Input min="2" placeholder="Max" />
                </TextField>

                {/* currency type */}
                <Select
                  className="w-full"
                  placeholder="Select one"
                  value={currency}
                  onChange={(value) => setCurrency(value)}
                >
                  <Select.Trigger>
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
          </div>

          {/* location + deadline date */}
          <div className="grid md:grid-cols-6 gap-6 items-center">
            <div className="md:col-span-4">
              <div className="flex justify-between items-center">
                <Label className="mb-2">Location</Label>

                {/* location type */}
                <RadioGroup
                  defaultValue="Remote"
                  name="locationType"
                  orientation="horizontal"
                >
                  <Radio value="Remote">
                    <Radio.Control className="mb-2">
                      <Radio.Indicator />
                    </Radio.Control>

                    <Radio.Content>
                      <Label>Remote</Label>
                    </Radio.Content>
                  </Radio>

                  <Radio value="Onsite">
                    <Radio.Control className="mb-2">
                      <Radio.Indicator />
                    </Radio.Control>

                    <Radio.Content>
                      <Label>Onsite</Label>
                    </Radio.Content>
                  </Radio>
                </RadioGroup>
              </div>

              {/* location */}
              <TextField className="w-full" name="location">
                <InputGroup>
                  <InputGroup.Prefix>
                    <MapPin className="size-4 text-muted" />
                  </InputGroup.Prefix>

                  <InputGroup.Input
                    className="w-full"
                    placeholder="e.g. Austin, TX"
                  />
                </InputGroup>
              </TextField>
            </div>

            <DateField className="w-full md:col-span-2" name="deadlineDate">
              <Label className="mb-2">Date</Label>

              <DateField.Group>
                <DateField.Prefix>
                  <Calendar className="size-4 text-muted" />
                </DateField.Prefix>

                <DateField.Input>
                  {(segment) => <DateField.Segment segment={segment} />}
                </DateField.Input>
              </DateField.Group>
            </DateField>
          </div>

          {/* job description */}
          <div className="mt-10">
            <h4 className="mb-4 text-lg font-bold">Job Description</h4>

            <div className="space-y-6">
              {/* responsibilities */}
              <TextField
                isInvalid={isResponsibilitiesValueInvalid}
                name="responsibilities"
                value={responsibilitiesValue}
                onChange={setResponsibilitiesValue}
              >
                <Label className="mb-2">Responsibilities</Label>

                <TextArea
                  rows={4}
                  className={"resize-none"}
                  placeholder="Outline the core everyday responsibilities for the role..."
                />
                {isResponsibilitiesValueInvalid ? (
                  <FieldError>
                    Responsibilities must contain at least 20 characters.
                  </FieldError>
                ) : (
                  <Description>
                    Minimum 20 characters ({responsibilitiesValue.length}/20).
                  </Description>
                )}
              </TextField>

              {/* requirements */}
              <TextField
                isInvalid={isRequirementsValueInvalid}
                name="requirements"
                value={requirementsValue}
                onChange={setRequirementsValue}
              >
                <Label className="mb-2">Requirements</Label>

                <TextArea
                  rows={4}
                  className={"resize-none"}
                  placeholder="List required experience, skills and certifications..."
                />
                {isRequirementsValueInvalid ? (
                  <FieldError>
                    Requirements must contain at least 20 characters.
                  </FieldError>
                ) : (
                  <Description>
                    Minimum 20 characters ({requirementsValue.length}/20).
                  </Description>
                )}
              </TextField>

              {/* benefits */}
              <TextField
                isInvalid={isBenefitsValueInvalid}
                name="benefits"
                value={benefitsValue}
                onChange={setBenefitsValue}
              >
                <Label className="mb-2">Benefits (Optional)</Label>

                <TextArea
                  rows={4}
                  className={"resize-none"}
                  placeholder="Perks, healthcare, equity, remote stipends..."
                />
                {isBenefitsValueInvalid ? (
                  <FieldError>
                    Benefits must contain at least 20 characters.
                  </FieldError>
                ) : (
                  <Description>
                    Minimum 20 characters ({benefitsValue.length}/20).
                  </Description>
                )}
              </TextField>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-end items-center gap-6">
            <Button
              type="reset"
              className={"bg-transparent rounded-lg border border-default"}
            >
              Cancel
            </Button>

            <Button type="submit" className={"bg-[#5C53FE] rounded-lg"}>
              Post Job
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default NewJobPostForm;
