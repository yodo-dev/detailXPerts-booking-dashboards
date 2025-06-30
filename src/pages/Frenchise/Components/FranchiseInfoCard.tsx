import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import "../Franchise.css";
import LogoIcon from "../../../assets/svgs/logo1.svg";
import LocationIcon from "../../../assets/svgs/location.svg";
import ExportIcon from "../../../assets/svgs/export-icon.svg";
import { PrimaryButton } from "@components/Buttons/CommonButtons";
import Stats from "@components/SubTasks/Components/Stats";
import downloadBtn from "@assets/svgs/downloadBtn.svg";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import CalendarIcon from "@assets/svgs/calendar.svg";
import Linechart from "@components/Charts/Linechart";
import HighestAmountDetails from "@components/HighestAmountDetails";
import AssignedDetailers from "./AssignedDetailers";
import BookingActivity from "./BookingActivity";

function FranchiseInfoCard() {
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  const data = [
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

  const handleDateChange = (e) => {
    setState([e.selection]);
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
    <div className="mt-6 md:p-[24px] p-[14px] bg-white rounded-[20px] gap-4 text-sm text-gray-700">
      <div className="flex items-start flex-wrap justify-between mb-[30px]">
        <div className="md:mb-0 mb-5">
          <div className="flex items-center gap-[10px] mb-[20px]">
            <div className=" flex items-center justify-center w-[57px] h-[57px] rounded-[12px] border border-[#00000026]">
              <img src={LogoIcon} className="w-[30px] h-[30px]" alt="" />
            </div>
            <div className="flex flex-col">
              <h2 className="!text-[18px] !font-semibold">Velocita Motors</h2>
              <p className="text-[12px] font-medium flex gap-2 mt-2">
                {/* <ReactSVG src={LocationIcon} />{" "}
                {singleData?.address
                  ? singleData?.address
                  : "2972 Westheimer Rd.Santa Ana, I"} */}
                <ReactSVG src={LocationIcon} />
                2972 Westheimer Rd.Santa Ana, I
              </p>
            </div>
          </div>

          <div className="flex items-center gap-[20px] ">
            <p>Status:</p>
            <span className="text-xs bg-[#0676471A] text-[#067647] border border-[#067647] px-3 py-1 rounded-full">
              Active
            </span>
          </div>
        </div>

        <div className="flex gap-3 ">
          <PrimaryButton
            btnText="Export"
            btnClass="text-sm w-[100px] px-4 py-2 border !rounded-[8px] text-gray-600 hover:bg-gray-100"
            img={ExportIcon}
            showImg={true}
          />
        </div>
      </div>

      <div className="border mb-[30px] border-[#08204233] ps-[42px] pe-[42px] pt-[24px] pb-[24px] rounded-[12px]">
        <p className=" !font-medium !text-[14px] mb-[22px]">Franchise Info</p>
        <div className="grid grid-cols-2">
          <div className="md:col-span-1 col-span-2 ">
            <div className="flex gap-4 mb-[7px]">
              <p className="font-semibold text-[#929292] !font-normal">
                Owner:
              </p>
            </div>

            <div className="flex gap-4 mb-[20px]">
              <b className="font-medium text-[#000000] !font-medium ">David:</b>
            </div>

            <div className="mb-[7px]">
              <p className="font-semibold text-[#929292] !font-medium mb-[6px]">
                Phone Number:
              </p>
              <b className="font-medium text-[#000000] !font-medium mb-[6px]">
                0000 3232560
              </b>
            </div>
          </div>

          <div className="md:col-span-1 col-span-2 ">
            <div className="grid lg:grid-cols-3">
              <div className="col-span-1 mb-[7px]">
                <p className="font-semibold text-[#929292] !font-normal">
                  City:
                </p>
                <p className="text-[#000000] font-medium ">David</p>
              </div>

              <div className="col-span-1 mb-[20px]">
                <p className="font-semibold text-[#929292] !font-medium ">
                  Country:
                </p>
                <p className="text-[#000000] font-medium ">USA</p>
              </div>

              <div className="col-span-1 mb-[20px]">
                <p className="font-semibold text-[#929292] !font-medium ">
                  Registered on:
                </p>
                <p className="text-[#000000] font-medium ">12 Jan 2024</p>
                <p></p>
              </div>
            </div>

            <div className="mb-[7px]">
              <p className="font-semibold text-[#929292] !font-medium mb-[6px]">
                Assigned Region::
              </p>
              <p className="font-medium text-[#000000] font-medium ">
                New York
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-[24px] mb-[30px]">
        <div className="md:col-span-1 col-span-6 ">
          <Stats />
        </div>
        <div className="md:col-span-3 col-span-6">
          <Stats />
        </div>
        <div className="md:col-span-1 col-span-6">
          <Stats />
        </div>{" "}
        <div className="md:col-span-1 col-span-6">
          <Stats />
        </div>
      </div>

      <div className="flex uber-move flex-wrap justify-between items-center">
        <h2 className="uber-move md:mb-0 mb-5">Analytics</h2>
        <div className="flex md:flex-nowrap flex-wrap gap-[10px] ">
          <div className="w-full">
            <PrimaryButton
              img={downloadBtn}
              showImg={true}
              btnText="Download Report"
              btnClass="bg-[#003CA6] rounded-xl text-white !px-[14px]  !py-[18px] w-full"
              btnTextClass="text-[16px]"
              onClick={() => console.log("Button clicked")}
            />
          </div>

          <div className="relative w-full">
            <input
              type="text"
              value={`${formatDate(state[0].startDate)} - ${
                state[0].endDate ? formatDate(state[0].endDate) : ""
              }`}
              onClick={handleFieldClick}
              className="bg-white border border-black rounded-[8px] p-[15px] w-full"
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
        </div>
      </div>

      <div className="w-full mt-[20px]">
        <Linechart
          data={data}
          legend={true}
          color1={"#00D5D2"}
          color2={"#FC5A41"}
          color3={"#F9E844"}
        />
      </div>

      <HighestAmountDetails />

      <AssignedDetailers />

      <BookingActivity/>
    </div>
  );
}

export default FranchiseInfoCard;
