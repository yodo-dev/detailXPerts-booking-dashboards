import React from "react";
import { Controller, useForm } from "react-hook-form";
import { ReactSVG } from "react-svg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { PrimaryButton } from "@components/Buttons/CommonButtons";
import uploadServer from "../../../assets/svgs/uploadServer.svg"
import userIcon from "../../../assets/svgs/userIcon.svg"
import CommonInput from "@components/inputs/CommonInput";

const  AddFranchise=({setShowModal}) =>{
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="fixed  inset-0 bg-[#363636CC] flex items-center justify-center z-50">
      <div className="bg-white overflow-y-scroll rounded-xl w-[500px] h-[95vh] p-6 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="!text-[18px] !font-bold ">Add Detailer</h2>
          <button
            //   onClick={() => setIsModalOpen(false)}
            className="text-gray-500 hover:text-black text-4xl cursor-pointer"
            onClick={()=>(setShowModal(false))}
          >
            &times;
          </button>
        </div>

        <div className="flex justify-between">
          {/* {image ? (
          <div className="me-5 relative">
            <img
              className="w-[90px] h-[80px] rounded-full object-cover"
              src={image}
              alt=""
            />
            <X
              onClick={() => {
                setImage("");
                setFile("");
              }}
              size={20}
              className="absolute top-0 right-0 bg-red-400 text-white cursor-pointer rounded-full p-1"
            />
          </div>
        ) : ( */}
           <ReactSVG src={userIcon} />
          {/* // )} */}

          {/* Image Upload */}
          <div
            //   onClick={handleDivClick}
            className="flex flex-col items-center border border-gray-300 rounded-2xl p-6 text-center mb-6 w-[80%]"
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-2">
              <span className="text-2xl text-gray-500">
                <ReactSVG src={uploadServer} />
              </span>
            </div>
            <p className="text-sm text-[#5B5B5B]">
              <strong className="text-black">Click to upload</strong> or drag
              and drop
            </p>
            <p className="text-[12px] text-[#5B5B5B] mt-1">
              SVG, PNG, JPG or GIF (max. 800x400px)
            </p>
          </div>
        </div>
        <input
          id="img"
          // ref={userIcon}
          // onChange={handleFileChange}
          type="file"
          hidden
        />

        {/* Form */}
        <form className="space-y-4">
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="text-[14px] font-medium text-[#5B5B5B]">
                First name <span className="text-red-500">*</span>
              </label>
              <CommonInput 
              inputClass="custom-input"
              placeholder="First Name"
              />
            </div>
            <div className="w-1/2">
              <label className="text-[14px] font-medium text-[#5B5B5B]">
                Last name <span className="text-red-500">*</span>
              </label>
              <CommonInput 
              inputClass="custom-input"
              placeholder="Last Name"
              />
            </div>
          </div>

          <div>
            <label className="text-[14px] font-medium text-[#5B5B5B]">
              Email address <span className="text-red-500">*</span>
            </label>
            <CommonInput 
              inputClass="custom-input !w-[118.5%]" 
              placeholder="Enter Your Email"
              />
          </div>

          <div className="mb-4 ">
            <label className="block mb-3 text-[14px] font-medium text-[#5B5B5B]">
              Contact Number <span className="text-red-500">*</span>
            </label>
            <Controller
              control={control}
              rules={{ required: "Phone number must be required" }}
              className="w-full bg-transparent placeholder:text-slate-400 bg-red-300 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow "
              name="phone"
              render={({ field }) => (
                <PhoneInput
                  className="phone-input" // Optional custom wrapper class
                  country={"us"}
                  value={field.value} // Bind the phone input value to React Hook Form
                  onChange={(value) => field.onChange(value)} // Handle phone input change
                  inputClass="!w-[100%] bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow w-full" // Custom classes for the input field
                  containerClass="w-full" // Optional container class
                  inputProps={{
                    required: true,
                    placeholder: "Enter your phone number",
                  }}
                />
              )}
            />

            {/* {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )} */}
          </div>

          <div className="mb-[40px]">
            <div className="">
              <label className="text-[14px] font-medium text-[#5B5B5B]">
                About <span className="text-red-500">*</span>
              </label>
              <textarea
                className="custom-input"
                placeholder="About..."
                rows={4}

                //   {...register("last_name", {
                //     required: "Last name must required",
                //   })}
              ></textarea>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-2 border-[#88888850] border-t">
            <PrimaryButton
            btnText="Cancel"
            btnClass="cursor-pointer px-4 py-2 mt-[16px] rounded-md !font-medium !w-[97px] border border-gray-300 text-[#5B5B5B] hover:bg-gray-100"/>
            <PrimaryButton 
            btnText="Add"
            btnClass="cursor-pointer !px-4 !text-[16px] mt-[16px] !font-medium !py-2 bg-[#003CA6] !w-[77px] text-white rounded-md hover:bg-blue-700"/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddFranchise;
