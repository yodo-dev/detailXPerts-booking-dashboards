import React from "react";
import DataTable from "react-data-table-component";
import { conditionalRowStyle, customStyles } from "@components/DataTableStyle";

function DashboardMostBookingTable() {
  const servicesColumns = [
    {
      name: "Sr.",
      selector: (row) => row.id,
      width: "60px",
      cell: (row) => <div className="font-uber-move-medium">{row.id}</div>,
    },
    {
      name: "Service Details",
      selector: (row) => row.detail,
      width: "600px",
      wrap: true,
      cell: (row) => <div className="font-uber-move-medium">{row.detail}</div>,
    },
  ];
  const servicesData = [
    {
      id: 1,
      detail:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, eveniet.",
    },
    {
      id: 2,
      detail:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, eveniet.",
    },
    {
      id: 3,
      detail:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, eveniet.",
    },
    {
      id: 4,
      detail:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, eveniet.",
    },
    {
      id: 5,
      detail:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, eveniet.",
    },
  ];


  return (
    <div className="bg-white rounded-[20px] shadow p-5">
      <div className="sm:flex justify-between items-center mb-[21px]">
        <h3 className="text-[#252525] font-kumbsans !font-bold !text-[20px] !sm:text-[20px]">
          Most Booked Services
        </h3>
        <p className="font-semibold font-kumbsans text-[#252525] text-[14px] sm:text-[18px]">
          View all
        </p>
      </div>
      <div className="rounded-[10px] border-[1px] border-[#E6E7E7] overflow-x-auto">
        <DataTable
          columns={servicesColumns}
          data={servicesData}
          customStyles={customStyles}
          noHeader
          highlightOnHover
        />
      </div>
    </div>
  );
}

export default DashboardMostBookingTable;
