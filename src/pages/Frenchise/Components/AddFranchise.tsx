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

const AddFranchise = ({ setShowModal, title, getFranchise }) => {
  const [loading, setLoading] = useState(true);

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
        <form onSubmit={handleSubmit(createFranchise)} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
            {/* First Name */}
            <div className="col-span-2">
              <label className="text-[14px] font-medium text-[#5B5B5B]">
                Name <span className="text-red-500">*</span>
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

          <div>
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

          <div>
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

          <div>
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

          {/* Business Fields - only required if role_id === 3 */}
          <div>
            <label className="text-[14px] font-medium text-[#5B5B5B]">
              Admin First Name{" "}
              {/* {role_id === 3 && <span className="text-red-500">*</span>} */}
            </label>
            <CommonInput
              inputClass="custom-input"
              placeholder="Enter Admin Name"
              registerName="admin_f_name"
              register={register}
              validation={{ required: "Admin First Name is required" }}
            />
          </div>

          <div>
            <label className="text-[14px] font-medium text-[#5B5B5B]">
              Admin Last Name{" "}
              {/* {role_id === 3 && <span className="text-red-500">*</span>} */}
            </label>
            <CommonInput
              inputClass="custom-input"
              placeholder="Enter Admin Name"
              registerName="admin_l_name"
              register={register}
              validation={{ required: "Admin Last Name is required" }}
            />
          </div>

          <div>
            <label className="text-[14px] font-medium text-[#5B5B5B]">
              Admin Email{" "}
              {/* {role_id === 3 && <span className="text-red-500">*</span>} */}
            </label>
            <CommonInput
              inputClass="custom-input"
              placeholder="Enter Admin Email"
              registerName="admin_email"
              register={register}
              validation={{ required: "Admin Email is required" }}
            />
          </div>

          <div>
            <label className="text-[14px] font-medium text-[#5B5B5B]">
              Admin Phone{" "}
              {/* {role_id === 3 && <span className="text-red-500">*</span>} */}
            </label>
            <CommonInput
              inputClass="custom-input"
              placeholder="Enter Admin Number"
              registerName="admin_phone"
              register={register}
              validation={{ required: "Admin Number is required" }}
            />
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
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFranchise;
