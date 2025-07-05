import MainLayout from "@layouts/MainLayout";
import React, { useEffect, useState } from "react";
import CommonInput from "@components/inputs/CommonInput";
import Table from "@components/Table/Table";
import { table } from "console";
import DataTable from "react-data-table-component";
import { customStyles } from "@components/CustomStylesTable";
import { apiGet } from "../../../../Auth/Auth";
import { Link, useNavigate } from "react-router-dom";
import Logo from "@assets/svgs/logo1.svg";
import MenuIcon from "@assets/svgs/menu.svg";
import { DateRange } from "react-date-range";
import SelectField from "@components/SelectField/SelectField";
import { ReactSVG } from "react-svg";
import ArrowDown from "@assets/svgs/arrow-down.svg";
import { X } from "lucide-react";
import LocationIcon from "@assets/svgs/location.svg";
import Chevron from "../../assets/svgs/chevron.svg";
import { ChevronDown } from "lucide-react";
import CalendarIcon from "@assets/svgs/calendar.svg";
import SkeltonLoader from "@components/SkeltonLoader";
import { PrimaryButton } from "@components/Buttons/CommonButtons";
import AssignedBookings from "./Components/AssignedBookings";
import Pagination from "@components/Pagination";
import OngoingBookings from "./Components/OngoingBookings";
import BookingRequests from "./Components/BookingRequests";
import CompletedBookings from "./Components/CompletedBookings";
import CancelledBooking from "./Components/CancelledBooking";
import "./BookingManagement.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const BookingManagement: React.FC = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openModal, setModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState();
  const [hoveredBug, setHoveredBug] = useState(false);

  const [tabs, setTabs] = useState(4);

  const token = localStorage.getItem("token");
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  const handleFieldClick = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };
  const handleDateChange = (e) => {
    setState([e.selection]);
    // getData(e.selection.startDate, e.selection.endDate);
  };
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

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short", // 'Nov'
      day: "numeric", // '23'
    });
  };

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

  const columns3 = [
    // {
    //   name: "ID",
    //   maxWidth: "100px !important",
    //   selector: (row) => row.id,
    //   cell: (row) => <span>101</span>,
    // },

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
      name: "Status",
      selector: (row) => row.status,
      minWidth: "115px",

      cell: (row) => (
        <span
          className={`text-xs font-medium me-2 px-2.5 py-1 rounded-full ${
            row.status === "EXCELLENT"
              ? "bg-[#0676471A] text-[#067647] border border-[#067647] dark:bg-[#E7F2ED] dark:text-[#067647]" // Green for Completed
              : row.status === "PENDING"
              ? "bg-[#FFA5001A] text-[#067647] dark:bg-[#DFFCEB] dark:text-[#067647]" // Orange for In Progress
              : row.status === "Canceled"
              ? "bg-[#FEE4E2] text-[#F04438] border border-[#F04438] dark:bg-[#FEEDEC] dark:text-[#F04438]" // Red for Canceled
              : "bg-[#F1F3FB] text-gray-600"
          }`}
        >
          {row.status}
        </span>
      ),
    },
  ];

  const columns4 = [
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
      name: "Cancelled By",
      selector: (row) => row.status,
      minWidth: "115px",

      cell: (row) => (
        <span
          className={`text-xs font-medium me-2 px-2.5 py-1 rounded-full ${
            row.status === "EXCELLENT"
              ? "bg-[#0676471A] text-[#067647] border border-[#067647] dark:bg-[#E7F2ED] dark:text-[#067647]" // Green for Completed
              : row.status === "PENDING"
              ? "bg-[#FFA5001A] text-[#067647] dark:bg-[#DFFCEB] dark:text-[#067647]" // Orange for In Progress
              : row.status === "Canceled"
              ? "bg-[#FEE4E2] text-[#F04438] border border-[#F04438] dark:bg-[#FEEDEC] dark:text-[#F04438]" // Red for Canceled
              : "bg-[#F1F3FB] text-gray-600"
          }`}
        >
          {row.status}
        </span>
      ),
    },
  ];

  const getBookings = async () => {
    // setLoading(true);
    try {
      const url = `${
        import.meta.env.VITE_APP_API_URL
      }v1/booking?page=${currentPage}&limit=${5}`;

      const params = {};
      const response = await apiGet(url, params, token);
      if (response.success) {
        setTotalRecords(response.payload.totalRecords);

        setLoading(false);
        setBookings(response.payload.records);
      }
    } catch (error) {
      setLoading(false);
      console.log("Error :", error);
    }
  };

  useEffect(() => {
    getBookings();
  }, [currentPage]);

  const customLoader = (
    <div className="p-4 flex w-[100%]  justify-center bg-[#F8F9FA] ">
      {[...Array(1)].map((_, i) => (
        <div key={i} className="mb-3 ">
          <SkeltonLoader columns={[100, 100, 100, 100, 100, 100, 100]} />
        </div>
      ))}
    </div>
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <MainLayout>
      <div className=" px-[40px] pt-0">
        <div className="flex lg:items-center md:flex-row flex-col justify-between mb-6 ">
          <h2 className="md:mb-0 mb-7 flex gap-5 font-uber-move-medium">
            <ReactSVG
              className="block lg:hidden mt-1.5"
              onClick={() => setModalOpen(!openModal)}
              src={MenuIcon}
            />
            Bookings
          </h2>
          <div className="flex gap-5">
            <div className="relative">
              <input
                type="text"
                value={`${formatDate(state[0].startDate)} - ${
                  state[0].endDate ? formatDate(state[0].endDate) : ""
                }`}
                onClick={handleFieldClick}
                className="bg-white border border-[#082042] border-[1px] rounded-[8px] p-[15px]"
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
            <div className="md:w-[366px] flex">
              <CommonInput
                placeholder="Search"
                inputClass="!w-[366px] "
                showImg={true}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-start items-start gap-[20px]">
          <div
            className={`flex flex-col z-40 bg-white rounded-[12px] shadow-lg w-[200px] 
              lg:relative lg:translate-x-0 lg:transition-none
              fixed top-0 h-full left-0 transition-transform duration-300  ease-in-out
               ${openModal ? "translate-x-0" : "-translate-x-full"}
            `}
          >
            <div
              className={` ${
                openModal ? "" : "hidden"
              } flex justify-end cursor-pointer`}
              onClick={() => setModalOpen(false)}
            >
              <X />
            </div>

            <div className="p-3 flex flex-col lg:my-0 my-auto w-[200px] bg-white lg:border-[#0000001A] lg:border-[1px] rounded-[12px] ">
              <button
                className={`py-[16px] pl-[16px] pr-[11px] cursor-pointer text-start ${
                  tabs === 0
                    ? "bg-[#003CA6] text-white rounded-[8px]"
                    : "bg-white text-black"
                } `}
                onClick={() => setTabs(0)}
                onMouseEnter={() => setHoveredBug(true)}
                onMouseLeave={() => setHoveredBug(false)}
                type="button"
              >
                Booking Requests
              </button>
              <button
                className={`py-[16px] pl-[16px] pr-[11px] cursor-pointer text-start ${
                  tabs === 1
                    ? "bg-[#003CA6] text-white rounded-[8px]"
                    : "bg-white text-black"
                } `}
                onClick={() => setTabs(1)}
                onMouseEnter={() => setHoveredBug(true)}
                onMouseLeave={() => setHoveredBug(false)}
                type="button"
              >
                Ongoing
              </button>
              <button
                className={`py-[16px] pl-[16px] pr-[11px] cursor-pointer text-start ${
                  tabs === 2
                    ? "bg-[#003CA6] text-white rounded-[8px]"
                    : "bg-white text-black"
                } `}
                onClick={() => setTabs(2)}
                onMouseEnter={() => setHoveredBug(true)}
                onMouseLeave={() => setHoveredBug(false)}
                type="button"
              >
                Assigned
              </button>
              <button
                className={`py-[16px] pl-[16px] pr-[11px] cursor-pointer text-start ${
                  tabs === 3
                    ? "bg-[#003CA6] text-white rounded-[8px]"
                    : "bg-white text-black"
                } `}
                onClick={() => setTabs(3)}
                onMouseEnter={() => setHoveredBug(true)}
                onMouseLeave={() => setHoveredBug(false)}
                type="button"
              >
                Completed
              </button>
              <button
                className={`py-[16px] pl-[16px] pr-[11px] cursor-pointer text-start ${
                  tabs === 4
                    ? "bg-[#003CA6] text-white rounded-[8px]"
                    : "bg-white text-black"
                } `}
                onClick={() => setTabs(4)}
                onMouseEnter={() => setHoveredBug(true)}
                onMouseLeave={() => setHoveredBug(false)}
                type="button"
              >
                Cancelled
              </button>
            </div>
          </div>

          <div className="bg-white  overflow-x-auto  p-[10px] w-full rounded-[12px] border-[#0000001A] border-[1px]">
            <div className="w-[100%]">
              {tabs == 0 ? (
                <>
                  <BookingRequests date={state} />
                </>
              ) : tabs == 1 ? (
                <>
                  {/* <DataTable
                  columns={columns1}
                  customStyles={customStyles}
                  data={bookings}
                  progressPending={loading}
                  progressComponent={customLoader}
                /> */}
                  <OngoingBookings />
                </>
              ) : tabs == 2 ? (
                <AssignedBookings />
              ) : // <DataTable
              //   columns={columns2}
              //   customStyles={customStyles}
              //   data={bookings}
              //   progressPending={loading}
              //   progressComponent={customLoader}
              // />
              tabs == 3 ? (
                <CompletedBookings />
              ) : // <DataTable
              //   columns={columns3}
              //   customStyles={customStyles}
              //   data={bookings}
              //   progressPending={loading}
              //   progressComponent={customLoader}
              // />
              tabs == 4 ? (
                // <DataTable
                //   columns={columns4}
                //   customStyles={customStyles}
                //   data={bookings}
                //   progressPending={loading}
                //   progressComponent={customLoader}
                // />
                <CancelledBooking />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BookingManagement;
