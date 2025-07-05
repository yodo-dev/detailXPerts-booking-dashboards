import React, { useState } from "react";
import CommonInput from "../Login/Components/CommonInput";
import { PrimaryButton } from "@components/Buttons/CommonButtons";
import { Link, useNavigate } from "react-router-dom";
import { apiPost } from "../../../Auth/Auth";
// import Slider from "./Components/Slider"
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ForgotPassword: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const onForgot = async (data) => {
    try {
      setIsLoading(true);
      const url = `${import.meta.env.VITE_APP_API_URL}v1/auth/forgot`;

      const data1 = { email: data.email, password: data.password };
      const response = await apiPost(url, data1);
      if (response.success) {
        setIsLoading(false);
        toast.success("Check Your Email for OTP");
        localStorage.setItem("OtpId", response?.payload?.id);
        navigate("/otp-verify");
      }
    } catch (error) {
      toast.error("Login Failed");

      setIsLoading(false);
    } finally {
      // setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-10 min-h-screen">
      <div className="col-span-12 bg-white flex items-center justify-center">
        <div className="flex justify-center w-[520px] flex-col items-center">
          <h2 className="text-[32px] text-center font-extrabold mb-[14px]">
            Reset Your Password
          </h2>

          <form className="w-full mt-10" onSubmit={handleSubmit(onForgot)}>
            <div className="w-full mb-[35px]">
              <label className="text-[16px] mb-2 font-normal " htmlFor="">
                Email
              </label>
              <div className="">
                <CommonInput
                  placeholder="Enter Email"
                  inputClass=" p-10 bg-red-400 !w-full "
                  register={register}
                  registerName={"email"}
                  validation={{ required: "Email is required" }}
                  type="email"
                />
              </div>
            </div>

            <div className=" w-full">
              <PrimaryButton
                btnText={isLoading ? "Loading..." : "Forgot"}
                btnClass="bg-[#003CA6] text-white pt-[14px] pb-[14px] mb-3"
                type="submit"
              />
              <span className="text-[14px] ">
                Already have an account?
                <Link to={"/login"} className="text-[#003CA6] underline ms-3">
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

export default ForgotPassword;
