import React from "react";
import DashboardTable from "./DashboardTable";

export default function RankingFrenchise() {
  const tableHeaders = [
    {
      key: "index",
      label: "#",
      align: "start",
      customClass: "font-medium flex items-center gap-2",
    },
    {
      key: "name",
      label: "Name",
      align: "start",
      customClass:
        "text-[16px] font-semibold text-[#252525] flex items-center gap-2",
    },
    {
      key: "booking",
      label: "Booking",
      align: "center",
      customClass:
        "text-[16px] font-semibold text-[#252525] justify-center flex items-center gap-2",
    },
  ];
  return (
    <div>
      <div className="ranking_franchise common_section_bg   py-6 px-6 ps-0 overflow-x-auto w-full ">
        <div className="flex justify-between items-center">
          <p className="text-[20px]  px-6 text-[#252525] !font-bold">
            Ranking Franchises
          </p>
        </div>
        <DashboardTable topTable={true} tableHeaders={tableHeaders} />
      </div>
    </div>
  );
}
