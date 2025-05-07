import React, { useState, useRef, useEffect } from "react";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import ArrowDown from "../../../../assets/svgs/arrow-down.svg";
import CheckIcon from "../../../../assets/svgs/check.svg";

import closeCircle from "../../../../assets/svgs/close-circle.svg";
import "../CustomerFranchise.css";
import { ReactSVG } from "react-svg";

export const AvailabilityCard: React.FC = () => {
  return (
    <div className="border-[1px] border-[#e6e6e6] p-[26px] rounded-2xl mb-5  ">
      <div className="flex justify-between items-center mb-[20px]">
        <h4 className="text-black">Availability</h4>
      </div>

      {/* <div className="flex justify-between items-center gap-4 mb-2 ">
        <div className="flex gap-[12px]">
          <div className="checkbox-wrapper-33">
            <label className="checkbox">
              <input
                className="checkbox__trigger visuallyhidden"
                type="checkbox"
              />
              <span className="checkbox__symbol">
                <ReactSVG className="icon-checkbox" src={CheckIcon} />
              </span>
            </label>
          </div>
          <span className="w-20">Monday</span>
        </div>

        <div className="flex">
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 text-sm rounded-l-[8px]
 focus:ring-blue-500  focus:border-blue-500 block w-full p-2.5 dark:bg-[#F5F5F5] dark:placeholder-gray-400  dark:focus:ring-blue-500 text-black "
            placeholder="John"
            required
            readOnly
            value={"10:00"}
            onClick={handleTimeManager}
          />
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 text-sm border-l border-[#1519231A] rounded-r-[8px]
 focus:ring-blue-500  focus:border-blue-500 block w-full p-2.5 dark:bg-[#F5F5F5] dark:placeholder-gray-400  dark:focus:ring-blue-500 text-black "
            required
            readOnly
            value={"PM"}
          />

          <ReactSVG
            className="relative top-[10px] right-[30px] h-[16px] w-[16px]"
            src={ArrowDown}
          />
        </div>

        <span>to</span>

        <div className="flex">
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 text-sm rounded-l-[8px]
 focus:ring-blue-500  focus:border-blue-500 block w-full p-2.5 dark:bg-[#F5F5F5] dark:placeholder-gray-400  dark:focus:ring-blue-500 text-black "
            placeholder="John"
            required
            readOnly
            value={"10:00"}
          />
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 text-sm border-l border-[#1519231A] rounded-r-[8px]
 focus:ring-blue-500  focus:border-blue-500 block w-full p-2.5 dark:bg-[#F5F5F5] dark:placeholder-gray-400  dark:focus:ring-blue-500 text-black "
            required
            readOnly
            value={"PM"}
          />

          <ReactSVG
            className="relative top-[10px] right-[30px] h-[16px] w-[16px]"
            src={ArrowDown}
          />
        </div>

        <div>
          <ReactSVG src={closeCircle} />
        </div>
      </div> */}

      <AvailabilityTime dayName={"Monday"} />
      <AvailabilityTime dayName={"Tuesday"} />
      <AvailabilityTime dayName={"Wednesday"} />
      <AvailabilityTime dayName={"Thursday"} />
      <AvailabilityTime dayName={"Friday"} />
      <AvailabilityTime dayName={"Saturday"} />
      <AvailabilityTime dayName={"Sunday"} />
    </div>
  );
};

export const AvailabilityTime = ({ dayName }) => {
  const handleTimeManager = () => {
    console.log("handleTimeManager");
  };

  return (
    <div className="flex justify-between items-center gap-4 mb-[40px] ">
      <div className="flex gap-[12px]">
        {/* <input type="checkbox" className="mr-0" defaultChecked /> */}
        <div className="checkbox-wrapper-33">
          <label className="checkbox">
            <input
              className="checkbox__trigger visuallyhidden"
              type="checkbox"
            />
            <span className="checkbox__symbol">
              <ReactSVG className="icon-checkbox" src={CheckIcon} />
            </span>
            {/* <p className="checkbox__textwrapper">Checkbox</p> */}
          </label>
        </div>
        <span className="w-20">{dayName}</span>
      </div>

      <div className="flex">
        <input
          type="text"
          id="first_name"
          className="bg-gray-50 text-sm rounded-l-[8px]
focus:ring-blue-500  focus:border-blue-500 block w-full p-2.5 dark:bg-[#F5F5F5] dark:placeholder-gray-400  dark:focus:ring-blue-500 text-black "
          placeholder="John"
          required
          readOnly
          value={"10:00"}
          onClick={handleTimeManager}
        />
        <input
          type="text"
          id="first_name"
          className="bg-gray-50 text-sm border-l border-[#1519231A] rounded-r-[8px]
focus:ring-blue-500  focus:border-blue-500 block w-full p-2.5 dark:bg-[#F5F5F5] dark:placeholder-gray-400  dark:focus:ring-blue-500 text-black "
          required
          readOnly
          value={"PM"}
        />

        <ReactSVG
          className="relative top-[10px] right-[30px] h-[16px] w-[16px]"
          src={ArrowDown}
        />
      </div>

      <span>to</span>

      <div className="flex">
        <input
          type="text"
          id="first_name"
          className="bg-gray-50 text-sm rounded-l-[8px]
focus:ring-blue-500  focus:border-blue-500 block w-full p-2.5 dark:bg-[#F5F5F5] dark:placeholder-gray-400  dark:focus:ring-blue-500 text-black "
          placeholder="John"
          required
          readOnly
          value={"10:00"}
        />
        <input
          type="text"
          id="first_name"
          className="bg-gray-50 text-sm border-l border-[#1519231A] rounded-r-[8px]
focus:ring-blue-500  focus:border-blue-500 block w-full p-2.5 dark:bg-[#F5F5F5] dark:placeholder-gray-400  dark:focus:ring-blue-500 text-black "
          required
          readOnly
          value={"PM"}
        />

        <ReactSVG
          className="relative top-[10px] right-[30px] h-[16px] w-[16px]"
          src={ArrowDown}
        />
      </div>

      <div>
        <ReactSVG src={closeCircle} />
      </div>
    </div>
  );
};

// export default AvailabilityCard;
