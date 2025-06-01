import React from "react";
import uploadServer from "../../../../../../assets/svgs/uploadServer.svg";
import userIcon from "../../../../../../assets/svgs/userIcon.svg";
import { ReactSVG } from "react-svg";
import CommonInput from "@pages/Login/Components/CommonInput";
import { PrimaryButton } from "@components/Buttons/CommonButtons";
const Step1: React.FC = ({ register, errors, setShowModal }) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <ReactSVG src={userIcon} />
        <div className="flex flex-col items-center border border-gray-300 rounded-2xl p-6 text-center mb-6 w-[80%]">
          <div className="w-14 h-14 rounded-full flex items-center justify-center mb-2">
            <span className="text-2xl text-gray-500">
              <ReactSVG src={uploadServer} />
            </span>
          </div>
          <p className="text-sm text-[#5B5B5B]">
            <strong className="text-black">Click to upload</strong> or drag and
            drop
          </p>
          <p className="text-[12px] text-[#5B5B5B] mt-1">
            SVG, PNG, JPG or GIF (max. 800x400px)
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
        {/* First Name */}
        <div className="col-span-1">
          <label className="text-[14px] font-medium text-[#5B5B5B]">
            First Name <span className="text-red-500">*</span>
          </label>
          <CommonInput
            inputClass="custom-input"
            placeholder="Enter First Name"
            register={register}
            registerName="name"
            validation={{ required: "Name is required" }}
          />
          {/* {errors?.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )} */}
        </div>

        <div className="col-span-1">
          <label className="text-[14px] font-medium text-[#5B5B5B]">
            Last Name <span className="text-red-500">*</span>
          </label>
          <CommonInput
            inputClass="custom-input"
            placeholder="Enter Last Name"
            register={register}
            registerName="name"
            validation={{ required: "Name is required" }}
          />
          {/* {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )} */}
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="text-[14px] font-medium text-[#5B5B5B]">
          Email address <span className="text-red-500">*</span>
        </label>
        <CommonInput
          inputClass="custom-input w-full"
          placeholder="Enter Your Email"
          register={register}
          registerName="email"
          validation={{ required: "Email is required" }}
        />
        {/* {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )} */}
      </div>

      <div>
        <label className="text-[14px] font-medium text-[#5B5B5B]">
          Contact Number <span className="text-red-500">*</span>
        </label>
        <CommonInput
          inputClass="custom-input w-full"
          placeholder="Enter Your Number"
          register={register}
          registerName="phone"
          validation={{ required: "Password is required" }}
        />
        {/* {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
        )} */}
      </div>

    
    </div>
  );
};

export default Step1;
