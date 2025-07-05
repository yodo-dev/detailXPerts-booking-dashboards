import React, { useEffect, useRef, useState } from "react";
import { ReactSVG } from "react-svg";
import dayjs from "dayjs";
import dummyImage from "@assets/images/user-profile-img.png";

import DataTable from "react-data-table-component";
import { customStyles } from "@components/CustomStylesTable";
import Logo from "@assets/svgs/logo1.svg";
import ActionDropdown from "@components/ActionDropdown";
import DotsIcon from "@assets/svgs/dots-vertical.svg";

import Pagination from "@components/Pagination";
import ReactSwitch from "react-switch";
import SkeltonLoader from "@components/SkeltonLoader";
import { apiGet } from "../../../Auth/Auth";
import { useGetFreelancers } from "../../../../Hooks/useFreelancers";
import Chevron from "@assets/svgs/selector-vertical.svg";

const FreelanceTab = () => {
  const [showSubTask, setShowSubTask] = useState(false);
  const [detailers, setDetailers] = useState([]);
  const [openDropdown, setOpenDropdown] = React.useState(null);
  const dropdownRef = useRef(null);
  const [showEditId, setShowEditId] = useState();
  //   const [loading, setLoading] = useState(true);
  const [showEditModal, setShowEditModal] = useState(false);
  const [totalRows, setTotalRows] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [addEditUsers, setAddEditUsers] = useState(true);

  const columns = [
    {
      name: (
        <span className="flex items-center gap-1 p-0 ml-0">
          <div className="flex ">{/* <CustomCheckbox /> ID */}</div>
          <img src={Chevron} alt="Sort Icon" className="w-[16px] h-[16px]" />
        </span>
      ),
      maxWidth: "100px !important",
      selector: (row) => row.id,
      cell: (row) => (
        <span className="flex"> {/* <CustomC /> {row.id} */}</span>
      ),
    },

    {
      name: (
        <span className="flex items-center gap-1">
          Freelancers
          <img src={Chevron} alt="Sort Icon" className="w-[16px] h-[16px]" />
        </span>
      ),
      selector: (row) => row.name,
      minWidth: "250px",
      cell: (row) => (
        <div
          // onClick={() => setShowSubTask(true)}
          className="flex gap-2 "
        >
          <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full">
            <img
              src={dummyImage}
              // alt={row.detailer.name}
              className="w-[40px] h-[40px] object-cover rounded-full"
            />
          </div>
          <div className="flex items-center">
            <div
              onClick={() => {
                // setShowSubTask(true);
                navigate("/freelancer-profile");
                setShowEditId(row.id);
              }}
              className="text-sm cursor-pointer "
            >
              {/* {row.franchise} */}
              {row?.first_name} {row?.last_name}
              <p className="text-[12px] !text-[#4D5361]">{row?.email}</p>
            </div>
            {/* <div className="text-xs text-gray-400 flex gap-1 mt-1">
              <ReactSVG src={LocationIcon} className="w-[14px] h-[14px]" /> 9272
              Westheimer...
            </div> */}
          </div>
        </div>
      ),
    },

    {
      name: (
        <span className="flex items-center gap-1">
          Bookings
          <img src={Chevron} alt="Sort Icon" className="w-[16px] h-[16px]" />
        </span>
      ),
      minWidth: "50px",
      selector: (row) => row.service,
      cell: (row) => <span>200</span>,
    },

    {
      name: (
        <span className="flex items-center gap-1">
          Last Booking
          <img src={Chevron} alt="Sort Icon" className="w-[16px] h-[16px]" />
        </span>
      ),
      minWidth: "100px",
      selector: (row) => row.booking,
      cell: (row) => <span>18-may-2024</span>,
    },

    {
      name: (
        <span className="flex items-center gap-1">
          Earnings
          <img src={Chevron} alt="Sort Icon" className="w-[16px] h-[16px]" />
        </span>
      ),
      minWidth: "100px",
      selector: (row) => row.service,
      cell: (row) => <span>$0.0</span>,
    },

    {
      name: (
        <span className="flex items-center gap-1">
          Status
          <img src={Chevron} alt="Sort Icon" className="w-[16px] h-[16px]" />
        </span>
      ),
      selector: (row) => row.status,
      minWidth: "130px",
      cell: (row) => (
        <span
          className={`text-xs font-medium me-2 px-2.5 py-1 rounded-full ${
            row.status === "ACTIVE"
              ? "bg-[#0676471A] text-[#067647] border border-[#067647] dark:bg-[#E7F2ED] dark:text-[#067647]" // Green for Completed
              : row.status === "INACTIVE"
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

    // {
    //   name: "Action",
    //   selector: (row) => row.action,
    //   minWidth: "10px",
    //   cell: (row) => (
    //     <div>
    //       <span
    //         onClick={() => {
    //           setOpenDropdown(openDropdown === row.id ? null : row.id);
    //           // setIsDropdownOpen(!isDropdownOpen);
    //         }}
    //         className="cursor-pointer bg-red-500"
    //       >
    //         <ReactSVG src={DotsIcon} />
    //       </span>
    //       <div ref={dropdownRef}>
    //         {/* <ActionDropdown
    //           setOpenDropdown={setOpenDropdown}
    //           openDropdown={openDropdown}
    //           rowId={row.id}
    //           setShowEditModal={setShowEditModal}
    //           setShowEditId={setShowEditId}
    //           showEditId={showEditId}
    //           //   handleDelete={handleDelete}
    //         /> */}
    //       </div>
    //     </div>
    //   ),
    // },
  ];

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const token = localStorage.getItem("token");

  const { data, isLoading } = useGetFreelancers(currentPage);

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
        columns={columns}
        customStyles={customStyles}
        data={data?.records}
        progressPending={isLoading}
        pagination
        paginationComponent={() => (
          <Pagination
            currentPage={currentPage}
            totalRows={data?.totalRecords}
            rowsPerPage={5}
            onPageChange={handlePageChange}
          />
        )}
        progressComponent={customLoader}
      />
    </div>
  );
};

export default FreelanceTab;
