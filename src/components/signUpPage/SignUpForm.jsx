"use client";
import React, { useState } from "react";
import { Envelope, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { Eye, Lock, User } from "lucide-react";
import Link from "next/link";
import { IoIosLink } from "react-icons/io";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
// import GoogleLoginBtn from "../shared/GoogleLoginBtn";

const SignUpForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());

    setLoading(true);

    const { data, error } = await authClient.signUp.email({
      name: userData.name,
      email: userData.email,
      image: userData.image,
      password: userData.password,
    });

    setLoading(false);

    if (error) {
      toast.error(<p className="text-black font-bold">{error.message}</p>);
    }

    if (data) {
      toast.success(
        <h6 className="font-bold">Account Created Successfully</h6>,
      );

      router.push("login");
    }
  };

  const inputGroupClass =
    "bg-white rounded-lg overflow-hidden  focus-within:ring-2 focus-within:ring-[#5C53FE] focus-within:shadow-lg-[#5C53FE] focus-within:shadow-[0_0_15px_#5C53FE] transition-all duration-200";

  return (
    <div className="p-10 bg-linear-to-t from-[#010102] to-[#313131] rounded-3xl">
      <Form onSubmit={handleOnSubmit} className="space-y-6">
        {/* name */}
        <TextField isRequired type="text">
          <Label className="text-white">Full name</Label>

          <InputGroup className={inputGroupClass}>
            <InputGroup.Prefix>
              <User className="size-4 text-primary" />
            </InputGroup.Prefix>

            <InputGroup.Input
              name="name"
              placeholder="Enter your name"
              className={"pl-3"}
            />
          </InputGroup>

          <FieldError />
        </TextField>

        {/* email */}
        <TextField
          isRequired
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label className="text-white">Email address</Label>

          <InputGroup className={inputGroupClass}>
            <InputGroup.Prefix>
              <Envelope className="size-4 text-primary" />
            </InputGroup.Prefix>

            <InputGroup.Input
              name="email"
              placeholder="you@example.com"
              className={"pl-3"}
            />
          </InputGroup>

          <FieldError />
        </TextField>

        {/* image_url */}
        <TextField isRequired type="url">
          <Label className="text-white">Image URL</Label>

          <InputGroup className={inputGroupClass}>
            <InputGroup.Prefix>
              <IoIosLink className="size-4 text-primary" />
            </InputGroup.Prefix>

            <InputGroup.Input
              name="image"
              placeholder="Photo url"
              className={"pl-3"}
            />
          </InputGroup>

          <FieldError />
        </TextField>

        {/* password */}
        <TextField
          isRequired
          minLength={8}
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[a-z]/.test(value)) {
              return "Password must contain at least one lowercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label className="text-white">Password</Label>

          <InputGroup className={inputGroupClass}>
            <InputGroup.Prefix>
              <Lock className="size-4 text-primary" />
            </InputGroup.Prefix>

            <InputGroup.Input
              name="password"
              type={isVisible ? "text" : "password"}
              placeholder="Create a password"
              className={"pl-3"}
            />

            <InputGroup.Suffix className="pr-0">
              <Button
                isIconOnly
                aria-label={isVisible ? "Hide password" : "Show password"}
                size="sm"
                variant="ghost"
                onPress={() => setIsVisible(!isVisible)}
              >
                {isVisible ? (
                  <Eye className="size-4" />
                ) : (
                  <EyeSlash className="size-4" />
                )}
              </Button>
            </InputGroup.Suffix>
          </InputGroup>

          <Description className="text-white opacity-70">
            Must be at least 8 characters
          </Description>

          <FieldError />
        </TextField>

        <Button
          isDisabled={loading}
          type="submit"
          className={
            "w-full bg-[#5C53FE] hover:bg-[#5C53FE]/80 active:bg-[#5C53FE]/90 rounded-md"
          }
        >
          {loading ? "Creating..." : "Create Account"}
        </Button>
      </Form>

      <div className="my-6 flex items-center">
        <div className="grow border-t border-white opacity-70"></div>

        <span className="mx-2 text-white opacity-70 text-sm uppercase">
          or Continue with
        </span>

        <div className="grow border-t border-white opacity-70"></div>
      </div>

      {/* <GoogleLoginBtn /> */}

      <p className="my-6 flex gap-1 flex-wrap justify-center text-xs text-center text-white">
        <span>By creating an account, you agree to our</span>
        <Link href={"/"} className="text-[#5C53FE] hover:text-[#5C53FE]/80">
          Terms of Service
        </Link>
        and
        <Link href={"/"} className="text-[#5C53FE] hover:text-[#5C53FE]/80">
          Privacy Policy
        </Link>
      </p>

      <p className="text-center text-sm text-white">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-[#5C53FE] hover:text-[#5C53FE]/80"
        >
          Log in
        </Link>
      </p>
    </div>
  );
};

export default SignUpForm;
