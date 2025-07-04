import React, { useState } from "react";
import DashboardTable from "./DashboardTable";
import girlPic from "@assets/svgs/girlPic.svg";
import { ReactSVG } from "react-svg";
import messageIcon from "@assets/svgs/message-text.svg";


export default function ActiveDetailers() {


  const [role, setRole] = useState(0);
  const [people, setPeople] = useState(["_", "_", "_", "_", "_"]);
  const tableHeaders2 = [
    {
      key: "time",
      label: "Time",
      align: "start",
      customClass:
        "text-[16px] font-semibold text-[#252525] flex items-center gap-2",
    },
    {
      key: "activity",
      label: "Activity",
      align: "start",
      customClass:
        "text-[16px] font-semibold text-[#252525] flex items-center gap-2",
    },
  ];

  return (
    <div className="recent_activites col-span-1 lg:col-span-1 common_section_bg  p-[20px]">
      <p className="!text-[20px] font-semibold">
        {role == 1 ? "Recent activites" : "Active Detailers"}{" "}
      </p>

      {role == 1 ? (
        <div className="overflow-x-auto w-full ">
          <DashboardTable tableHeaders={tableHeaders2} />
        </div>
      ) : (
        <div>
          {people.map(() => (
            <div className=" flex justify-between items-center">
              <div className="w-[100%] mt-5 flex justify-start gap-3">
                <img
                  className="object-fit w-[40px] h-[40px]"
                  src={girlPic}
                  alt=""
                />
                <div>
                  <p className="text-[16px] text-medium">Justin Baptista</p>
                  <p className="text-[#25252580] text-[14px] font-normal">
                    hello@hourglassinc.com
                  </p>
                </div>
              </div>
              <ReactSVG src={messageIcon} className="cursor-pointer" />

              {/* 2nd msg */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
