import React from "react";
import { customStyles } from "@components/DataTableStyle";
import DataTable from "react-data-table-component";
import { useGetBookingManagement } from "../../../Hooks/useGetBookingManagement";
import SkeltonLoader from "@components/SkeltonLoader";
import LocationIcon from "@assets/svgs/location.svg";
import { ReactSVG } from "react-svg";
import SelectField from "@components/SelectField/SelectField";
import ArrowDown from "@assets/svgs/arrow-down.svg";
import { PrimaryButton } from "@components/Buttons/CommonButtons";
import Logo from "@assets/svgs/logo1.svg";
import { Link } from "react-router-dom";

function OngoingBookings() {
  const { data, isLoading } = useGetBookingManagement("IN_PROGRESS");

  const dataArr = [
    {
      label: "Willington block",
      value: "willington",
    },
    {
      label: "Kingston block",
      value: "kingston",
    },
    {
      label: "Madison block",
      value: "madison",
    },
    {
      label: "Jefferson block",
      value: "jefferson",
    },
  ];

  const columns1 = [
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
              <Link to={"/detailer-info"}>Ben Ten</Link>
              {/* {row.franchise} */}
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
          className={`text-xs font-medium me-2 px-2.5 py-1 rounded-full bg-[#0676471A] text-[#067647] border border-[#067647] dark:bg-[#E7F2ED] dark:text-[#067647]`}
        >
          {row.status == "IN_PROGRESS" ? "In Progress" : ""}
        </span>
      ),
    },

    {
      name: "Assigned Detailer",
      minWidth: "230px",
      selector: (row) => row.assigned,
      cell: (row) => (
        <span>
          <div>
            <SelectField
              defaultValue="Select detailer"
              options={dataArr}
              styleSelect="select-style !w-[196px] bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-3"
              imageSrc={ArrowDown}
            />
          </div>
        </span>
      ),
    },

    {
      name: "Action",
      minWidth: "140px",
      selector: (row) => row.action,
      cell: (row) => (
        <span>
          <div>
            <PrimaryButton
              btnText="Remind"
              btnClass="bg-[#003CA6] font-bold text-white  text-[16px] !w-[104px] py-[10px] "
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
        columns={columns1}
        customStyles={customStyles}
        data={data}
        progressPending={isLoading}
        progressComponent={customLoader}
      />
    </div>
  );
}

export default OngoingBookings;
