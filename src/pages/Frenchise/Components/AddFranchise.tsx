import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ReactSVG } from "react-svg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { PrimaryButton } from "@components/Buttons/CommonButtons";
import uploadServer from "../../../assets/svgs/uploadServer.svg";
import userIcon from "../../../assets/svgs/userIcon.svg";
import CommonInput from "../../Login/Components/CommonInput";
import { apiPost } from "../../../Auth/Auth";
import toast from "react-hot-toast";
import FileUploadBox from "@components/FileUploadBox";
import FileUploaderSingle from "@components/FileUploaderSingle";

const AddFranchise = ({ setShowModal, title, getFranchise }) => {
  const [loading, setLoading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState();

  // console.log("uploaddd", uploadedFiles);

  // const handleFileChange = (index: number, file: File | null) => {
  //   const newFiles = [...uploadedFiles];
  //   newFiles[index] = file;
  //   setUploadedFiles(newFiles);
  // };

  const handleFileChange = (file) => {
    setUploadedFiles(file);
  };

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const token = localStorage.getItem("token");

  const createFranchise = async (data) => {
    setLoading(true);
    try {
      const url = `${import.meta.env.VITE_APP_API_URL}v1/franchise`;

      const formData = new FormData();
      formData.append("region", data.city);

      formData.append("owner[first_name]", data.admin_f_name);
      formData.append("owner[last_name]", data.admin_l_name);
      formData.append("owner[email]", data.admin_email);
      formData.append("owner[phone]", data.admin_phone);

      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("address", data.address);
      formData.append("city", data.city);
      formData.append("state", data.state);
      formData.append("logo", uploadedFiles);

      const response = await apiPost(url, formData, token);
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



  return (
    <div className="fixed inset-0 bg-[#363636CC] flex items-center justify-center z-50">
      <div className="bg-[#f8f9fa] overflow-y-scroll rounded-xl w-[800px] h-[95vh] p-6 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="!text-[18px] !font-bold ">Add Franchise</h2>
          <button
            //   onClick={() => setIsModalOpen(false)}
            className="text-gray-500 hover:text-black text-4xl cursor-pointer"
            onClick={() => setShowModal(false)}
          >
            &times;
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(createFranchise)}
          className="space-y-4 bg-white p-4 rounded-[8px]"
        >
          <div className="grid md:grid-cols-3 gap-4 grid-cols-1">
            <div className="col-span-3">
              <FileUploaderSingle
                // key={index}
                // label={""}
                file={uploadedFiles}
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 grid-cols-1 ">
            {/* First Name */}
            <div className="col-span-1">
              <label className="text-[14px] font-medium text-[#5B5B5B]">
                Franchise Name <span className="text-red-500">*</span>
              </label>
              <CommonInput
                inputClass="custom-input"
                placeholder="Enter Franchise Name"
                register={register}
                registerName="name"
                validation={{ required: "Name is required" }}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>
            {/* Email */}
            <div className="col-span-1">
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
          </div>

          <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
            <div className="col-span-1">
              <label className="text-[14px] font-medium text-[#5B5B5B]">
                Phone <span className="text-red-500">*</span>
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

            <div className="col-span-1">
              <label className="text-[14px] font-medium text-[#5B5B5B]">
                Address <span className="text-red-500">*</span>
              </label>
              <CommonInput
                inputClass="custom-input w-full"
                placeholder="Enter Your Address"
                register={register}
                registerName="address"
                validation={{ required: "Address is required" }}
              />
              {errors.address && (
                <p className="text-red-500 text-sm">{errors.address.message}</p>
              )}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
            <div className="col-span-1">
              <label className="text-[14px] font-medium text-[#5B5B5B]">
                City <span className="text-red-500">*</span>
              </label>
              <CommonInput
                inputClass="custom-input w-full"
                placeholder="Enter Your Address"
                register={register}
                registerName="city"
                validation={{ required: "City is required" }}
              />
              {errors.city && (
                <p className="text-red-500 text-sm">{errors.city.message}</p>
              )}
            </div>

            <div className="col-span-1">
              <label className="text-[14px] font-medium text-[#5B5B5B]">
                State <span className="text-red-500">*</span>
              </label>
              <CommonInput
                inputClass="custom-input w-full"
                placeholder="Enter Your State"
                register={register}
                registerName="state"
                validation={{ required: "State is required" }}
              />
              {errors.state && (
                <p className="text-red-500 text-sm">{errors.state.message}</p>
              )}
            </div>
          </div>

          {/* Business Fields - only required if role_id === 3 */}
          <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
            <div className="col-span-1">
              <label className="text-[14px] font-medium text-[#5B5B5B]">
                Owner First Name{" "}
                {/* {role_id === 3 && <span className="text-red-500">*</span>} */}
              </label>
              <CommonInput
                inputClass="custom-input"
                placeholder="Enter Owner Name"
                registerName="admin_f_name"
                register={register}
                validation={{ required: "Admin First Name is required" }}
              />
            </div>

            <div className="col-span-1">
              <label className="text-[14px] font-medium text-[#5B5B5B]">
                Owner Last Name{" "}
                {/* {role_id === 3 && <span className="text-red-500">*</span>} */}
              </label>
              <CommonInput
                inputClass="custom-input"
                placeholder="Enter Owner Name"
                registerName="admin_l_name"
                register={register}
                validation={{ required: "Admin First Name is required" }}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
            <div className="col-span-1">
              <label className="text-[14px] font-medium text-[#5B5B5B]">
                Owner Email{" "}
                {/* {role_id === 3 && <span className="text-red-500">*</span>} */}
              </label>
              <CommonInput
                inputClass="custom-input"
                placeholder="Enter Owner Email"
                registerName="admin_email"
                register={register}
                validation={{ required: "Admin Email is required" }}
              />
            </div>

            <div className="col-span-1">
              <label className="text-[14px] font-medium text-[#5B5B5B]">
                Owner Phone{" "}
                {/* {role_id === 3 && <span className="text-red-500">*</span>} */}
              </label>
              <CommonInput
                inputClass="custom-input"
                placeholder="Enter Owner Number"
                registerName="admin_phone"
                register={register}
                validation={{ required: "Admin Number is required" }}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-2 border-[#88888850] border-t">
            <PrimaryButton
              btnText="Cancel"
              btnClass="cursor-pointer px-4 py-2 mt-[16px] rounded-md !font-medium !w-[97px] border border-gray-300 text-[#5B5B5B] hover:bg-gray-100"
            />
            <PrimaryButton
              btnText="Add"
              btnClass="cursor-pointer !px-4 !text-[16px] mt-[16px] !font-medium !py-2 bg-[#003CA6] !w-[77px] text-white rounded-md hover:bg-blue-700"
              isLoading={loading}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFranchise;
