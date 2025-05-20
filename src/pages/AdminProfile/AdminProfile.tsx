import React, { useEffect, useState } from "react";
import MainLayout from "@layouts/MainLayout";
import AddCircle from "../../assets/svgs/add-circle.svg";
import CommonInput from "@pages/Login/Components/CommonInput";
import { apiGet, apiPost, apiPut } from "../../Auth/Auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function AdminProfile() {
  const [selectedImage, setSelectedImage] = useState("");
  const [fieldStep, setFieldStep] = useState(0);
  const [loading, setLoading] = useState(true);
  const [singleUser, setSingleUser] = useState();
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("userInfo")).user
  );
  const { register, setValue, handleSubmit } = useForm();

  const handleAddMore = () => {
    if (fieldStep < 3) {
      setFieldStep(fieldStep + 1);
    }
  };

  // const userInfo = JSON.parse(localStorage.getItem("userInfo")).user;
  // console.log("uuuu", userInfo);

  const token = localStorage.getItem("token");

  const getSingleUser = async (id) => {
    setLoading(true);
    try {
      const url = `${import.meta.env.VITE_APP_API_URL}v1/user/${id}`;

      const params = {};
      const response = await apiGet(url, params, token);
      if (response.success) {
        setLoading(false);
        setSingleUser(response.payload);
        setValue("first_name", response.payload.first_name);
        setValue("last_name", response.payload.last_name);
        setValue("email", response.payload.email);
        setValue("mobile", response.payload.number);
        setValue("city", response.payload.city);
        setValue("country", response.payload.country);
        setValue("street", response.payload.state);
        setValue("building_number", response.payload.first_name);
        setValue("business_address", response.payload.country);
        setValue("business_phone", response.payload.number);
      }
    } catch (error) {
      setLoading(false);
      console.log("Error :", error);
    }
  };

  const EditCustomer = async (data) => {
    console.log("Data", data);
    setLoading(true);
    try {
      const url = `${import.meta.env.VITE_APP_API_URL}v1/user/${userInfo?.id}`;

      // const formData = new FormData();

      const formData = new FormData();
      formData.append("first_name", data.first_name);
      formData.append("email", data.email);
      formData.append("number", data.mobile);
      formData.append("city", data.city);
      formData.append("country", data.country);
      formData.append("state", data.street);
      formData.append("image", selectedImage);

      const response = await apiPut(url, formData, token);
      if (response.success) {
        toast.success("Admin Profile Updated Successfully");
        setLoading(false);
        if (userInfo) {
          const updatedUserInfo = {
            ...userInfo,
            image: response.payload.image,
          };
          const updatedLocalStorage = { user: updatedUserInfo };

          localStorage.setItem("userInfo", JSON.stringify(updatedLocalStorage));
        }
      }
    } catch (error) {
      toast.error("Something went wrong!");
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleUser(userInfo?.id);
  }, [userInfo]);

  // console.log("iiiiiiiiiiiii",userInfo)

  return (
    <MainLayout>
      <div className="default_container">
        <h2 className="text-2xl font-semibold mb-6">Admin Profile:</h2>

        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="font-medium text-lg mb-4">Personal Details</h3>
          <form onSubmit={handleSubmit(EditCustomer)}>
            <div className="border border-[#F2F2F2] rounded-[15px] px-3 py-3">
              <p className="!text-[12px] font-semibold mb-3">Profile Photo</p>
              <div className="flex items-center bg-[#F3F5F9] gap-4 px-3 py-3 rounded-[15px]">
                <img
                  src={
                    selectedImage
                      ? URL.createObjectURL(selectedImage)
                      : `${import.meta.env.VITE_APP_API_IMG_URL}${
                          singleUser?.image
                        }`
                  }
                  alt="Profile"
                  className="w-20 h-20 rounded-[15px] object-cover"
                  style={{ border: "1px solid rgba(0,0,0,10%)" }}
                />
                <div className="flex-1">
                  <p className="font-semibold text-[16px]">
                    {singleUser?.first_name} {singleUser?.last_name}
                  </p>
                  <p className="text-[#252525] text-[13px] font-normal">
                    {singleUser?.email}
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
                  register={register}
                  registerName="first_name"
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
                  register={register}
                  registerName="email"
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
                  type="number"
                  register={register}
                  registerName="mobile"
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
                  register={register}
                  registerName="building_number"
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
                  register={register}
                  registerName="street"
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
                  register={register}
                  registerName="city"
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
                  register={register}
                  registerName="country"
                />
              </div>
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
          </form>
        </div>
      </div>
    </MainLayout>
  );
}
