// import React, { useState } from "react";
// import MainLayout from "@layouts/MainLayout";
// import arrowDown from "../../../assets/svgs/arrow-down.svg";
// import { ReactSVG } from "react-svg";
// import VehicleCard from "@components/CarCards/CarCards";
// import { ResponsiveContainer, PieChart, Pie, Sector, Cell } from "recharts";
// import { Label } from "recharts";
// import Linechart from "@components/Charts/Linechart";
// import uploadIcon from "@assets/svgs/uploadIcon.svg";
// import ReactSwitch from "react-switch";
// // import DownloadButton from "../src/pages/FranchiseDashboard/DetailerFranchise/Components/ButtonComponent";

// const AddDetailerFranchise: React.FC = () => {
//   const [viewUsers, setViewUsers] = useState(true);
//   const [addEditUsers, setAddEditUsers] = useState(true);
//   const [deactivateUsers, setDeactivateUsers] = useState(true);
//   const [mustAddNumbers, setMustAddNumbers] = useState(false);

//   return (
//     <MainLayout>
//       <div className="px-[40px]">
//         <div>
//           <h2 className="!text-[32px] mb-[60px] font-medium">Add User</h2>

//           <div className="max-w-1xl mx-auto p-[20px] rounded-[20px]  bg-white rounded-[20px] shadow">
//             {/* <!-- Role --> */}
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Select Role
//               </label>
//               <select className="w-full px-4 py-2 border border-[#E0E0E0] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
//                 <option>Select</option>
//               </select>
//             </div>

//             {/* <!-- First and Last Name --> */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   First Name
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Phoenix"
//                   className="w-full px-4 py-2 border border-[#E0E0E0] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Last Name
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Baker"
//                   className="w-full px-4 py-2 border border-[#E0E0E0] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 />
//               </div>
//             </div>

//             {/* <!-- Email Address --> */}
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 placeholder="phoenix@leadgenerations.com"
//                 className="w-full px-4 py-2 border border-[#E0E0E0] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />
//             </div>

//             {/* <!-- Contact Number --> */}
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Contact Number
//               </label>
//               <div className="flex items-center border border-[#E0E0E0] rounded-md shadow-sm px-2 py-2 space-x-2">
//                 {/* <!-- Flag Placeholder --> */}
//                 <img
//                   src="https://flagcdn.com/us.svg"
//                   alt="US"
//                   className="w-6 h-4 rounded-sm"
//                 />
//                 <input
//                   type="text"
//                   placeholder="+1 782309839828"
//                   className="flex-1 outline-none"
//                 />
//               </div>
//             </div>

//             {/* <!-- About --> */}
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 About
//               </label>
//               <textarea
//                 rows="3"
//                 placeholder="Customer Support Team"
//                 className="w-full px-4 py-2 border border-[#E0E0E0] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               ></textarea>
//             </div>

//             {/* UPLAOD */}
//             <p className="mb-[5px]">License</p>
//             <div className="flex cursor-pointer hover:border-purple-500 transition duration-300 flex-col items-center border border-gray-400 rounded-[12px] pt-[16px] pb-[16px] text-center mb-6 w-[100%]">
//               <div className="w-14 h-14 rounded-full flex items-center justify-center mb-2">
//                 <span className="text-2xl text-gray-500">
//                   <ReactSVG src={uploadIcon} />
//                 </span>
//               </div>
//               <p className="text-sm text-[#5B5B5B]">
//                 <strong className="text-black">Click to upload</strong> or drag
//                 and drop
//               </p>
//               <p className="text-[12px] text-[#5B5B5B] mt-1">
//                 SVG, PNG, JPG or GIF (max. 800x400px)
//               </p>
//             </div>

//             <p className="mb-[5px]">Other Document</p>
//             <div className="flex cursor-pointer hover:border-purple-500 transition duration-300 flex-col items-center border border-gray-400 rounded-[12px] pt-[16px] pb-[16px] text-center mb-6 w-[100%]">
//               <div className="w-14 h-14 rounded-full flex items-center justify-center mb-2">
//                 <span className="text-2xl text-gray-500">
//                   <ReactSVG src={uploadIcon} />
//                 </span>
//               </div>
//               <p className="text-sm text-[#5B5B5B]">
//                 <strong className="text-black">Click to upload</strong> or drag
//                 and drop
//               </p>
//               <p className="text-[12px] text-[#5B5B5B] mt-1">
//                 SVG, PNG, JPG or GIF (max. 800x400px)
//               </p>
//             </div>

