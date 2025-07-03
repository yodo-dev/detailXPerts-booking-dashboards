import React from "react";
import DataTable from "react-data-table-component";
import image from "@assets/svgs/Frame 295.svg";
import { conditionalRowStyle, customStyles } from "@components/DataTableStyle";

const DashboardCustomerReviewsTable: React.FC = () => {
  const reviews = [
    {
      name: "Jacob Jones",
      status: "Excellent",
      rating: "4.5",
      img: "https://i.pravatar.cc/32?img=1",
      role: "Customer",
    },
    {
      name: "Emily Brown",
      status: "Good",
      rating: "4.0",
      img: "https://i.pravatar.cc/32?img=2",
      role: "Customer",
    },
    {
      name: "Michael Smith",
      status: "Poor",
      rating: "2.5",
      img: "https://i.pravatar.cc/32?img=3",
      role: "Customer",
    },
    {
      name: "Sarah Wilson",
      status: "Excellent",
      rating: "5.0",
      img: "https://i.pravatar.cc/32?img=4",
      role: "Customer",
    },
    {
      name: "David Johnson",
      status: "Good",
      rating: "3.8",
      img: "https://i.pravatar.cc/32?img=5",
      role: "Customer",
    },
  ];
  const statusColor = {
    Excellent:
      "bg-[#e6f1ed] text-[#067647] border border-[1px] border-[#067647] font-medium font-uber-move-medium",
    Good: "bg-[#f9f2ea] text-[#FFAF3F] border border-[1px] border-[#FFAF3F] font-medium font-uber-move-medium",
    Poor: "bg-[#fdeceb] text-[#F04438] border border-[1px] border-[#F04438] font-medium font-uber-move-medium",
  };
  const reviewColumns = [
    {
      name: "Customer",
      selector: (row) => row.name,
      minWidth: "200px",

      cell: (row) => (
        <div className="flex items-center gap-2">
          <img
            src={row.img}
            className="w-[32px] h-[32px] object-cover rounded-full"
            alt=""
          />
          <div>
            <p className="font-uber-move-medium">{row.name}</p>
            <div className="font-uber-move-medium text-xs text-[#919191] font-medium">
              {row.role}
            </div>
          </div>
        </div>
      ),
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      minWidth: "130px",
      center: true,
      cell: (row) => (
        <span
          className={`text-xs w-[76px] text-[#4D5361] h-[32px] flex justify-center items-center rounded-full ${
            statusColor[row.status]
          }`}
        >
          {row.status}
        </span>
      ),
      sortable: true,
    },
    {
      name: "Rating",
      selector: (row) => row.rating,
      center: true,

      minWidth: "50px",
      cell: (row) => <div className=" font-uber-move-medium">{row.rating}</div>,
      sortable: true,
    },
    {
      name: "Actions",
      center: true,

      cell: () => (
        <div className="">
          <span>
            <img src={image} alt="" className="cursor-pointer" />
          </span>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  const locationDataWithIndex = reviews.map((row, index) => ({
    ...row,
    __index: index,
  }));

  return (
    <div className="bg-white rounded-[20px]  shadow p-4">
      <h2 className="!text-[20px] !font-bold mb-6">Customer Reviews</h2>
      <div className="overflow-x-auto rounded-[15px] border-[1px] border-[#E6E7E7]">
        <DataTable
          columns={reviewColumns}
          data={locationDataWithIndex}
          className="custom-table"
          customStyles={customStyles}
          conditionalRowStyles={conditionalRowStyle}
          highlightOnHover
          responsive
          noHeader
        />
      </div>
    </div>
  );
};

export default DashboardCustomerReviewsTable;
