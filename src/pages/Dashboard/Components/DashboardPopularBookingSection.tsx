import React from "react";
import locationIcon from "@assets/svgs/location.svg";
import DataTable from "react-data-table-component";
import { ReactSVG } from "react-svg";
import { conditionalRowStyle, customStyles } from "@components/DataTableStyle";

function DashboardPopularBookingSection() {
  const locationData = [
    {
      id: 1,
      location:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, eveniet.",
    },
    {
      id: 2,
      location:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, eveniet.",
    },
    {
      id: 3,
      location:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, eveniet.",
    },
    {
      id: 4,
      location:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, eveniet.",
    },
    {
      id: 5,
      location:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, eveniet.",
    },
  ];

  const locationColumns = [
    {
      name: "Sr.",
      selector: (row) => row.id,
      width: "60px",
      cell: (row) => <div>{row.id}</div>,
    },
    {
      name: "Location",
      width: "600px",
      cell: (row) => (
        <div className="flex items-center gap-0">
          <ReactSVG src={locationIcon} />{" "}
          <img src={location} alt="" className="pt-1" width="14px" />
          {row.location}
        </div>
      ),
      grow: 2,
      wrap: true,
    },
  ];

  const locationDataWithIndex = locationData.map((row, index) => ({
    ...row,
    __index: index,
  }));

  return (
    <div className="bg-white rounded-[20px] shadow p-5">
      <div className="mb-[21px]">
        <h3 className="text-[#252525] font-kumbsans font-bold !text-[18px] !sm:text-[20px]">
          Popular booking locations
        </h3>
      </div>
      <div className="rounded-[10px] border-[1px] border-[#E6E7E7] overflow-x-auto">
        <DataTable
          columns={locationColumns}
          data={locationDataWithIndex}
          customStyles={customStyles}
          noHeader
          conditionalRowStyles={conditionalRowStyle}
          highlightOnHover
        />
      </div>
    </div>
  );
}

export default DashboardPopularBookingSection;
