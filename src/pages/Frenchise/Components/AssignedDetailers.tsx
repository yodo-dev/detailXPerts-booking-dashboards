import { customStyles } from "@components/CustomStylesTable";
import { useBookingApiFranchise } from "../../../Hooks/useBookingFranchise";
import React, { useRef, useState } from "react";
import DataTable from "react-data-table-component";
import PersonImg from "@assets/images/user-profile-img.png";
import { ReactSVG } from "react-svg";
import LocationIcon from "@assets/svgs/location.svg";
import { Link } from "react-router-dom";
import ArrowRight from "@assets/svgs/arrow-right.svg";
import { CustomCheckbox } from "@components/Checkbox/CustomCheckbox";
import ActionDropdown from "@components/ActionDropdown";
import DotsIcon from "@assets/svgs/dots-vertical.svg";
import Pagination from "@components/Pagination";
import SkeltonLoader from "@components/SkeltonLoader";
import { conditionalRowStyle } from "@components/DataTableStyle";

function AssignedDetailers() {
  const [openDropdown, setOpenDropdown] = React.useState(null);
  const dropdownRef = useRef(null);
  const [loading, setLoading] = useState(false);

  console.log("pppppp");
  const columns3 = [
    {
      //   name: `ID`,
      name: (
        <span className="flex items-center gap-2">
          <CustomCheckbox />
          ID
        </span>
      ), // Header checkbox
      maxWidth: "100px !important",
      selector: (row) => row.id,
      cell: (row) => (
        <span className="flex">
          {" "}
          <CustomCheckbox /> 101
        </span>
      ),
    },
    {
      name: "Detailers",
      selector: (row) => row.franchise,
      minWidth: "230px",
      cell: (row) => (
        <div
          // onClick={() => setShowSubTask(true)}
          className="flex gap-2 w-[190px]"
        >
          <div className="w-[40px] h-[40px] flex items-center justify-center border border-[#25252526] rounded-full">
            <img
              src={PersonImg}
              // alt={row.detailer.name}
              className="w-[100%] object-cover h-[100%] rounded-full"
            />
          </div>
          <div className="">
            <div className="text-sm cursor-pointer">
              {/* {row.franchise} */}
              Ben Ten
            </div>
            <div className="text-[12px] text-[#4D5361] flex gap-1 mt-1">
              <span>info@skyhigh.to</span>
            </div>
          </div>
        </div>
      ),
    },

    {
      name: "Bookings",
      maxWidth: "50px",
      selector: (row) => row.service,
      cell: (row) => <span>{22}</span>,
    },

    {
      name: "Last Booking",
      minWidth: "115px",
      selector: (row) => row.date,
      cell: (row) => <span>04-05-2025</span>,
    },

    {
      name: "Earnings",
      maxWidth: "100px",
      selector: (row) => row.service,
      cell: (row) => <span>$19.22</span>,
    },

    {
      name: "Status",
      selector: (row) => row.status,
      maxWidth: "150px",

      cell: (row) => (
        <span
          className={`text-xs font-medium me-2 px-2.5 py-1 rounded-full ${
            row.status === "COMPLETED" || "ACTIVE"
              ? "bg-[#0676471A] text-[#067647] border border-[#067647] dark:bg-[#E7F2ED] dark:text-[#067647]" // Green for Completed
              : row.status === "INACTIVE"
              ? "bg-[#FFA5001A] text-[#FFAF3F] border border-[#FFAF3F] dark:bg-[#F9F5F0] dark:text-[#FFAF3F]" // Orange for In Progress
              : row.status === "BLOCKED"
              ? "bg-[#FEE4E2] text-[#F04438] border border-[#F04438] dark:bg-[#FEEDEC] dark:text-[#F04438]" // Red for Canceled
              : "bg-[#F1F3FB] text-gray-600"
          }`}
        >
          {row.status}
        </span>
      ),
    },

    {
      name: "Action",
      selector: (row) => row.action,
      minWidth: "10px",
      cell: (row) => (
        <div>
          <span
            onClick={() => {
              setOpenDropdown(openDropdown === row.id ? null : row.id);
            }}
            className="cursor-pointer bg-red-500"
          >
            <ReactSVG src={DotsIcon} />
          </span>
          <div ref={dropdownRef}>
            <ActionDropdown
              setOpenDropdown={setOpenDropdown}
              openDropdown={openDropdown}
              rowId={row.id}
              //   setShowEditModal={setShowEditModal}
              //   setShowEditId={setShowEditId}
              //   showEditId={showEditId}
              //   handleDelete={deleteFrenchise}
            />
          </div>
        </div>
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

  const { data: bookings } = useBookingApiFranchise("COMPLETED");

  return (
    <div className="md:p-[24px] p-[14px] rounded-[12px] mb-[20px] border border-[#08204233] ">
      <div className="flex w-full justify-between mb-[15px]">
        <p className="font-semibold text-[20px] font-bold">
          Assigned Detailers
        </p>
        <Link className="text-[#352CAB] cursor-pointer flex gap-[5px]">
          View all detaliers <ReactSVG src={ArrowRight} />
        </Link>
      </div>{" "}
      <DataTable
        columns={columns3}
        customStyles={customStyles}
        conditionalRowStyles={conditionalRowStyle}
        data={bookings}
        progressPending={loading}
        progressComponent={customLoader}
        pagination
        paginationComponent={() => (
          <Pagination
            currentPage={2}
            // onPageChange={handlePageChange}
            rowsPerPage={5}
            totalRows={20}
          />
        )}
      />
    </div>
  );
}

export default AssignedDetailers;