//             <p className="mb-[5px]">Other Document</p>
//             <div className="flex cursor-pointer hover:border-purple-500 transition duration-300 flex-col items-center border border-gray-400 rounded-[12px] pt-[16px] pb-[16px] text-center mb-6 w-[100%]">
//               <div className="w-14 h-14 rounded-full flex items-center justify-center mb-2">
//                 <span className="text-2xl text-gray-500">
//                   <ReactSVG src={uploadIcon} />
//                 </span>
//               </div>
//               <p className="text-sm text-[#5B5B5B]">
//                 <strong className="text-black">Click to upload</strong> or drag
//                 and drop
//               </p>
//               <p className="text-[12px] text-[#5B5B5B] mt-1">
//                 SVG, PNG, JPG or GIF (max. 800x400px)
//               </p>
//             </div>
//             {/* UPLAOD */}

//             {/* PERMISSION */}

//             <div>
//               <h2 className="!font-semibold !text-[18px] mb-4 !text-[#252525]">
//                 Permissions
//               </h2>
//               <div className="grid mb-4 grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
//                   <span className="text-[#546E7F] text-[14px]">View Users</span>
//                   <ReactSwitch
//                     checked={viewUsers}
//                     onChange={setViewUsers}
//                     checkedIcon={false}
//                     uncheckedIcon={false}
//                   />
//                 </div>
//                 <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
//                   <span className="text-[#546E7F] text-[14px]">
//                     Add/Edit Users
//                   </span>
//                   <ReactSwitch
//                     checked={addEditUsers}
//                     onChange={setAddEditUsers}
//                     checkedIcon={false}
//                     uncheckedIcon={false}
//                   />
//                 </div>
//                 <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
//                   <span className="text-[#546E7F] text-[14px]">
//                     Deactivate/Block Users
//                   </span>
//                   <ReactSwitch
//                     checked={deactivateUsers}
//                     onChange={setDeactivateUsers}
//                     checkedIcon={false}
//                     uncheckedIcon={false}
//                   />
//                 </div>
//                 <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
//                   <span className="text-[#546E7F] text-[14px]">
//                     Must add some numbers in password
//                   </span>
//                   <ReactSwitch
//                     checked={mustAddNumbers}
//                     onChange={setMustAddNumbers}
//                     checkedIcon={false}
//                     uncheckedIcon={false}
//                   />
//                 </div>
//               </div>

//               <div className="grid mb-4 grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
//                   <span className="text-[#546E7F] text-[14px]">View Users</span>
//                   <ReactSwitch
//                     checked={viewUsers}
//                     onChange={setViewUsers}
//                     checkedIcon={false}
//                     uncheckedIcon={false}
//                   />
//                 </div>
//                 <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
//                   <span className="text-[#546E7F] text-[14px]">
//                     Add/Edit Users
//                   </span>
//                   <ReactSwitch
//                     checked={addEditUsers}
//                     onChange={setAddEditUsers}
//                     checkedIcon={false}
//                     uncheckedIcon={false}
//                   />
//                 </div>
//                 <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
//                   <span className="text-[#546E7F] text-[14px]">
//                     Deactivate/Block Users
//                   </span>
//                   <ReactSwitch
//                     checked={deactivateUsers}
//                     onChange={setDeactivateUsers}
//                     checkedIcon={false}
//                     uncheckedIcon={false}
//                   />
//                 </div>
//                 <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
//                   <span className="text-[#546E7F] text-[14px]">
//                     Must add some numbers in password
//                   </span>
//                   <ReactSwitch
//                     checked={mustAddNumbers}
//                     onChange={setMustAddNumbers}
//                     checkedIcon={false}
//                     uncheckedIcon={false}
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 mb-4 gap-4">
//                 <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
//                   <span className="text-[#546E7F] text-[14px]">View Users</span>
//                   <ReactSwitch
//                     checked={viewUsers}
//                     onChange={setViewUsers}
//                     checkedIcon={false}
//                     uncheckedIcon={false}
//                   />
//                 </div>
//                 <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
//                   <span className="text-[#546E7F] text-[14px]">
//                     Add/Edit Users
//                   </span>
//                   <ReactSwitch
//                     checked={addEditUsers}
//                     onChange={setAddEditUsers}
//                     checkedIcon={false}
//                     uncheckedIcon={false}
//                   />
//                 </div>
//                 <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
//                   <span className="text-[#546E7F] text-[14px]">
//                     Deactivate/Block Users
//                   </span>
//                   <ReactSwitch
//                     checked={deactivateUsers}
//                     onChange={setDeactivateUsers}
//                     checkedIcon={false}
//                     uncheckedIcon={false}
//                   />
//                 </div>
//                 <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
//                   <span className="text-[#546E7F] text-[14px]">
//                     Must add some numbers in password
//                   </span>
//                   <ReactSwitch
//                     checked={mustAddNumbers}
//                     onChange={setMustAddNumbers}
//                     checkedIcon={false}
//                     uncheckedIcon={false}
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 mb-3 gap-4">
//                 <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
//                   <span className="text-[#546E7F] text-[14px]">View Users</span>
//                   <ReactSwitch
//                     checked={viewUsers}
//                     onChange={setViewUsers}
//                     checkedIcon={false}
//                     uncheckedIcon={false}
//                   />
//                 </div>
//                 <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
//                   <span className="text-[#546E7F] text-[14px]">
//                     Add/Edit Users
//                   </span>
//                   <ReactSwitch
//                     checked={addEditUsers}
//                     onChange={setAddEditUsers}
//                     checkedIcon={false}
//                     uncheckedIcon={false}
//                   />
//                 </div>
//                 <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
//                   <span className="text-[#546E7F] text-[14px]">
//                     Deactivate/Block Users
//                   </span>
//                   <ReactSwitch
//                     checked={deactivateUsers}
//                     onChange={setDeactivateUsers}
//                     checkedIcon={false}
//                     uncheckedIcon={false}
//                   />
//                 </div>
//                 <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
//                   <span className="text-[#546E7F] text-[14px]">
//                     Must add some numbers in password
//                   </span>
//                   <ReactSwitch
//                     checked={mustAddNumbers}
//                     onChange={setMustAddNumbers}
//                     checkedIcon={false}
//                     uncheckedIcon={false}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </MainLayout>
//   );
// };

