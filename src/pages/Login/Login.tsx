import React from "react";
import CommonInput from "./Components/CommonInput";
import { PrimaryButton } from "@components/Buttons/CommonButtons";
import { Link, useNavigate } from "react-router-dom";
import { apiPost } from "../../Auth/Auth";
// import Slider from "./Components/Slider"
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useUserInfoStore from "../../Store/Store";

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { setUserInfo } = useUserInfoStore();

  // console.log("rooooppppee",userRole)

  const onLogin = async (data) => {
    try {
      // setIsLoading(true);
      const url = `${import.meta.env.VITE_APP_API_URL}v1/auth/login`;

      const data1 = { email: data.email, password: data.password };
      const response = await apiPost(url, data1);
      console.log("rrr", response);
      if (response.success) {
        // console.log("kiiiit",response.payload.user.role_id)
        setUserInfo(response?.payload?.user);
        toast.success("Login Successfully!");

        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);

        localStorage.setItem("token", response.payload.accessToken);
        localStorage.setItem("userInfo", JSON.stringify(response.payload));
      }
    } catch (error) {
      toast.error("Login Failed");

      // setIsLoading(false);
    } finally {
      // setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-10 min-h-screen">
      <div className="col-span-4 bg-[#003CA6] p-[35px]">
        <h3 className="!text-black text-[21px] font-extrabold mb-[80px] bg-white pt-[15px] pb-[15px] ps-[30px] pe-[30px] rounded-full w-fit">
          DetailXperts
        </h3>

        <h1 className="mb-[24px]">
          Manage operations, teams & compliance all in one place.
        </h1>
        <p className="leading-[1.7] text-[#FFFFFFBF] font-normal text-[14px]">
          Gain full visibility into franchises, bookings, users, documents, and
          compliance tools from your central admin dashboard.
        </p>

        {/* <Slider/> */}
      </div>

      <div className="col-span-6 bg-white flex items-center justify-center">
        <div className="flex justify-center w-[520px] flex-col items-center">
          <h2 className="text-[32px] text-center font-extrabold mb-[14px]">
            Sign In
          </h2>
          <p className="text-[#414143] text-center font-normal text-[16px] mb-[50px]">
            Log in to your franchise control panel
          </p>
          <form className="w-full" onSubmit={handleSubmit(onLogin)}>
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
                />
              </div>
            </div>

            <div className="w-full mb-[41px]">
              <label className="text-[16px] mb-2 font-normal" htmlFor="">
                Password
              </label>
              <CommonInput
                placeholder="Enter Password"
                inputClass="w-full"
                register={register}
                registerName={"password"}
              />
              <div className="flex justify-between">
                <p></p>
                <Link to={"/forgot-password"}>
                  <p className="font-normal cursor-pointer text-[14px]">
                    Forget Password
                  </p>
                </Link>
              </div>
            </div>

            <div className=" w-full">
              <PrimaryButton
                btnText="Sign In"
                btnClass="bg-[#003CA6] text-white pt-[16px] pb-[16px] mb-3"
                type="submit"
              />
              <span className="text-[14px] ">
                Don't have an account?{" "}
                <Link to={"/register"} className="text-[#003CA6] underline">
                  Sign Up
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
