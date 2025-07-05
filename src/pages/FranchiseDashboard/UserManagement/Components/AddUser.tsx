import React, { useEffect, useState } from "react";
import MainLayout from "@layouts/MainLayout";

import ReactSwitch from "react-switch";
import UploadIcon from "@assets/svgs/uploadFile.svg";
import SelectField from "@components/SelectField/SelectField";
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "react-query";
import CommonInput from "@pages/Admin/Login/Components/CommonInput";
import { detailerFranchiseAdd } from "../../../../Api/apiDetailersFranchise";
import FileUploadBox from "@components/FileUploadBox";
import { getRoles } from "../../../../Api/apiRoles";
import { useRoles } from "../../../../Hooks/useRoles";
import { usePermissions } from "../../../../Hooks/usePermissions";
import Permissions from "@components/Permissions";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

const AddUserManagement: React.FC = () => {
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
      toast.success("User Successsfully Created!");
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
    formData.append("phone", formValues.phone);
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
        <h2 className="!text-[32px] mb-[47px] font-medium">Add User</h2>
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
                      Add User
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

export default AddUserManagement;