// export default AddDetailerFranchise;

import React, { useEffect, useState } from "react";
import MainLayout from "@layouts/MainLayout";

import ReactSwitch from "react-switch";
import UploadIcon from "@assets/svgs/uploadFile.svg";
import SelectField from "@components/SelectField/SelectField";
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "react-query";
import CommonInput from "@pages/Admin/Login/Components/CommonInput";
import { detailerFranchiseAdd } from "../../../Api/apiDetailersFranchise";
import FileUploadBox from "@components/FileUploadBox";
import { getRoles } from "../../../Api/apiRoles";
import { useRoles } from "../../../Hooks/useRoles";
import { usePermissions } from "../../../Hooks/usePermissions";
import Permissions from "@components/Permissions";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

const AddDetailerFranchise: React.FC = () => {
  const { handleSubmit, register } = useForm();
  // const { data:rolesData, isLoading } = getRoles();
  const { data, isLoading, error } = useRoles();
  const { data: getPermissions } = usePermissions();
  const [selectedPermissionIds, setSelectedPermissionIds] = useState<number[]>(
    []
  );

  const roles = data
    ?.filter(
      (role) =>
        role.name !== "admin" &&
        role.name !== "super admin" &&
        role.name !== "customer" &&
        role.name !== "franchise" &&
        role.name !== "freelance"
    )
    .map((role) => ({
      value: role.id,
      label: role.name,
    }));

  const queryClient = useQueryClient();

  const [uploadedFiles, setUploadedFiles] = useState<(File | null)[]>([]);

  const [uploadedFilesDocs, setUploadedFilesDocs] = useState<String[]>([
    "license",
    "id-card",
    "visa",
  ]);

  const handleFileChange = (index: number, file: File | null) => {
    const newFiles = [...uploadedFiles];
    newFiles[index] = file;
    setUploadedFiles(newFiles);
  };

  const [permissions, setPermissions] = useState({});
  const [permissionList, setPermissionList] = useState([]);

  useEffect(() => {
    if (getPermissions && Array.isArray(getPermissions)) {
      // Convert array into usable formats
      const values = {};
      const list = [];

      getPermissions.forEach((item) => {
        values[item.key] = item.value;
        list.push({ key: item.key, label: item.label });
      });

      setPermissions(values);
      setPermissionList(list);
    }
  }, [getPermissions]);

  const handlePermissionToggle = (permission: { id: number; key: string }) => {
    setPermissions((prev) => ({
      ...prev,
      [permission?.key]: !prev[permission?.key],
    }));

    setSelectedPermissionIds((prevIds) => {
      if (prevIds.includes(permission?.id)) {
        // If already selected, remove it
        return prevIds?.filter((id) => id !== permission?.id);
      } else {
        // If not selected, add it
        return [...prevIds, permission?.id];
      }
    });
  };

  const mutation = useMutation({
    // mutationFn: AddDetailerFranchise,
    mutationFn: detailerFranchiseAdd,
    onSuccess: (data) => {
      console.log("✅ Message sent successfully:", data);
      toast.success("Detailer Successsfully Created!");
      queryClient.invalidateQueries(["chatMessages"]);
    },
    onError: (error) => {
      console.error("❌ Error sending message:", error);
      toast.success("Detailer Successsfully Created!");
    },
  });

  const handleSubmitDetailer = (formValues) => {
    const formData = new FormData();
    formData.append("first_name", formValues.first_name);
    formData.append("last_name", formValues.last_name);
    formData.append("email", formValues.email);
    formData.append("number", formValues.phone);
    formData.append("about", formValues.about);
    formData.append("role_id", formValues.role_id);

    uploadedFiles.forEach((file, index) => {
      if (file) {
        formData.append("documents", file); // use 'documents[]' if backend expects an array
      }
    });

    uploadedFilesDocs.forEach((file, index) => {
      if (file) {
        formData.append("document_types[]", file); // use 'documents[]' if backend expects an array
      }
    });

    selectedPermissionIds.forEach((permission, index) => {
      if (permission) {
        formData.append("permissions[]", permission);
      }
    });

    mutation.mutate(formData);
  };

  return (
    <MainLayout>
      <div className="px-[40px] ">
        <h2 className="!text-[32px] mb-[47px] font-medium">Add Detailer</h2>
        <div className="bg-white p-[20px] rounded-[20px]">
          <form onSubmit={handleSubmit(handleSubmitDetailer)}>
            <div className="space-y-6 ">
              {/* Select Role */}

              <div>
                <label className="block mb-2 text-[16px] font-medium">
                  Select Role
                </label>

                <SelectField
                  options={roles}
                  styleSelect="w-full rounded-xl bg-white border-[#E7E7E7] border-[1px]  placeholder:text-[12px] shadow_bg placeholder:text-[var(--text-muted)] py-[14px] px-[10px] outline-none "
                  register={register}
                  name="role_id"
                />
              </div>

              {/* First Name & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-[16px] font-medium">
                    First Name
                  </label>
                  <CommonInput
                    register={register}
                    registerName="first_name"
                    placeholder="Phoenix"
                    inputClass="border-[#E7E7E7] border-[1px] "
                  />
                </div>
                <div>
                  <label className="block mb-2 text-[16px] font-medium">
                    Last Name
                  </label>
                  <CommonInput
                    register={register}
                    registerName="last_name"
                    placeholder="Baker"
                    inputClass="border-[#E7E7E7] border-[1px]"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block mb-2 text-[16px] font-medium">
                  Email Address
                </label>
                <CommonInput
                  register={register}
                  registerName="email"
                  placeholder="phoenix@leadgenerations.com"
                  inputClass="border-[#E7E7E7] border-[1px]"
                />
              </div>

              {/* Contact Number */}
              <div>
                <label className="block mb-2 text-[16px] font-medium">
                  Contact Number
                </label>
                {/* For custom phone input with flag, you can create a separate PhoneInput component if needed */}
                <CommonInput
                  register={register}
                  registerName="phone"
                  placeholder="+1 782309839828"
                  inputClass="border-[#E7E7E7] border-[1px]"
                />
              </div>

              {/* About */}
              <div>
                <label className="block mb-2 text-[16px] font-medium">
                  About
                </label>
                <textarea
                  {...register("about")}
                  placeholder="Customer Support Team"
                  className="w-full rounded-xl bg-white placeholder:text-[12px] border-[#E7E7E7] border-[1px] shadow_bg placeholder:text-[var(--text-muted)] py-[14px] px-3 outline-none min-h-[120px]"
                />

                <div className=" py-8 space-y-8">
                  {["License", "ID Card", "VISA"].map((label, index) => (
                    <FileUploadBox
                      key={index}
                      label={label}
                      file={uploadedFiles[index]}
                      onChange={(file) => handleFileChange(index, file)}
                    />
                  ))}

                  {/* Permissions */}
                  <div>
                    <h3 className="font-medium text-lg mb-4">Permissions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[14px] text-[#546E7F]">
                      {getPermissions?.map((permission) => {
                        // Generate a fallback key from the name
                        const key =
                          permission?.name
                            ?.toLowerCase()
                            .replace(/\s+/g, "_") || `perm_${permission?.id}`;

                        return (
                          <div
                            key={key}
                            className="bg-[#F7F8FC] px-[15px] py-[20px] rounded-xl flex justify-between items-center"
                          >
                            <span className="text-sm font-medium">
                              {permission?.name}
                            </span>
                            <ReactSwitch
                              onChange={() =>
                                handlePermissionToggle({
                                  id: permission.id,
                                  key,
                                })
                              }
                              checked={permissions[key] || false}
                              offColor="#ccc"
                              onColor="#34D399"
                              checkedIcon={false}
                              uncheckedIcon={false}
                              height={20}
                              width={40}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-8">
                    <button className="w-full bg-[#1B3D96] cursor-pointer text-white py-[12px] rounded-xl font-bold ">
                      Add Detailer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default AddDetailerFranchise;
