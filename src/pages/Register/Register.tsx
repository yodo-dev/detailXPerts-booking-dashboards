import React from "react";
// import CommonInput from "../../Components/inputs/CommonInput";
import CommonInput from "../Login/Components/CommonInput";

import { PrimaryButton } from "@components/Buttons/CommonButtons";
import { Link, useNavigate } from "react-router-dom";
import { apiPost } from "../../Auth/Auth";
// import Slider from "./Components/Slider"
import { useForm } from "react-hook-form";

const Register: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onRegister = async (data) => {
    console.log("RRRRR", data);
    try {
      // setIsLoading(true);
      const url = `${import.meta.env.VITE_APP_API_URL}v1/auth/register`;

      //   const data1 = { email: data.email, password: data.password };
      const data1 = {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password,
        number: data.number,
        role_id: 2,
      };

      const response = await apiPost(url, data1);
      console.log("rrr", response);
      if (response.success) {
        // toast.success("Login Success!");
        setTimeout(() => {
          navigate("/login");
        }, 1000);

      }
    } catch (error) {
      // setIsLoading(false);
      // toast.error("Login Failed");
    } finally {
      // setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-10 min-h-screen">
      <div className="col-span-12 bg-white flex items-center justify-center">
        <div className="flex justify-center w-[520px] flex-col items-center">
          <h2 className="text-[32px] text-center font-extrabold mb-[14px]">
            Register
          </h2>
          <p className="text-[#414143] text-center font-normal text-[16px] mb-[50px]">
            {/* Log in to your franchise control panel */}
          </p>
          <form className="w-full" onSubmit={handleSubmit(onRegister)}>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-3">
              <div className="mb-3">
                <label className="text-[14px] font-medium text-[#5B5B5B]">
                  First Name <span className="text-red-500">*</span>
                </label>
                <CommonInput
                  register={register}
                  registerName="first_name"
                  inputClass="custom-input"
                  placeholder="First Name"
                  validation={{ required: "First name is required" }}
                />
              </div>

              {/* Last Name */}
              <div className="mb-3">
                <label className="text-[14px] font-medium text-[#5B5B5B]">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <CommonInput
                  register={register}
                  registerName="last_name"
                  inputClass="custom-input"
                  placeholder="Last Name"
                  validation={{ required: "Last name is required" }}
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="text-[14px] font-medium text-[#5B5B5B]">
                Email <span className="text-red-500">*</span>
              </label>
              <CommonInput
                register={register}
                registerName="email"
                inputClass="custom-input"
                placeholder="Enter Your Email"
                validation={{ required: "Email is required" }}
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label className="text-[14px] font-medium text-[#5B5B5B]">
                Password <span className="text-red-500">*</span>
              </label>
              <CommonInput
                register={register}
                registerName="password"
                inputClass="custom-input"
                placeholder="Enter Password"
                validation={{ required: "Password is required" }}
              />
            </div>

            {/* Contact Number */}
            <div className="mb-3">
              <label className="text-[14px] font-medium text-[#5B5B5B]">
                Contact Number <span className="text-red-500">*</span>
              </label>
              <CommonInput
                register={register}
                registerName="number"
                inputClass="custom-input"
                placeholder="Enter Contact Number"
                validation={{ required: "Contact number is required" }}
              />
            </div>

            <div className=" w-full">
              <PrimaryButton
                btnText="Sign Up"
                btnClass="bg-[#003CA6] text-white pt-[13px] pb-[13px] mb-3"
                type="submit"
              />
              <span className="text-[14px] ">
                Already have an account?{" "}
                <Link to={"/login"} className="text-[#003CA6] underline">
                  Sign In
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
