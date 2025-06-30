import React from "react";
import { ReactSVG } from "react-svg";
import CrossIcon from "@assets/svgs/cross.svg";
import LocationIcon from "@assets/svgs/location.svg";
import LogoIcon from "@assets/svgs/logo1.svg";
import { PrimaryButton } from "@components/Buttons/CommonButtons";
import Stats from "@components/SubTasks/Components/Stats";

const BugsModal: React.FC = () => {
  return (
    <div className="relative  h-full  absolute top-0 z-[9999999] bg-red-500">
      {/* Close Button */}

      {/* SubTasks Content */}
      <div className="bg-white bg-red-500 h-screen overflow-auto max-w-4xl mx-auto my-10 p-6 pt-[40px] shadow-md">
        {/* Header */}
        <ReactSVG
        //   onClick={() => setShowSubTask(false)}
          src={CrossIcon}
          className="mb-[25px] ms-5  cursor-pointer"
        />
        {/* {singleData ? ( */}
          <div>
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-[10px]">
                  <div className=" flex items-center justify-center w-[57px] h-[57px] rounded-[12px] border border-[#00000026]">
                    <img src={LogoIcon} className="w-[30px] h-[30px]" alt="" />
                  </div>
                
                </div>
              </div>

              <div>
                <PrimaryButton
                  btnText="Export"
                  btnClass="text-sm w-[100px] px-4 py-2 border !rounded-[8px] text-gray-600 hover:bg-gray-100"
                //   img={uploadFile}
                  showImg={true}
                />
              </div>
            </div>

            {/* Status */}
            <div className="mt-4">
              <span className="text-sm font-medium text-gray-600 mr-2">
                Status:
              </span>
           
            </div>

            {/* Franchise Info */}

            <div className="mt-6 p-[24px] border border-[#929292] !rounded-[12px] rounded-md gap-4 text-sm text-gray-700">
              <div>
                <p className=" !font-medium !text-[14px] mb-[22px]">
                  Franchise Info
                </p>
                <div className="grid grid-cols-2">
                  <div className="col-span-1 ">
                    <div className="flex gap-4 mb-[7px]">
                      <p className="font-semibold text-[#929292] !font-normal">
                        Owner:
                      </p>
                      {/* <p>{singleData?.first_name}</p> */}
                    </div>

                    <div className="flex gap-4 mb-[20px]">
                      <p className="font-semibold text-[#929292] !font-medium ">
                        David:
                      </p>
                      {/* <p className="text-[#352CAB]">{singleData?.email}</p> */}
                    </div>

                    <div className="mb-[7px]">
                      <p className="font-semibold text-[#929292] !font-medium mb-[6px]">
                        Phone Number:
                      </p>
                      {/* <p className="font-medium">{singleData?.number}</p> */}
                    </div>
                  </div>

                  <div className="col-span-1 ">
                    <div className="grid lg:grid-cols-3">
                      <div className="col-span-1 mb-[7px]">
                        <p className="font-semibold text-[#929292] !font-normal">
                          City:
                        </p>
                        {/* <p>{singleData?.city}</p> */}
                      </div>

                      <div className="col-span-1 mb-[20px]">
                        <p className="font-semibold text-[#929292] !font-medium ">
                          Country:
                        </p>
                        {/* <p className="text-[#352CAB]">{singleData?.country}</p> */}
                      </div>

                      <div className="col-span-1 mb-[20px]">
                        <p className="font-semibold text-[#929292] !font-medium ">
                          Registered on:
                        </p>
                        <p>
                          {/* {dayjs(singleData?.created_at).format("DD MMMM YYYY")} */}
                        </p>
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
              {/* <Stats imgSrc={Star} /> */}
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

                {/* <TableComp th={th} /> */}
              </div>

              {/* Booking Activity */}
              <div>
                <h3 className="font-semibold mb-2">Booking Activity</h3>
                {/* <TableComp th={th1} /> */}
              </div>
            </div>
          </div>
        {/* // ) : (
        //   customLoader
        // )} */}
      </div>
    </div>
  );
};

export default BugsModal;
