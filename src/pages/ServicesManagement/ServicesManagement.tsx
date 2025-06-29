import React, { useRef, useState } from "react";
import MainLayout from "@layouts/MainLayout";
import { PrimaryButton } from "@components/Buttons/CommonButtons";
import DotsIcon from "@assets/svgs/dots-vertical.svg";
import { ReactSVG } from "react-svg";
import { useNavigate } from "react-router-dom";
import { usePackagesGet } from "../../Hooks/usePackagesGet";
const ServicesManagement: React.FC = () => {
  const navigate = useNavigate();
  const { data } = usePackagesGet();
  console.log("____________", data);

  return (
    <MainLayout>
      <div className="default_container p-4 overflow-x-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-7">
          <h2 className="text-lg font-semibold md:mb-0 mb-2">Services</h2>
          <PrimaryButton
            btnText="Create a package"
            btnClass="bg-[#003CA6] rounded-xl text-white px-[18px] py-[12px] w-full sm:max-w-[210px]"
            btnTextClass="text-[16px]"
            onClick={() => navigate("/create-service")}
            //   onClick={() => setShowModal(true)}
          />
        </div>

        <div className="bg-white p-[20px] rounded-[20px]">
          <h3 className="!text-[20px] !font-medium !text-[#252525] mb-[20px]">
            Current Packages
          </h3>

          <div className="grid grid-cols-1  lg:grid-cols-3 gap-[20px]">
            {data?.map((pkg) => (
              <div className="col-span-1 ">
                <div className="bg-[#1B3D960D]  h-[563px] p-[15px] ps-[30px] flex justify-between flex-col  rounded-[20px]">
                  <div>
                    <div className="flex justify-between items-center mb-[16px]">
                      <h3 className="!text-[20px] !font-bold !text-[#252525]">
                        {pkg?.name}
                      </h3>
                      <ReactSVG src={DotsIcon} className="cursor-pointer" />
                    </div>
                    <div className="text-[#606060] pl-2 text-[16px] font-medium">
                      <ul className="list-disc text-[#606060] ">
                        {pkg?.services?.map((service) => (
                          <li>{service?.service?.name}</li>
                        ))}
                        {/* <li>Vacuum all interior areas, including trunk</li>
                        <li>Clean windows and mirrors (inside)</li>
                        <li>
                          Steam clean and sanitize interior dash, console, and
                          mats
                        </li>
                        <li>
                          Steam clean and sanitize headliner, seats, and carpets
                        </li>
                        <li>Steam clean and sanitize door panels and jambs</li>
                        <li>Sanitize air/ventilation system</li>
                        <li>
                          Apply interior plastic/leather/vinyl conditioner
                        </li> */}
                      </ul>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="text-[16px] font-bold text-[#252525]">
                      Price:
                    </p>
                    <p className="text-[24px] font-medium text-[#1B3D96] ">
                      $90
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* <div className="col-span-1 ">
              <div className="bg-[#1B3D960D] h-[563px] p-[15px] ps-[30px] flex justify-between flex-col  rounded-[20px]">
                <div>
                  <div className="flex justify-between items-center mb-[16px]">
                    <h3 className="!text-[20px] !font-bold !text-[#252525]">
                      Ultimate Detailing Package
                    </h3>
                    <ReactSVG src={DotsIcon} className="cursor-pointer" />
                  </div>
                  <div className="text-[#606060] pl-2 text-[16px] font-medium">
                    <p className="text-[17px] font-bold text-[#252525]">
                      1. Exterior services
                    </p>
                    <ul className="list-disc text-[#606060] ">
                      <li>Complete interior wipe down</li>
                      <li>Vacuum all interior areas, including trunk</li>
                      <li>Clean windows and mirrors (inside)</li>
                      <li>
                        Steam clean and sanitize interior dash, console, and
                        mats
                      </li>
                      <li>
                        Steam clean and sanitize headliner, seats, and carpets
                      </li>
                      <li>Steam clean and sanitize door panels and jambs</li>
                      <li>Sanitize air/ventilation system</li>
                      <li>Apply interior plastic/leather/vinyl conditioner</li>
                    </ul>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-[16px] font-bold text-[#252525]">Price:</p>
                  <p className="text-[24px] font-medium text-[#1B3D96] ">
                    $149
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-1">
              <div className="bg-[#1B3D960D] ps-[30px]  h-[563px] p-[15px] flex justify-between flex-col  rounded-[20px]">
                <div className="">
                  <div className="flex justify-between items-center mb-[16px]">
                    <h3 className="!text-[20px] !font-bold !text-[#252525]">
                      Organic Detailing Package
                    </h3>
                    <ReactSVG src={DotsIcon} className="cursor-pointer" />
                  </div>
                  <div className="text-[#606060]  pl-2 text-[16px] font-medium">
                    <p className="text-[17px] font-bold text-[#252525]">
                      1. Exterior services
                    </p>
                    <ul className="list-disc text-[#606060] ">
                      <li>Complete interior wipe down</li>
                      <li>Vacuum all interior areas, including trunk</li>
                      <li>Clean windows and mirrors (inside)</li>
                      <li>
                        Steam clean and sanitize interior dash, console, and
                        mats
                      </li>
                      <li>
                        Steam clean and sanitize headliner, seats, and carpets
                      </li>
                      <li>Steam clean and sanitize door panels and jambs</li>
                      <li>Sanitize air/ventilation system</li>
                      <li>Apply interior plastic/leather/vinyl conditioner</li>
                      <p className="text-[17px] font-bold text-[#252525]">
                        1. Exterior services
                      </p>
                      <li>Apply interior plastic/leather/vinyl conditioner</li>
                      <li>Sanitize air/ventilation system/viral contionion</li>
                    </ul>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-[16px] font-bold text-[#252525]">Price:</p>
                  <p className="text-[24px] font-medium text-[#1B3D96] ">
                    $199
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ServicesManagement;
