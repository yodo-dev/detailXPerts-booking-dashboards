import React, { useState } from "react";
import MainLayout from "@layouts/MainLayout";
import AddCircle from "../../assets/svgs/add-circle.svg";
import CommonInput from "@components/inputs/CommonInput";

export default function AdminProfile() {
  const [selectedImage, setSelectedImage] = useState("");
  const [fieldStep, setFieldStep] = useState(0);

  const handleAddMore = () => {
    if (fieldStep < 3) {
      setFieldStep(fieldStep + 1);
    }
  };

  return (
    <MainLayout>
      <div className="default_container">
        <h2 className="text-2xl font-semibold mb-6">Admin Profile:</h2>

        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="font-medium text-lg mb-4">Personal Details</h3>

          <div className="border border-[#F2F2F2] rounded-[15px] px-3 py-3">
            <p className="!text-[12px] font-semibold mb-3">Profile Photo</p>
            <div className="flex items-center bg-[#F3F5F9] gap-4 px-3 py-3 rounded-[15px]">
              <img
                src={
                  selectedImage
                    ? URL.createObjectURL(selectedImage)
                    : "https://randomuser.me/api/portraits/men/32.jpg"
                }
                alt="Profile"
                className="w-20 h-20 rounded-[15px] object-cover"
                style={{border:"1px solid rgba(0,0,0,10%)"}}
              />
              <div className="flex-1">
                <p className="font-semibold text-[16px]">Brooklyn Simmons</p>
                <p className="text-[#252525] text-[13px] font-normal">
                  Brooklyn@email.com
                </p>
              </div>

              <div className="ml-auto">
                <input
                  type="file"
                  id="upload"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setSelectedImage(file);
                    }
                  }}
                />
                <label
                  htmlFor="upload"
                  className="border px-4 py-1 rounded text-sm text-[#1B3D96] cursor-pointer"
                >
                  Upload Photo
                </label>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 pt-4">
            <div className="flex flex-col w-full">
              <p className="text-[12px] font-semibold text-[#252525] mb-1">
                Full Name
              </p>
              <CommonInput
                placeholder="Brooklyn Simmons"
                inputClass="border border-[#EEEE] !rounded-md !px-3 !py-2"
                showEdit
              />
            </div>

            <div className="flex flex-col w-full">
              <p className="text-[12px] font-semibold text-[#252525] mb-1">
                Email
              </p>
              <CommonInput
                placeholder="Brooklyn@email.com"
                inputClass="border border-[#EEEE] !rounded-md !px-3 !py-2"
                showEdit
              />
            </div>

            <div className="flex flex-col w-full">
              <p className="text-[12px] font-semibold text-[#252525] mb-1">
                Mobile Number
              </p>
              <CommonInput
                placeholder="+1 0215 212 1235"
                inputClass="border border-[#EEEE] !rounded-md !px-3 !py-2"
                showEdit
              />
            </div>
          </div>

          <h3 className="font-medium !text-[18px] mb-2">Address Details</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="flex flex-col w-full">
              <p className="text-[12px] font-semibold text-[#252525] mb-1">
                Flat/House/building Number
              </p>
              <CommonInput
                placeholder="50B/2"
                inputClass="border border-[#EEEE] !rounded-md !px-3 !py-2"
                showEdit
              />
            </div>

            <div className="flex flex-col w-full">
              <p className="text-[12px] font-semibold text-[#252525] mb-1">
                Street/Town
              </p>
              <CommonInput
                placeholder="Hike"
                inputClass="border border-[#EEEE] !rounded-md !px-3 !py-2"
                showEdit
              />
            </div>

            <div className="flex flex-col w-full">
              <p className="text-[12px] font-semibold text-[#252525] mb-1">
                City
              </p>
              <CommonInput
                placeholder="Urban"
                inputClass="border border-[#EEEE] !rounded-md !px-3 !py-2"
                showEdit
              />
            </div>

            <div className="flex flex-col w-full">
              <p className="text-[12px] font-semibold text-[#252525] mb-1">
                Country
              </p>
              <CommonInput
                placeholder="United Kingdom"
                inputClass="border border-[#EEEE] !rounded-md !px-3 !py-2"
                showEdit
              />
            </div>
          </div>

          <div className="flex justify-end mb-4">
            <button
              className="text-[#1B3D96] flex gap-2 text-end text-sm cursor-pointer disabled:opacity-50"
              onClick={handleAddMore}
              disabled={fieldStep >= 3}
            >
              Add More Address
              <img src={AddCircle} alt="" />
            </button>
          </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
         {fieldStep >= 1 && (
            <div className="">
              <div className="flex flex-col w-full">
                <p className="text-[12px] font-semibold text-[#252525] mb-1">
                  Flat/House
                </p>
                <CommonInput
                  placeholder="Flat/House"
                  inputClass="border border-[#EEEE] !rounded-md !px-3 !py-2"
                  showEdit
                />
              </div>
            </div>
          )}
          {fieldStep >= 2 && (
            <div>
              <div className="flex flex-col w-full">
                <p className="text-[12px] font-semibold text-[#252525] mb-1">
                  Building Number
                </p>
                <CommonInput
                  placeholder="Building Number"
                  inputClass="border border-[#EEEE] !rounded-md !px-3 !py-2"
                  showEdit
                />
              </div>
            </div>
          )}
          {fieldStep >= 3 && (
            <div>
              <div className="flex flex-col w-full">
                <p className="text-[12px] font-semibold text-[#252525] mb-1">
                  Street No
                </p>
                <CommonInput
                  placeholder="Street No"
                  inputClass="border border-[#EEEE] !rounded-md !px-3 !py-2"
                  showEdit
                />
              </div>
            </div>
          )}
         </div>
          <button className="w-full bg-[#1B3D96] text-white py-2 rounded-[8px] cursor-pointer">
            Update
          </button>
        </div>
      </div>
    </MainLayout>
  );
}
