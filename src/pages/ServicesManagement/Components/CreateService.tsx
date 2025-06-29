import MainLayout from "@layouts/MainLayout";
import React, { useState } from "react";
import LeftArrow from "@assets/svgs/arrow-left.svg";
import CloseIcon from "@assets/svgs/close-circle.svg";
import CommonInput from "../../../pages/Login/Components/CommonInput";
import { CustomCheckbox } from "@components/Checkbox/CustomCheckbox";
// import CommonInput from "../../../pages/Login/Components/CommonInput";
import SelectField from "@components/SelectField/SelectField";
import {
  useGetVehicleTypes,
  useVehicleTypes,
} from "../../../Hooks/useVehicleType";
import { useGetServiceName } from "../../../Hooks/useServiceName";
import { PlusCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { detailerFranchiseAdd } from "../../../Api/apiDetailersFranchise";
import toast from "react-hot-toast";
import { ApicreateService } from "../../../Api/apiCreateService";
import { PrimaryButton } from "@components/Buttons/CommonButtons";
import { ReactSVG } from "react-svg";

const CreateService: React.FC = () => {
  const { data } = useGetVehicleTypes();
  const { data: getServiceName } = useGetServiceName("Interior");
  const [fields, setFields] = useState(["_"]);
  const { register, handleSubmit } = useForm();
  const [selectedIds, setSelectedIds] = useState([]);
  // const {data:servicesData}=useGetServiceName("Interior")
  console.log("data interiros", getServiceName);

  const mutation = useMutation({
    // mutationFn: AddDetailerFranchise,
    mutationFn: (data) => ApicreateService(data),
    onSuccess: (data) => {
      console.log("✅ Message sent successfully:", data);
      toast.success("Service Create Successsfully!");
      // queryClient.invalidateQueries(["chatMessages"]);
    },
    onError: (error) => {
      console.error("❌ Error sending message:", error);
      toast.success("Something went wrong!");
    },
  });

  const handleCreateService = (data) => {
    const pricing = fields.map((_, index) => ({
      vehicle_type_id: parseInt(data[`vehicle_type${index}`]),
      price: parseFloat(data[`package_price${index}`]),
      duration_min: parseInt(data[`duration_mins${index}`]),
    }));

    const payload = {
      name: data.title,
      pricing,
      services: selectedIds,
    };

    mutation.mutate(payload);
  };

  const handleCheckbox = (e) => {
    setSelectedIds((prev_id) => {
      if (prev_id?.includes(e)) {
        return prev_id?.filter((id) => id !== e);
      } else {
        return [...prev_id, e];
      }
    });
  };

  const handleDeleteField = (index) => {
    setFields((prev) => prev?.filter((field, ind) => index !== ind));
  };

  

  console.log("fields", fields);
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
          <form onSubmit={handleSubmit(handleCreateService)}>
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
                    register={register}
                    registerName="title"
                  />
                </div>
              </div>
              <div className="rounded-[20px] flex justify-end p-1 mb-5">
                {/* <PlusCircle
                  className=" cursor-pointer "
                  onClick={() => setFields((prev) => [...prev, "_"])}
                /> */}
                <PrimaryButton
                  btnText="Add Fields"
                  btnClass="bg-[#003CA6] rounded-xl text-white px-[18px] py-[12px] !w-[150px] "
                  btnTextClass="text-[16px]"
                  onClick={() => setFields((prev) => [...prev, "_"])}
                  type="button"
                  showImg={true}
                  img={LeftArrow}
                />
              </div>
              {fields?.map((field, index) => (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-[20px] relative ">
                  <div className="col-span-1">
                    <SelectField
                      options={data?.map((dt) => ({
                        label: dt?.name,
                        value: dt?.id,
                      }))}
                      type="text"
                      label="Title"
                      name={`vehicle_type${index}`}
                      register={register}
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
                      registerName={`package_price${index}`}
                      register={register}
                    />
                  </div>
                  <div className="col-span-1">
                    <CommonInput
                      placeholder="Duration Mins"
                      type="number"
                      inputClass="w-full border border-gray-300 rounded-[10px] !px-[10px] !py-[10px] !sm:px-[16px] !sm:py-[15px] focus:outline-none"
                      label="Duration Mins"
                      registerName={`duration_mins${index}`}
                      register={register}
                    />
                  </div>

                  <ReactSVG
                    src={CloseIcon}
                    className="absolute top-0 right-0 cursor-pointer"
                    beforeInjection={(svg) => {
                      svg.querySelectorAll("*").forEach((el) => {
                        el.setAttribute("stroke", "red");
                      });
                    }}
                    onClick={() => handleDeleteField(index)}
                  />
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
                    {getServiceName?.map((item, key) => (
                      <div key={key} className="flex items-start">
                        <CustomCheckbox
                          onChange={() => handleCheckbox(item?.id)}
                        />
                        <span className="text-[14px] font-medium text-[#252525]">
                          {item?.name}
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
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default CreateService;
