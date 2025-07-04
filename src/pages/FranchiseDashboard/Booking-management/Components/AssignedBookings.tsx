import React from "react";
import DataTable from "react-data-table-component";
import Logo from "@assets/svgs/logo1.svg";
import { ReactSVG } from "react-svg";
import LocationIcon from "@assets/svgs/location.svg";
import { PrimaryButton } from "@components/Buttons/CommonButtons";
import { Link, useNavigate } from "react-router-dom";
import { customStyles } from "@components/DataTableStyle";
import SkeltonLoader from "@components/SkeltonLoader";
import { useGetBookingManagement } from "../../../Hooks/useGetBookingManagement";

function AssignedBookings() {
  const { data, isLoading } = useGetBookingManagement("IN_PROGRESS");

  const navigate = useNavigate();

  const columns2 = [
    {
      name: "Customer",
      selector: (row) => row.franchise,
      minWidth: "230px",
      cell: (row) => (
        <div
          // onClick={() => setShowSubTask(true)}
          className="flex gap-2 w-[190px]"
        >
          <div className="w-[40px] h-[40px] flex items-center justify-center border border-[#25252526] rounded-full">
            <img
              src={Logo}
              // alt={row.detailer.name}
              className="w-5 h-5 rounded-full"
            />
          </div>
          <div className="">
            <div className="text-sm cursor-pointer">
              {/* {row.franchise} */}
              Ben Ten
            </div>
            <div className="text-xs text-gray-400 flex gap-1 mt-1">
              <ReactSVG src={LocationIcon} className="w-[14px] h-[14px]" /> 9272
              Westheimer...
            </div>
          </div>
        </div>
      ),
    },

    {
      name: "Service Details",
      minWidth: "200px",
      selector: (row) => row.service,
      cell: (row) => <span>{row?.services[0].service.name}</span>,
    },

    {
      name: "Service Date",
      minWidth: "115px",
      selector: (row) => row.date,
      cell: (row) => <span>04-05-2025</span>,
    },

    {
      name: "Price",
      minWidth: "80px",
      selector: (row) => row.service,
      cell: (row) => <span>$19.22</span>,
    },

    {
      name: "Status",
      selector: (row) => row.status,
      minWidth: "115px",

      cell: (row) => (
        <span
          className={`text-xs font-medium me-2 px-2.5 py-1 rounded-full ${
            row.status === "NEW"
              ? "bg-[#0676471A] text-[#067647] border border-[#067647] dark:bg-[#E7F2ED] dark:text-[#067647]" // Green for Completed
              : row.status === "PENDING"
              ? "bg-[#FFA5001A] text-[#FFAF3F] border border-[#FFAF3F] dark:bg-[#F9F5F0] dark:text-[#FFAF3F]" // Orange for In Progress
              : row.status === "Canceled"
              ? "bg-[#FEE4E2] text-[#F04438] border border-[#F04438] dark:bg-[#FEEDEC] dark:text-[#F04438]" // Red for Canceled
              : "bg-[#F1F3FB] text-gray-600"
          }`}
        >
          {row.status}
        </span>
      ),
    },
    {
      name: "Assigned Detailer",
      selector: (row) => row.franchise,
      minWidth: "230px",
      cell: (row) => (
        <div
          // onClick={() => setShowSubTask(true)}
          className="flex gap-2 w-[190px]"
        >
          <div className="w-[40px] h-[40px] flex items-center justify-center border border-[#25252526] rounded-full">
            <img
              src={Logo}
              // alt={row.detailer.name}
              className="w-5 h-5 rounded-full"
            />
          </div>
          <div className="">
            <div className="text-sm cursor-pointer">
              {/* {row.franchise} */}
              Ben Ten
            </div>
            <div className="text-xs text-gray-400 flex gap-1 mt-1">
              <ReactSVG src={LocationIcon} className="w-[14px] h-[14px]" /> 9272
              Westheimer...
            </div>
          </div>
        </div>
      ),
    },

    {
      name: "Action",
      minWidth: "150px",
      selector: (row) => row.action,
      cell: (row) => (
        <span>
          <div>
            <PrimaryButton
              btnText="Track"
              btnClass="bg-[#003CA6] text-white text-[16px] !w-[98px] py-[10px] "
              onClick={() => navigate("/ongoing-bookings")}
            />
          </div>
        </span>
      ),
    },
  ];

  const customLoader = (
    <div className="p-4 flex w-[100%]  justify-center bg-[#F8F9FA] ">
      {[...Array(1)].map((_, i) => (
        <div key={i} className="mb-3 ">
          <SkeltonLoader columns={[100, 100, 100, 100, 100, 100, 100]} />
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <DataTable
        columns={columns2}
        customStyles={customStyles}
        data={data}
        progressPending={isLoading}
        progressComponent={customLoader}
      />
    </div>
  );
}

export default AssignedBookings;
