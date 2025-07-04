import MainLayout from "@layouts/MainLayout";
import React, { useEffect, useState } from "react";
import CommonInput from "@components/inputs/CommonInput";

import MenuIcon from "@assets/svgs/menu.svg";
import { DateRange } from "react-date-range";
import { ReactSVG } from "react-svg";
import { X } from "lucide-react";
import CalendarIcon from "@assets/svgs/calendar.svg";
import AssignedBookings from "./Components/AssignedBookings";
import OngoingBookings from "./Components/OngoingBookings";
import BookingRequests from "./Components/BookingRequests";
import CompletedBookings from "./Components/CompletedBookings";
import CancelledBooking from "./Components/CancelledBooking";
import "./BookingManagement.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const BookingFranchise: React.FC = () => {
  const [openModal, setModalOpen] = useState(false);

  const [hoveredBug, setHoveredBug] = useState(false);

  const [tabs, setTabs] = useState(0);

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

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short", // 'Nov'
      day: "numeric", // '23'
    });
  };

  return (
    <MainLayout>
      <div className=" md:px-[40px] px-[20px] pt-0 uber-move">
        <div className="flex lg:items-center md:flex-row flex-col gap-5 md:flex-nowrap flex-wrap justify-between mb-6 ">
          <h2 className="md:mb-0 mb-7 flex gap-5 font-uber-move-medium md:!text-[32px] !text-[28px]">
            <ReactSVG
              className="block lg:hidden mt-1.5"
              onClick={() => setModalOpen(!openModal)}
              src={MenuIcon}
            />
            Bookings
          </h2>
          <div className="flex flex-wrap gap-5 md:justify-end justify-between w-[100%]">
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
            <div className="md:!w-[366px] !w-[100%] flex">
              <CommonInput
                placeholder="Search"
                inputClass="md:!w-[366px] w-full"
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
                  <OngoingBookings />
                </>
              ) : tabs == 2 ? (
                <AssignedBookings />
              ) : tabs == 3 ? (
                <CompletedBookings />
              ) : tabs == 4 ? (
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

export default BookingFranchise;
