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
import { Eye, Lock } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
// import GoogleLoginBtn from "../shared/GoogleLoginBtn";

const LogInForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());

    setLoading(true);

    const { data, error } = await authClient.signIn.email({
      email: userData.email,
      password: userData.password,
      callbackURL: "/",
    });

    setLoading(false);

    if (error) {
      toast.error(<h6 className="font-bold text-black">{error.message}</h6>);
    }

    if (data) {
      toast.success(<h6 className="font-bold text-black">Login Successful</h6>);
      router.push("/");
    }
  };

  const inputGroupClass =
    "bg-white rounded-lg overflow-hidden  focus-within:ring-2 focus-within:ring-[#5C53FE] focus-within:shadow-lg-[#5C53FE] focus-within:shadow-[0_0_15px_#5C53FE] transition-all duration-200";

  return (
    <div className="p-10 bg-linear-to-t from-[#010102] to-[#313131] rounded-3xl">
      <Form onSubmit={handleOnSubmit} className="space-y-6">
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
              <Envelope className="size-4 text-gray-600" />
            </InputGroup.Prefix>

            <InputGroup.Input
              name="email"
              placeholder="you@example.com"
              className={"pl-3 text-black"}
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
              <Lock className="size-4 text-gray-600" />
            </InputGroup.Prefix>

            <InputGroup.Input
              name="password"
              type={isVisible ? "text" : "password"}
              placeholder="Create a password"
              className={"pl-3 text-black"}
            />

            <InputGroup.Suffix className="pr-0">
              <Button
                isIconOnly
                aria-label={isVisible ? "Hide password" : "Show password"}
                size="sm"
                variant="ghost"
                onPress={() => setIsVisible(!isVisible)}
                className={"text-black hover:bg-transparent"}
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
          {loading ? "Signing in..." : "Sign In"}
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

      <p className="mt-6 text-white text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link
          href="/sign-up"
          className="font-medium text-[#5C53FE] hover:text-[#5C53FE]/80"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default LogInForm;
