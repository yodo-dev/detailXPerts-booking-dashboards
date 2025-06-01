import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ReactSVG } from "react-svg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { PrimaryButton } from "@components/Buttons/CommonButtons";
import uploadServer from "../../../../../assets/svgs/uploadServer.svg";
import userIcon from "../../../../../assets/svgs/userIcon.svg";
import CommonInput from "../../../../Login/Components/CommonInput";
import { apiPost } from "../../../../../Auth/Auth";
import toast from "react-hot-toast";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";

const AddDetailerFranchise = ({ setShowModal, title, getFranchise }) => {
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState(1);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const token = localStorage.getItem("token");

  const createFranchise = async (data) => {
    console.log("Data", data);
    setLoading(true);
    try {
      const url = `${import.meta.env.VITE_APP_API_URL}v1/franchise`;

      const params = {
        region: data.city, // Assuming city is the region
        owner: {
          first_name: data.admin_f_name, // Taking first word as first name
          last_name: data.admin_l_name, // Taking second word as last name
          email: data.admin_email,
          phone: data.admin_phone,
        },
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        city: data.city,
        state: data.state,
      };

      const response = await apiPost(url, params, token);
      if (response.success) {
        toast.success("Franchise Created Successfully! 😊");

        setLoading(false);
        getFranchise();
        // getUsers();
        setShowModal(false);
        // toast.success("User Create Successfully!");
      }
    } catch (error) {
      toast.error("Something went wrong!!");
      setLoading(false);
    }
  };

  useEffect(() => {
    // createFranchise()
  }, []);

  return (
    <div className="fixed  inset-0 bg-[#363636CC] flex items-center justify-center z-50">
      <div className="bg-white overflow-y-scroll rounded-xl w-[500px] h-[95vh] p-6 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="!text-[18px] !font-bold ">Add Detailer</h2>
          <button
            //   onClick={() => setIsModalOpen(false)}
            className="text-gray-500 hover:text-black text-4xl cursor-pointer"
            onClick={() => setShowModal(false)}
          >
            &times;
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(createFranchise)}>
          {/* <div className="space-y-4">
            <div className="flex justify-between">
              <ReactSVG src={userIcon} />
              <div className="flex flex-col items-center border border-gray-300 rounded-2xl p-6 text-center mb-6 w-[80%]">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-2">
                  <span className="text-2xl text-gray-500">
                    <ReactSVG src={uploadServer} />
                  </span>
                </div>
                <p className="text-sm text-[#5B5B5B]">
                  <strong className="text-black">Click to upload</strong> or
                  drag and drop
                </p>
                <p className="text-[12px] text-[#5B5B5B] mt-1">
                  SVG, PNG, JPG or GIF (max. 800x400px)
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
              <div className="col-span-1">
                <label className="text-[14px] font-medium text-[#5B5B5B]">
                  First Name <span className="text-red-500">*</span>
                </label>
                <CommonInput
                  inputClass="custom-input"
                  placeholder="Name"
                  register={register}
                  registerName="name"
                  validation={{ required: "Name is required" }}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              <div className="col-span-1">
                <label className="text-[14px] font-medium text-[#5B5B5B]">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <CommonInput
                  inputClass="custom-input"
                  placeholder="Name"
                  register={register}
                  registerName="name"
                  validation={{ required: "Name is required" }}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
            </div>

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
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
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
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>

            <div className="flex justify-end gap-2">
              <PrimaryButton
                btnText="Cancel"
                btnClass="cursor-pointer px-4 py-2 mt-[16px] rounded-md !font-medium !w-[97px] border border-gray-300 text-[#5B5B5B] hover:bg-gray-100"
              />
              <PrimaryButton
                btnText="Next"
                btnClass="cursor-pointer !px-4 !text-[16px] mt-[16px] !font-medium !py-2 bg-[#003CA6] !w-[77px] text-white rounded-md hover:bg-blue-700"
              />
            </div>
          </div> */}
          {tab == 1 ? (
            <Step1
              setShowModal={setShowModal}
              register={register}
              errors={errors}
            />
          ) : tab == 2 ? (
            <Step2 />
          ) : (
            <Step3 />
          )}

          {/* Buttons */}
          <div className="flex justify-end gap-2">
            <PrimaryButton
              onClick={() => {
                setShowModal(false);
              }}
              btnText="Cancel"
              btnClass="cursor-pointer px-4 py-2 mt-[16px] rounded-md !font-medium !w-[97px] border border-gray-300 text-[#5B5B5B] hover:bg-gray-100"
            />
            <PrimaryButton
              btnText="Next"
              btnClass="cursor-pointer !px-4 !text-[16px] mt-[16px] !font-medium !py-2 bg-[#003CA6] !w-fit text-white rounded-md hover:bg-blue-700"
              onClick={() => setTab(tab + 1)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDetailerFranchise;
