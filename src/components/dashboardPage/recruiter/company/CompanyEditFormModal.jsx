"use client";

import React, { useState, useEffect } from "react";
import { MapPin, Pencil } from "lucide-react";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  ListBox,
  Modal,
  Select,
  TextArea,
  TextField,
} from "@heroui/react";
import toast from "react-hot-toast";
import Image from "next/image";
import { companyUpdateAction } from "@/lib/actions/actions";
import { useRouter } from "next/navigation";

const CompanyEditFormModal = ({ recruiter, company }) => {
  const [companyCategory, setCompanyCategory] = useState(
    `${company?.category}`,
  );
  const [employeeCount, setEmployeeCount] = useState(
    `${company?.employeeCount}`,
  );
  const [description, setDescription] = useState(`${company?.description}`);
  const [formError, setFormError] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // ✅ NEW (easy change tracking)
  const [isChanged, setIsChanged] = useState(false);

  const router = useRouter();

  const isDescriptionInvalid =
    description.length > 0 && description.length < 20;

  // ✅ NEW: image upload
  const uploadImageToImgbb = async (image) => {
    const formData = new FormData();
    formData.append("image", image);

    const apiKey = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;

    const res = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    return data?.data?.url;
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
    setIsChanged(true); // ✅ added
  };

  // ✅ memory cleanup (pro)
  useEffect(() => {
    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
    };
  }, [imagePreview]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ NEW validation
    if (!isChanged) {
      setFormError("Please update at least one field to continue.");
      return;
    } else {
      setFormError("");
    }

    const formData = new FormData(e.target);

    let imageUrl = "";
    // ✅ upload first
    if (imageFile) {
      imageUrl = await uploadImageToImgbb(imageFile);
    }

    const companyUpdatedData = {
      companyName: formData.get("companyName") || company?.companyName,
      category: companyCategory || company?.category,
      websiteUrl: formData.get("websiteUrl") || company?.websiteUrl,
      location: formData.get("location") || company?.location,
      employeeCount: employeeCount || company?.employeeCount,
      description: description || company?.description,
      logo: imageUrl || company?.logo, // ✅ URL added
    };

    try {
      setLoading(true);
      const res = await companyUpdateAction(recruiter?.id, companyUpdatedData);

      if (res?.modifiedCount > 0) {
        toast.success("Details Updated Successfully");
        router.refresh();
      }
    } catch (error) {
      console.log("error: ", error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal>
      <Button
        className={
          "px-0 h-auto bg-transparent text-base text-white font-semibold"
        }
      >
        <Pencil /> Edit Profile
      </Button>

      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-2xl border border-[#444748] rounded-[12px] max-h-[90vh] overflow-y-auto">
            <Modal.CloseTrigger />
            <Modal.Header className="p-6">
              <Modal.Heading className="text-2xl font-medium">
                Register New Company
              </Modal.Heading>

              <p className="text-sm font-medium opacity-60">
                Enter your business details to start hiring on HireLoop.
              </p>

              {formError && (
                <p className="mt-3 text-red-500 text-sm text-center">
                  {formError}
                </p>
              )}
            </Modal.Header>

            <Modal.Body>
              <Form
                onSubmit={handleSubmit}
                className="p-6 space-y-6 bg-[#010103] border-y border-[#444748]"
              >
                {/* name + category */}
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <TextField
                    className="w-full"
                    name="companyName"
                    defaultValue={company?.companyName}
                  >
                    <Label className="mb-2">Company Name</Label>
                    <Input onChange={() => setIsChanged(true)} />
                  </TextField>

                  <Select
                    className="w-full"
                    value={companyCategory}
                    onChange={(value) => {
                      setCompanyCategory(value);
                      setIsChanged(true);
                    }}
                  >
                    <Label className="mb-2">Industry/Category</Label>

                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>

                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="Technology">Technology</ListBox.Item>
                        <ListBox.Item id="Design">Design</ListBox.Item>
                        <ListBox.Item id="Marketing">Marketing</ListBox.Item>
                        <ListBox.Item id="Finance">Finance</ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>
                </div>

                {/* website + location */}
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <TextField
                    className="w-full"
                    name="websiteUrl"
                    defaultValue={company?.websiteUrl}
                  >
                    <Label className="mb-2">Website</Label>

                    <InputGroup>
                      <InputGroup.Prefix>https://</InputGroup.Prefix>
                      <InputGroup.Input
                        className="w-full"
                        type="url"
                        onChange={() => setIsChanged(true)}
                      />
                    </InputGroup>
                  </TextField>

                  <TextField
                    className="w-full"
                    name="location"
                    defaultValue={company?.location}
                  >
                    <Label className="mb-2">Location</Label>

                    <InputGroup>
                      <InputGroup.Prefix>
                        <MapPin className="size-4 text-muted" />
                      </InputGroup.Prefix>

                      <InputGroup.Input
                        className="w-full"
                        onChange={() => setIsChanged(true)}
                      />
                    </InputGroup>
                  </TextField>
                </div>

                {/* employee count + logo */}
                <div className="flex flex-col md:flex-row gap-6">
                  <Select
                    className="w-full"
                    value={employeeCount}
                    onChange={(value) => {
                      setEmployeeCount(value);
                      setIsChanged(true);
                    }}
                  >
                    <Label className="mb-2">Employee Count Range</Label>

                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>

                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="1-10 Employees">
                          1-10 Employees
                        </ListBox.Item>
                        <ListBox.Item id="11-50 Employees">
                          11-50 Employees
                        </ListBox.Item>
                        <ListBox.Item id="51-200 Employees">
                          51-200 Employees
                        </ListBox.Item>
                        <ListBox.Item id="201+ Employees">
                          201+ Employees
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>

                  <div className="w-full">
                    <Label className="block mb-2">Company Logo</Label>

                    <label className="flex flex-col items-center justify-center w-full transition group">
                      <input
                        type="file"
                        name="companyLogo"
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageChange}
                      />

                      <div className="flex items-center gap-4">
                        <span className="p-2 border-2 border-dashed border-white/20 hover:border-white/40 rounded-xl cursor-pointer overflow-hidden">
                          <Image
                            src={imagePreview || company?.logo}
                            alt="preview"
                            width={48}
                            height={48}
                            className="w-12 h-12 object-cover rounded"
                          />
                        </span>

                        <div className="text-center">
                          <p className="text-sm text-white/70 group-hover:text-white">
                            Click to upload logo
                          </p>

                          <p className="text-xs text-white/40 mt-1">
                            PNG, JPG (Max 5MB)
                          </p>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

                {/* description */}
                <TextField
                  isInvalid={isDescriptionInvalid}
                  name="description"
                  value={description}
                  onChange={(value) => {
                    setDescription(value);
                    setIsChanged(true);
                  }}
                >
                  <Label className="mb-2">Brief Description</Label>

                  <TextArea
                    rows={4}
                    className={"resize-none"}
                    placeholder="Tell us about your company's mission and culture..."
                  />
                  {isDescriptionInvalid ? (
                    <FieldError>
                      Description must contain at least 20 characters.
                    </FieldError>
                  ) : (
                    <Description>
                      Minimum 20 characters ({description.length}/20).
                    </Description>
                  )}
                </TextField>

                {/* CTA */}
                <div className="flex justify-end items-center gap-6">
                  <Button
                    type="reset"
                    className={
                      "px-8 bg-transparent rounded-lg border border-default"
                    }
                  >
                    Cancel
                  </Button>

                  <Button
                    isDisabled={loading || !isChanged}
                    type="submit"
                    className={"px-8 bg-white text-[#131314] rounded-lg"}
                  >
                    {loading ? "Updating..." : "Update"}
                  </Button>
                </div>
              </Form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default CompanyEditFormModal;
