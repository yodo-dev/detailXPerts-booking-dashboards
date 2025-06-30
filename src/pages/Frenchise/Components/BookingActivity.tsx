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
import CalendarIcon from "@assets/svgs/calendar.svg";
import { DateRange } from "react-date-range";

function BookingActivity() {
  const [openDropdown, setOpenDropdown] = React.useState(null);
  const dropdownRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

  console.log("pppppp");
  const columns3 = [
    {
      //   name: `ID`,
      name: <span className="flex items-center gap-2">Service Details</span>, // Header checkbox
      minWidth: "250px",
      selector: (row) => row.id,
      cell: (row) => <span className="flex"> Organic Detailing Package</span>,
    },
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
      name: "Service Date",
      minWidth: "150px",
      selector: (row) => row.date,
      cell: (row) => <span>04-05-2025</span>,
    },

    {
      name: "Price",
      maxWidth: "100px",
      selector: (row) => row.service,
      cell: (row) => <span>$19.22</span>,
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
      name: "Rating",
      selector: (row) => row.status,
      minWidth: "150px",

      cell: (row) => (
        <span
          className={`text-xs font-bold me-2 px-2.5 py-1 rounded-full ${
            row.status === "COMPLETED" || "ACTIVE"
              ? "bg-[#0676471A] text-[#067647] text-[12px] font-bold dark:bg-[#E7F2ED] dark:text-[#067647]" // Green for Completed
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
      name: "Status",
      selector: (row) => row.status,
      minWidth: "150px",

      cell: (row) => (
        <span
          className={`text-xs font-bold me-2 px-2.5 py-1 rounded-full ${
            row.status === "COMPLETED" || "ACTIVE"
              ? "bg-[#003CA61A] text-[#003CA6] text-[12px] font-bold dark:bg-[#003CA61A] dark:text-[#003CA6]" // Green for Completed
              : row.status === "INACTIVE"
              ? "bg-[#FFA5001A] text-[#FFAF3F] border border-[#FFAF3F] dark:bg-[#F9F5F0] dark:text-[#FFAF3F]" // Orange for In Progress
              : row.status === "BLOCKED"
              ? "bg-[#FEE4E2] text-[#F04438] border border-[#F04438] dark:bg-[#FEEDEC] dark:text-[#F04438]" // Red for Canceled
              : "bg-[#F1F3FB] text-gray-600"
          }`}
        >
          {row?.status=="COMPLETED" ? "Completed" : row?.status }
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

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short", // 'Nov'
      day: "numeric", // '23'
    });
  };

  const handleFieldClick = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  const handleDateChange = (e) => {
    setState([e.selection]);
    // getData(e.selection.startDate, e.selection.endDate);
  };

  const { data: bookings } = useBookingApiFranchise("COMPLETED");

  return (
    <div className="md:p-[24px] p-[14px] rounded-[12px] border border-[#08204233] ">
      <div className="flex items-center w-full flex-wrap  justify-between mb-[15px]">
        <p className="font-semibold text-[12px] md:mb-0 mb-5 font-secondary">
          Booking Activity
        </p>

        <div className="relative">
          <input
            type="text"
            value={`${formatDate(state[0].startDate)} - ${
              state[0].endDate ? formatDate(state[0].endDate) : ""
            }`}
            onClick={handleFieldClick}
            className="bg-white border border-black rounded-[8px] p-[15px]"
            readOnly
          />

          <button
            className="absolute top-4 right-5 cursor-pointer"
            onClick={handleFieldClick}
          >
            <ReactSVG src={CalendarIcon} className="text-light" />
          </button>

          {isCalendarVisible && (
            <div
              style={{
                position: "absolute",
                top: "100%", // Position the calendar below the input field
                right: "3%",
                zIndex: 9999999, // Ensure it's above other elements
              }}
            >
              <DateRange
                editableDateInputs={true}
                onChange={(item) => {
                  setState([item.selection]);
                  handleDateChange(item);
                }}
                moveRangeOnFirstSelection={false}
                ranges={state}
              />
            </div>
          )}
        </div>
      </div>{" "}
      <DataTable
        columns={columns3}
        customStyles={customStyles}
        conditionalRowStyles={conditionalRowStyle}
        data={bookings}
        progressPending={loading}
        className="uber-move"
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

export default BookingActivity;
