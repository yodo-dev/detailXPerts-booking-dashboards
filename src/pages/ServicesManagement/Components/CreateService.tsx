// import MainLayout from "@layouts/MainLayout";
// import React from "react";

// const CreateService: React.FC = () => {
//   return (
//     <MainLayout>
//       <h1 className="!text-black">CreateService</h1>
//     </MainLayout>
//   );
// };

// export default CreateService;

import MainLayout from "@layouts/MainLayout";
import React, { useState } from "react";
import LeftArrow from "@assets/svgs/arrow-left.svg";
import CommonInput from "@components/inputs/CommonInput";
import { CustomCheckbox } from "@components/Checkbox/CustomCheckbox";
import { PrimaryButton } from "@components/Buttons/CommonButtons";
import SelectField from "@components/SelectField/SelectField";
import {
  useGetVehicleTypes,
  useVehicleTypes,
} from "../../../Hooks/useVehicleType";
import { useGetServiceName } from "../../../Hooks/useServiceName";
import { PlusCircle } from "lucide-react";

const CreateService: React.FC = () => {
  const { data } = useGetVehicleTypes();
  const { data: getServiceName } = useGetServiceName();
  const [fields, setFields] = useState(["_"]);

  return (
    <MainLayout>
      <div className="px-[20px] sm:px-[40px]">
        <div className="sm:flex items-center mb-[32px] gap-[16px]">
          <div className="flex gap-[8px] sm:mb-0 mb-3">
            <img src={LeftArrow} alt="" />
            <p className="!text-[#5B5B5B] !text-[16px] !font-medium">Back</p>
          </div>
          <div>
            <h3 className="!text-[#252525] !text-[24px] sm:!text-[32px] !font-medium ">
              Create Service Package
            </h3>
          </div>
        </div>

        <div className="">
          <div className="bg-white shadow-lg rounded-[20px] p-[20px]">
            <h2 className="!text-[20px] text-[#252525] !font-medium mb-[20px]">
              Current Packages
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-[20px]">
              <div className="col-span-2">
                <label className="block text-[12px] font-bold mb-[6px] text-[#252525]">
                  Package Title
                </label>
                <CommonInput
                  inputClass="w-full border border-gray-300 rounded-[10px] !px-[10px] !py-[10px] !sm:px-[16px] !sm:py-[15px] focus:outline-none"
                  type="text"
                  placeholder="Title"
                />
              </div>
            </div>
            <div className="rounded-[20px] hover:bg-[#d1d1d16b] w-fit p-1 mb-5">
              <PlusCircle
                className=" cursor-pointer "
                onClick={() => setFields((prev) => [...prev, "_"])}
                
              />
            </div>
            {fields?.map(() => (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-[20px]">
                <div className="col-span-1">
                  <SelectField
                    options={data?.map((dt) => ({
                      label: dt?.name,
                      value: dt?.id,
                    }))}
                    type="text"
                    placeholder="Title"
                    label="Title"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-[12px] font-bold mb-[6px] text-[#252525]">
                    Package Price
                  </label>
                  <CommonInput
                    // inputClass="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
                    inputClass="w-full border border-gray-300 rounded-[10px] !px-[10px] !py-[10px] !sm:px-[16px] !sm:py-[15px] focus:outline-none"
                    placeholder="Price"
                    type="number"
                  />
                </div>
                <div className="col-span-1">
                  <CommonInput
                    placeholder="Duration Mins"
                    type="number"
                    inputClass="w-full border border-gray-300 rounded-[10px] !px-[10px] !py-[10px] !sm:px-[16px] !sm:py-[15px] focus:outline-none"
                    label="Duration Mins"
                  />
                </div>
              </div>
            ))}

            <div className="mb-[20px]">
              <h3 className="!text-[#252525] !text-[20px] !font-medium">
                Services
              </h3>
            </div>
            <div className="border border-gray-200 shadow-lg rounded-md px-[10px] py-[20px] ">
              <div className="mb-6">
                <h4 className="!font-bold !text-[18px] !text-[#252525] mb-[20px]">
                  Interior
                </h4>
                <div className="flex flex-wrap gap-5">
                  {[
                    "Complete interior wipe down",
                    "Vacuum all interior areas, including trunk",
                    "Clean windows and mirrors (inside)",
                    "Steam clean and sanitize and deodorize interior dash, console, and mats",
                    "Steam clean sanitize and deodorize headliner, seats and carpets",
                    "Steam clean and sanitize door panels and jambs",
                    "Sanitize and deodorize air/ventilation system",
                    "Apply premium interior plastic/vinyl conditioner",
                  ].map((item, key) => (
                    <div key={key} className="flex items-start">
                      <CustomCheckbox />
                      <span className="text-[14px] font-medium text-[#252525]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-b border-[#F7F8F9]"> </div>

              <div className="mb-4">
                <h4 className="!font-bold !text-[18px] !text-[#252525] mb-[30px]">
                  Exterior
                </h4>
                <div className="flex flex-wrap gap-5">
                  {[
                    "Complete interior wipe down",
                    "Vacuum all interior areas, including trunk",
                    "Clean windows and mirrors (inside)",
                    "Steam clean and sanitize and deodorize interior dash, console, and mats",
                    "Steam clean sanitize and deodorize headliner, seats and carpets",
                    "Steam clean and sanitize door panels and jambs",
                    "Sanitize and deodorize air/ventilation system",
                    "Apply premium interior plastic/vinyl conditioner",
                  ].map((item, key) => (
                    <div key={key} className="flex items-start">
                      <CustomCheckbox />
                      <span className="text-[14px] font-medium text-[#252525]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <PrimaryButton
                  btnClass="w-full bg-[#003CA6] cursor-pointer text-[14px] text-white font-bold py-[18px] px-4 rounded-md hover:bg-blue-800 transition"
                  btnText="Create Package"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CreateService;
