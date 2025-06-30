import React, { useState } from "react";
import MainLayout from "@layouts/MainLayout";
import downloadBtn from "../../../assets/svgs/downloadBtn.svg";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import { PrimaryButton } from "@components/Buttons/CommonButtons";
import { ReactSVG } from "react-svg";
import Linechart from "@components/Charts/Linechart";
import CalendarIcon from "@assets/svgs/calendar.svg";

const ReportsFranchise: React.FC = () => {
  const data1 = [
    {
      name: "Jan",
      "Loyal Customers": 200,
      "New Customers": 30,
      "Unique Customers": 100,
    },
    {
      name: "Feb",
      "Loyal Customers": 220,
      "New Customers": 40,
      "Unique Customers": 130,
    },
    {
      name: "Mar",
      "Loyal Customers": 240,
      "New Customers": 50,
      "Unique Customers": 160,
    },
    {
      name: "Apr",
      "Loyal Customers": 220,
      "New Customers": 40,
      "Unique Customers": 130,
    },
    {
      name: "May",
      "Loyal Customers": 200,
      "New Customers": 30,
      "Unique Customers": 100,
    },
    {
      name: "Jun",
      "Loyal Customers": 180,
      "New Customers": 20,
      "Unique Customers": 70,
    },
    {
      name: "Jul",
      "Loyal Customers": 160,
      "New Customers": 10,
      "Unique Customers": 40,
    },
    {
      name: "Aug",
      "Loyal Customers": 180,
      "New Customers": 20,
      "Unique Customers": 70,
    },
    {
      name: "Sep",
      "Loyal Customers": 200,
      "New Customers": 30,
      "Unique Customers": 100,
    },
    {
      name: "Oct",
      "Loyal Customers": 220,
      "New Customers": 40,
      "Unique Customers": 130,
    },
    {
      name: "Nov",
      "Loyal Customers": 240,
      "New Customers": 50,
      "Unique Customers": 160,
    },
    {
      name: "Dec",
      "Loyal Customers": 220,
      "New Customers": 40,
      "Unique Customers": 130,
    },
  ];
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
      <div className="default_container p-4 overflow-x-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 lg:mb-11 mb-8">
          <h1 className="!font-normal !text-[32px] !text-black">
            Performance Report
          </h1>

          <div className="flex gap-3">
            <PrimaryButton
              img={downloadBtn}
              showImg={true}
              btnText="Download Report"
              btnClass="bg-[#003CA6] rounded-xl text-white !px-[14px] !py-[18px] md:w-[235px]"
              btnTextClass="text-[16px]"
              onClick={() => console.log("Button clicked")}
            />
            {/* <input
              type="date"
              name=""
              id=""
              className="border px-[15px] py-[10px] rounded-[7px] text-[13px] font-medium text-[#082042]"
            /> */}
            {/* <DatePicker value={value} onChange={setValue} multiple /> */}
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
            <button
              style={{ backgroundColor: "#405089" }}
              className=""
              onClick={handleFieldClick}
            >
              {/* <FaCalendar className="text-light" /> */}
            </button>
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
        </div>

        <div className="p-[30px] pt-[40px] bg-white rounded-[8px] mb-[30px]">
          <div className="flex justify-between items-center mb-[40px]">
            <h3 className="!text-[20px] !font-bold ">Overview</h3>

            <div className="flex justify-between">
              {/* <h2 className="text-[22px] font-md mb-4 ">Billing Summary</h2> */}

              <div className="flex flex-wrap items-center sm:gap-0 gap-2 space-x-6">
                {/* Approved */}
                <div className="flex items-center space-x-2">
                  <span className="w-4 h-4 rounded bg-cyan-400"></span>
                  <span className="text-gray-900">$100k+ Sales</span>
                </div>

                {/* Pending */}
                <div className="flex items-center space-x-2">
                  <span className="w-4 h-4 rounded bg-yellow-300"></span>
                  <span className="text-gray-900">200+ Bookings Completed</span>
                </div>

                {/* Rejected */}
                <div className="flex items-center space-x-2">
                  <span className="w-4 h-4 rounded bg-red-500"></span>
                  <span className="text-gray-900">5 Canceled Bookings</span>
                </div>
              </div>
            </div>
          </div>
          {/* <ResponsiveContainer width="100%" height={300}>
            <LineChart
              width={600}
              height={300}
              data={data}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="name"
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 16, fill: "#252525" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 16, fill: "#252525" }}
              />

              <Tooltip />


              <Line
                type="monotone"
                dataKey="Approved"
                stroke="#FC5A41"
                strokeWidth={3}
              />
              <Line
                type="monotone"
                dataKey="Canceled"
                stroke="#00D5D2"
                strokeWidth={3}
              />
              <Line
                type="monotone"
                dataKey="Pending"
                stroke="#F9E844"
                strokeWidth={3}
              />

              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer> */}

          <Linechart
            data={data1}
            legend={false}
            color1={"#00D5D2"}
            color2={"#FC5A41"}
            color3={"#F9E844"}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-4 p-6 bg-[#f9fbfd] rounded-lg">
          {/* Left Card */}
          <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center justify-center w-full lg:w-1/3">
            <h4 className="!text-[14px] !font-medium text-gray-500 mb-2">
              Total Income
            </h4>
            <h2 className="!text-[30px] !font-bold mb-4">$10K</h2>

            {/* Circle Progress — Simulated (use a library for real circle) */}
            <div className="relative w-[160px] h-[160px] mb-4">
              <div className="absolute inset-0 rounded-full border-[10px] border-green-400 border-t-transparent animate-spin-slow"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-2xl font-bold">80%</span>

                <span className="text-[10px] text-gray-500">
                  Increased income
                </span>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-white rounded-xl shadow-sm p-6 flex-1">
            <div className="space-y-5">
              <StatRow label="Highest Amount Earned" value="$4.5K" />
              <StatRow label="Satisfaction Rate" value="97%" />
              <StatRow label="Total Revenue Generated" value="$25K" />
              <StatRow label="Recurring Customers" value="45%" />
              <StatRow label="Most Selling Area" value="Baltimore" bold />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

const StatRow = ({ label, value, bold }) => (
  <div className="flex justify-between items-center">
    <span className="text-gray-600 !text-normal !text-[#252525] !text-[16px]">
      {label}
    </span>
    <span
      className={`px-4 py-1  rounded-md text-sm ${
        bold ? "font-semibold" : "font-medium"
      } !font-bold !text-[22px]`}
    >
      {value}
    </span>
  </div>
);

export default ReportsFranchise;
