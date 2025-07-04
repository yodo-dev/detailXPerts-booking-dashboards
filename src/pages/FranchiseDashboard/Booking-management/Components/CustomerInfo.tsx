import React from "react";
// import arrowLeft from "@assets/svgs/ArrowLeft.svg";
import { ReactSVG } from "react-svg";
import youngWomen from "@assets/images/youngWomen.png";
import callIcon from "@assets/svgs/call.svg";
import messageGreen from "@assets/svgs/message-green.svg";
import civic1 from "@assets/svgs/civic1.svg";
import civic2 from "@assets/svgs/civic2.svg";
import civic3 from "@assets/svgs/civic3.svg";
import civic4 from "@assets/svgs/civic4.svg";
const CustomerInfo: React.FC = () => {
  return (
    <div className="col-span-1">
      <h3 className="font-uber-move-bold !text-[18px] mb-[20px]">
        Customer Information
      </h3>
      <div className=" flex shadow-sm flex-wrap items-center justify-between mb-[20px] pt-[31px] ps-[20px] pe-[20px] rounded-[12px] pb-[31px]">
        <div className="flex items-center flex gap-[11px]">
          <img
            className="w-[47px] h-[47px] object-cover"
            src={youngWomen}
            alt=""
          />
          <div className="flex items-start justify-center flex-col">
            <p className="text-[14px]">Darrell Steward</p>
            <p className="text-[14px] text-[#484A58]">Mariene, LTD</p>
          </div>
        </div>
        <div className="flex gap-[20px]">
          <ReactSVG
            src={callIcon}
            className="bg-[#F7F5FF] p-[7px] rounded-[10px] cursor-pointer"
          />
          <ReactSVG
            src={messageGreen}
            className="bg-[#F7F5FF] p-[7px] rounded-[10px] cursor-pointer"
          />
        </div>
      </div>

      <div className="shadow-sm  mb-[0px]  pt-[20px] ps-[20px] pe-[20px] rounded-[12px] pb-[31px]">
        <h3 className="font-uber-move-bold !text-[18px] mb-[50px]">
          Service Information
        </h3>
        <div className="flex flex-col gap-[20px] mb-[50px]">
          <div className="flex justify-between">
            <p>Location:</p>
            <p className="text-end">47 W 13th St, New York</p>
          </div>
          <div className="flex justify-between">
            <p>Date:</p>
            <p className="text-end">14 April 2025</p>
          </div>
          <div className="flex justify-between">
            <p>Time:</p>
            <p className="text-end">02:00 PM</p>
          </div>
          <div className="flex justify-between">
            <p>Vehicle:</p>
            <p className="text-end">Honda Civic 2022</p>
          </div>
        </div>

        <h3 className="font-uber-move-bold !text-[18px] mb-[17px]">
          Organic Detailing Package
        </h3>

        <div className="ps-[25px]">
          <ul className="text-[#606060] list-disc">
            <li className="mb-[10px]">Complete interior wipe down</li>
            <li className="mb-[10px]">
              Vacuum all interior areas, including trunk
            </li>
            <li className="mb-[10px]">Clean windows and mirrors (inside)</li>
            <li className="mb-[10px]">
              Steam clean and sanitize interior dash, console, and mats
            </li>
            <li className="mb-[10px]">
              Steam clean and sanitize door panels and jambs
            </li>
            <li className="mb-[10px]">Sanitize air/ventilation system</li>
            <li className="mb-[10px]">
              Apply interior plastic/leather/vinyl conditioner
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;
