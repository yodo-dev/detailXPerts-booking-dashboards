import React from "react";
import CommonInput from "./Components/CommonInput";
import { PrimaryButton } from "@components/Buttons/CommonButtons";
import { Link } from "react-router-dom";
// import Slider from "./Components/Slider"
const Login: React.FC = () => {
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

          <div className="w-full mb-[35px]">
            <label className="text-[16px] mb-2 font-normal " htmlFor="">
              Email
            </label>
            <div className="">
              <CommonInput
                placeholder="Enter Email"
                inputClass=" p-10 bg-red-400 !w-full "
              />
            </div>
          </div>

          <div className="w-full mb-[41px]">
            <label className="text-[16px] mb-2 font-normal" htmlFor="">
              Password
            </label>
            <CommonInput placeholder="Enter Password" inputClass="w-full" />
          </div>

          <div className=" w-full">
            <PrimaryButton
              btnText="Sign In"
              btnClass="bg-[#003CA6] text-white pt-[16px] pb-[16px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
