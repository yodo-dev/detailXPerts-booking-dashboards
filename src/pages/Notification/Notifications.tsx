import React, { useState } from "react";
import MainLayout from "@layouts/MainLayout";
import { DateRange } from "react-date-range";
import CalendarIcon from "@assets/svgs/calendar.svg";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { ReactSVG } from "react-svg";
const notifications = [
  {
    company: "HD",
    title: "New Customer Onboarded!",
    message: "It's a confirmation notification of your service.",
    time: "02:32 PM (23rd Nov, 2024)",
  },
  {
    company: "BD",
    title: "BD Car Franchise",
    message: "We’re excited to pick your car for a fresh look.",
    time: "02:32 PM (23rd Nov, 2024)",
  },
  {
    company: "FD",
    title: "FD Car Franchise",
    message: "We’re excited to pick your car for a fresh look.",
    time: "02:32 PM (23rd Nov, 2024)",
  },
  {
    company: "MD",
    title: "MD Car Franchise",
    message: "We’re excited to pick your car for a fresh look.",
    time: "02:32 PM (23rd Nov, 2024)",
  },
  {
    company: "XD",
    title: "XD Car Franchise",
    message: "We’re excited to pick your car for a fresh look.",
    time: "02:32 PM (23rd Nov, 2024)",
  },
  {
    company: "FD",
    title: "FD Car Franchise",
    message: "We’re excited to pick your car for a fresh look.",
    time: "02:32 PM (23rd Nov, 2024)",
  },
  {
    company: "HD",
    title: "HD Detailers Franchise",
    message: "It's a confirmation notification of your service.",
    time: "02:32 PM (23rd Nov, 2024)",
  },
];

const Notifications: React.FC = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

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

  const handleFieldClick = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };

  return (
    <MainLayout>
      <div className="default_container">
        <div className="flex sm:flex-row justify-between sm:items-center mb-6">
          <h2 className="text-2xl font-semibold">Notifications</h2>
          {/* <input type="date" name="" id="" className="border px-[15px] py-[10px] rounded-[7px] text-[13px] font-medium text-[#082042]" /> */}
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
            <button className="absolute top-4 right-5 cursor-pointer" onClick={handleFieldClick}>
              <ReactSVG src={CalendarIcon} className="text-light" />
            </button>
          </div>

          {isCalendarVisible && (
            <div
              style={{
                position: "absolute",
                top: "40%", // Position the calendar below the input field
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

        <div className="common_box p-6">
          {notifications.map((item, index) => (
            <div
              key={index}
              className="flex sm:flex-row flex-col justify-between sm:items-center  py-4"
            >
              <div className="flex items-start gap-4 sm:mb-0 mb-1">
                <div className="bg-[#0066FF] text-white font-normal w-10 h-10 rounded-[12px] flex items-center justify-center text-[14px]">
                  {item.company}
                </div>
                <div>
                  <p className="font-semibold text-[#252525]">{item.title}</p>
                  <p className="text-[#595959] text-[13px]">{item.message}</p>
                </div>
              </div>
              <p className="text-[14px] text-[#252525] whitespace-nowrap sm_ml-0 ml-14">
                {item.time}
              </p>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Notifications;
