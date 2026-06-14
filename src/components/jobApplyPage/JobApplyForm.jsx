"use client";

import React, { useState } from "react";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import toast from "react-hot-toast";
import { applicationPostAction } from "@/lib/actions/actions";
import { useRouter } from "next/navigation";

const JobApplyForm = ({ applicant, job }) => {
  const [coverLetter, setCoverLetter] = useState("");
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const isCoverLetterInvalid =
    coverLetter.length > 0 && coverLetter.length < 20;

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const applyData = {
      applicantId: applicant?.id,
      applicantName: formData.get("name"),
      applicantEmail: formData.get("email"),
      applicantNumber: formData.get("phone"),
      resumeLink: formData.get("resumeLink"),
      coverLetter,
      jobId: job?._id,
      jobTitle: job?.jobTitle,
      companyName: job?.companyName,
      status: "Applied",
    };

    if (
      !applyData.applicantName ||
      !applyData.applicantEmail ||
      !applyData.applicantNumber ||
      !applyData.resumeLink ||
      !applyData.coverLetter
    ) {
      setFormError("Please fill all required fields.");
      return;
    }

    if (isCoverLetterInvalid) {
      setFormError("Cover letter must be at least 20 characters.");
      return;
    }

    setFormError("");

    try {
      setLoading(true);

      const res = await applicationPostAction(applyData);

      if (res.insertedId) {
        toast.success(`Application submitted! Best of luck!`);
        router.push("/");
      }
    } catch (error) {
      toast.error("Something went wrong!");
      console.log(error);
    } finally {
      setLoading(false);
      setCoverLetter("");
      setFormError("");
      e.target.reset();
    }
  };

  return (
    <div
      className={`w-full max-w-3xl mx-auto bg-[#0f0f0f] border ${
        formError ? "border-red-500" : "border-white/10"
      } rounded-2xl shadow-2xl overflow-hidden`}
    >
      {/* header */}
      <div className="px-6 py-4 border-b border-white/10">
        <h2 className="mb-2 text-2xl font-semibold">Apply for this Job</h2>

        <p className="text-sm text-white/50">
          {job?.jobTitle} at {job?.companyName}
        </p>

        {formError && (
          <p className="mt-4 text-red-500 text-sm text-center">{formError}</p>
        )}
      </div>

      {/* body */}
      <div className="p-6">
        <Form onSubmit={handleOnSubmit} className="space-y-6">
          {/* full name + email */}
          <div className="flex flex-col md:flex-row gap-6">
            <TextField className="w-full" name="name">
              <Label className="mb-2">Full Name</Label>
              <Input placeholder="Enter your full name" />
            </TextField>

            <TextField className="w-full" name="email" type="email">
              <Label className="mb-2">Email</Label>
              <Input placeholder="Enter your email" />
            </TextField>
          </div>

          {/* phone + resume */}
          <div className="flex flex-col md:flex-row gap-6">
            <TextField className="w-full" name="phone">
              <Label className="mb-2">Phone Number</Label>
              <Input placeholder="Enter your phone number" />
            </TextField>

            <TextField className="w-full" name="resumeLink">
              <Label className="mb-2">Resume Link</Label>
              <Input type="url" placeholder="https://your-resume-link.com" />
            </TextField>
          </div>

          {/* cover letter */}
          <TextField
            isInvalid={isCoverLetterInvalid}
            name="coverLetter"
            value={coverLetter}
            onChange={setCoverLetter}
          >
            <Label className="mb-2">Cover Letter</Label>

            <TextArea
              rows={4}
              className="resize-none"
              placeholder="Write why you are a good fit..."
            />

            {isCoverLetterInvalid ? (
              <FieldError>
                Cover letter must contain at least 20 characters.
              </FieldError>
            ) : (
              <Description>
                Minimum 20 characters ({coverLetter.length}/20)
              </Description>
            )}
          </TextField>

          {/* CTA */}
          <div className="flex justify-end items-center gap-6">
            <Button
              type="reset"
              className="bg-transparent rounded-lg border border-default"
            >
              Cancel
            </Button>

            <Button
              type="submit"
              isDisabled={loading}
              className="bg-[#5C53FE] rounded-lg"
            >
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default JobApplyForm;
