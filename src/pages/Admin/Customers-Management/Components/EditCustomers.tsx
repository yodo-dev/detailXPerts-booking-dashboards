import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ReactSVG } from "react-svg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { PrimaryButton } from "@components/Buttons/CommonButtons";
import uploadServer from "../../../assets/svgs/uploadServer.svg";
import userIcon from "../../../assets/svgs/userIcon.svg";
import CommonInput from "../../../Admin/Login/Components/CommonInput";
import { apiGet, apiPost, apiPut } from "../../../../Auth/Auth";
import toast from "react-hot-toast";

const EditCustomers = ({
  setShowModal,
  title,
  getCustomers,
  setShowEditModal,
  showEditId,
}) => {
  const [loading, setLoading] = useState(true);
  const [singleDetailer, setSingleDetailer] = useState({});

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const token = localStorage.getItem("token");

  const EditCustomer = async (data) => {
    setLoading(true);
    try {
      const url = `${import.meta.env.VITE_APP_API_URL}v1/user/${showEditId}`;

      // const formData = new FormData();

      const params = {
        role_id: 5,
        name: data.name,
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password,
        business_name: data.business_name,
        business_address: data.business_address,
        business_phone: data.business_phone,
        business_website: data.business_website,
      };

      const response = await apiPut(url, params, token);
      if (response.success) {
        toast.success("Customer Updated Successfully! 😊");

        setLoading(false);
        // getUsers();
        setShowEditModal(false);
        // toast.success("User Create Successfully!");
      }
    } catch (error) {
      setLoading(false);
    }
  };

  const getSingleCustomer = async () => {
    setLoading(true);
    try {
      const url = `${import.meta.env.VITE_APP_API_URL}v1/user/${showEditId}`;

      const params = {};
      const response = await apiGet(url, params, token);
      if (response.success) {
        setLoading(false);
        setSingleDetailer(response.payload);
        setValue("first_name", response.payload.first_name);
        setValue("last_name", response.payload.last_name);
        setValue("email", response.payload.email);
        setValue("business_name", response.payload.first_name);
        setValue("business_address", response.payload.country);
        setValue("business_phone", response.payload.number);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    // createFranchise()
    getSingleCustomer();
  }, [showEditId]);

  return (
    <div className="fixed  inset-0 bg-[#363636CC] flex items-center justify-center z-50">
      <div className="bg-white overflow-y-scroll rounded-xl w-[500px] h-[95vh] p-6 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="!text-[18px] !font-bold ">Edit Customer</h2>
          <button
            //   onClick={() => setIsModalOpen(false)}
            className="text-gray-500 hover:text-black text-4xl cursor-pointer"
            onClick={() => setShowEditModal(false)}
          >
            &times;
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(EditCustomer)} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
            {/* First Name */}
            <div>
              <label className="text-[14px] font-medium text-[#5B5B5B]">
                First name <span className="text-red-500">*</span>
              </label>
              <CommonInput
                inputClass="custom-input"
                placeholder="First Name"
                register={register}
                registerName="first_name"
                validation={{ required: "First name is required" }}
              />
              {errors.first_name && (
                <p className="text-red-500 text-sm">
                  {errors.first_name.message}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label className="text-[14px] font-medium text-[#5B5B5B]">
                Last name <span className="text-red-500">*</span>
              </label>
              <CommonInput
                inputClass="custom-input"
                placeholder="Last Name"
                register={register}
                registerName="last_name"
                validation={{ required: "Last name is required" }}
              />
              {errors.last_name && (
                <p className="text-red-500 text-sm">
                  {errors.last_name.message}
                </p>
              )}
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
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="text-[14px] font-medium text-[#5B5B5B]">
              Password <span className="text-red-500">*</span>
            </label>
            <CommonInput
              inputClass="custom-input w-full"
              placeholder="Enter Your Password"
              register={register}
              registerName="password"
              validation={{ required: "Password is required" }}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Business Fields - only required if role_id === 3 */}
          <div>
            <label className="text-[14px] font-medium text-[#5B5B5B]">
              Business Name{" "}
              {/* {role_id === 3 && <span className="text-red-500">*</span>} */}
            </label>
            <CommonInput
              inputClass="custom-input"
              placeholder="Business Name"
              registerName="business_name"
              register={register}
              validation={{ required: "Bussiness Name is required" }}
            />
          </div>

          <div>
            <label className="text-[14px] font-medium text-[#5B5B5B]">
              Business Address{" "}
              {/* {role_id === 3 && <span className="text-red-500">*</span>} */}
            </label>
            <CommonInput
              inputClass="custom-input"
              placeholder="Business Address"
              registerName="business_address"
              register={register}
              validation={{ required: "Address is required" }}
            />
          </div>

          <div>
            <label className="text-[14px] font-medium text-[#5B5B5B]">
              Business Phone{" "}
              {/* {role_id === 3 && <span className="text-red-500">*</span>} */}
            </label>
            <CommonInput
              inputClass="custom-input"
              placeholder="Business Phone"
              registerName="business_phone"
              register={register}
              validation={{ required: "Phone is required" }}
            />
          </div>

          <div>
            <label className="text-[14px] font-medium text-[#5B5B5B]">
              Business Website{" "}
              {/* {role_id === 3 && <span className="text-red-500">*</span>} */}
            </label>
            <CommonInput
              inputClass="custom-input"
              registerName="business_website"
              register={register}
              validation={{ required: "Website is required" }}
              placeholder="Business Website"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-2 border-[#88888850] border-t">
            <PrimaryButton
              btnText="Cancel"
              btnClass="cursor-pointer px-4 py-2 mt-[16px] rounded-md !font-medium !w-[97px] border border-gray-300 text-[#5B5B5B] hover:bg-gray-100"
            />
            <PrimaryButton
              btnText="Update"
              btnClass="cursor-pointer !px-4 !text-[16px] mt-[16px] !font-medium !py-2 bg-[#003CA6] !w-fit text-white rounded-md hover:bg-blue-700"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCustomers;
