import React from "react";
import CrossIcon from "../../assets/svgs/cross.svg";
import { ReactSVG } from "react-svg";
import LogoIcon from "../../assets/svgs/logo1.svg";
import LocationIcon from "../../assets/svgs/location.svg";
import { PrimaryButton } from "@components/Buttons/CommonButtons";
import CommonTable from "../Table/Table";
import uploadFile from "../../assets/svgs/uploadFile.svg";
import Stats from "./Components/Stats";
import Star from "../../assets/svgs/Star 3.svg";
import TableComp from "./Components/Table";
import { Table } from "lucide-react";
const SubTasks = ({setShowSubTask}) => {
  const th = ["Detailers", "Jobs", "Status"];
  const th1 = ["Booking ID", "Date", "Status"];

  return (
    <div className="bg-white h-screen overflow-auto max-w-4xl mx-auto my-10 p-6 pt-[0px] rounded-[40px] shadow-md">
      {/* Header */}
      <ReactSVG onClick={()=>(setShowSubTask(false))} src={CrossIcon} className="mb-[25px] ms-5 cursor-pointer"  />
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-[10px]">
            <div className=" flex items-center justify-center w-[57px] h-[57px] rounded-[12px] border border-[#00000026]">
              <img src={LogoIcon} className="w-[30px] h-[30px]" alt="" />
            </div>
            <div className="flex flex-col">
              <h2 className="!text-[18px] !font-semibold">Velocita Motors</h2>
              <p className="text-[12px] font-medium flex gap-2 mt-2">
                <ReactSVG src={LocationIcon} /> 2972 Westheimer Rd. Santa Ana, I
              </p>
            </div>
          </div>
        </div>

        <div>
          <PrimaryButton
            btnText="Export"
            btnClass="text-sm w-[100px] px-4 py-2 border !rounded-[8px] text-gray-600 hover:bg-gray-100"
            img={uploadFile}
            showImg={true}
          />
        </div>
      </div>

      {/* Status */}
      <div className="mt-4">
        <span className="text-sm font-medium text-gray-600 mr-2">Status:</span>
        <span className="text-xs bg-[#0676471A] text-[#067647] border border-[#067647] px-3 py-1 rounded-full">
          Active
        </span>
      </div>

      {/* Franchise Info */}

      <div className="mt-6 p-[24px] border border-[#929292] !rounded-[12px] rounded-md gap-4 text-sm text-gray-700">
        <div>
          <p className=" !font-medium !text-[14px] mb-[22px]">Franchise Info</p>
          <div className="grid grid-cols-2">
            <div className="col-span-1 ">
              <div className="flex gap-4 mb-[7px]">
                <p className="font-semibold text-[#929292] !font-normal">
                  Owner:
                </p>
                <p>David</p>
              </div>

              <div className="flex gap-4 mb-[20px]">
                <p className="font-semibold text-[#929292] !font-medium ">
                  David:
                </p>
                <p className="text-[#352CAB]">yourname@gmail.com</p>
              </div>

              <div className="mb-[7px]">
                <p className="font-semibold text-[#929292] !font-medium mb-[6px]">
                  Phone Number:
                </p>
                <p className="font-medium">0000 3232560</p>
              </div>
            </div>

            <div className="col-span-1 ">
              <div className="grid lg:grid-cols-3">
                <div className="col-span-1 mb-[7px]">
                  <p className="font-semibold text-[#929292] !font-normal">
                    City:
                  </p>
                  <p>David</p>
                </div>

                <div className="col-span-1 mb-[20px]">
                  <p className="font-semibold text-[#929292] !font-medium ">
                    Country:
                  </p>
                  <p className="text-[#352CAB]">Usa</p>
                </div>

                <div className="col-span-1 mb-[20px]">
                  <p className="font-semibold text-[#929292] !font-medium ">
                    Registered on:
                  </p>
                  <p>12 Apr 2025</p>
                </div>
              </div>

              <div className="mb-[7px]">
                <p className="font-semibold text-[#929292] !font-medium mb-[6px]">
                  Assigned Region::
                </p>
                <p className="font-medium">New York</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-4 gap-4 text-center text-sm">
        <Stats />
        <Stats />
        <Stats />
        <Stats imgSrc={Star} />
      </div>

      {/* Assigned Detailers & Booking Activity */}
      <div className="mt-8 grid grid-cols-2 gap-6 text-sm">
        {/* Assigned Detailers */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold">Assigned Detailers</h3>
            <button className="text-blue-600 text-xs">
              View all detailers
            </button>
          </div>

          <TableComp th={th} />
        </div>

        {/* Booking Activity */}
        <div>
          <h3 className="font-semibold mb-2">Booking Activity</h3>
          <TableComp th={th1} />
        </div>
      </div>
    </div>
  );
};

export default SubTasks;
