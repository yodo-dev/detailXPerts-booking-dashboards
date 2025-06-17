import React from "react";
// import arrowLeft from "@assets/svgs/ArrowLeft.svg";
import "../onGoingBooking.css";
import "../../../BookingManagement.css";
import { ReactSVG } from "react-svg";
import youngWomen from "@assets/images/youngWomen.png";
import callIcon from "@assets/svgs/call.svg";
import messageGreen from "@assets/svgs/message-green.svg";
import civic1 from "@assets/svgs/civic1.svg";
import civic2 from "@assets/svgs/civic2.svg";
import civic3 from "@assets/svgs/civic3.svg";
import civic4 from "@assets/svgs/civic4.svg";
import tick from "@assets/svgs/tick.svg";
const DetailerInfo: React.FC = () => {
  return (
    <div className="col-span-1">
      <h3 className="font-uber-move-bold !text-[18px] mb-[20px]">
        Detailer Information
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

      <div className="shadow-sm mb-[0px] pt-[20px] ps-[20px] pe-[20px] rounded-[12px] pb-[31px]">
        <h3 className="font-uber-move-bold !text-[18px] mb-[50px]">
          Service Progress
        </h3>
        <div className="flex flex-col gap-[20px]">
          <div className="ps-[20px] box relative">
            {/* <div className="absolute top-0 left-0">
              <ReactSVG className="absolute top-0 left-0" src={tick} />
              <div className="bg-[#47B643] min-h-6 h-fit w-[2px] absolute left-2.5 top-6"></div>
            </div> */}
            <div className="ps-[16px]">
              <p className="font-uber-move-bold text-[18px]">
                Detailer Reached
              </p>
              <p className="text-[16px] text-[#7D7878]">
                Detailer Reached at your selected address.
              </p>
            </div>
          </div>

          <div className="ps-[36px]  box relative">
            <p className="font-uber-move-bold text-[18px] mb-[15px]">
              Photos Before Service
            </p>
            <div className="flex flex-wrap gap-[8px]">
              <img src={civic1} alt="" />
              <img src={civic2} alt="" />
              <img src={civic3} alt="" />
              <img src={civic4} alt="" />
            </div>
          </div>

          <div className="ps-[36px] box relative">
            <p className="font-uber-move-bold text-[18px]">Service Start</p>
            <p className="text-[16px] text-[#7D7878]">
              Detailer Reached at your selected address.
            </p>
          </div>

          <div className="ps-[36px] box relative">
            <p className="font-uber-move-bold text-[18px]">Service End</p>
            <p className="text-[16px] text-[#7D7878]">
              Detailer Reached at your selected address.
            </p>
          </div>

          <div className="ps-[36px] mb-[12px] box relative">
            <p className="font-uber-move-bold text-[18px] mb-[15px]">
              Photos After Service
            </p>
            <div className="flex flex-wrap gap-[8px]">
              <img src={civic1} alt="" />
              <img src={civic2} alt="" />
              <img src={civic3} alt="" />
              <img src={civic4} alt="" />
            </div>
          </div>

          <div className="ps-[36px]">
            <p className="font-uber-move-bold text-[18px]">Payment</p>
            <p className="text-[16px] text-[#7D7878]">Payment is on held</p>
          </div>

          <div className="ps-[36px]">
            <p className="font-uber-move-bold text-[#7D7878] text-[18px]">
              Service Review
            </p>
            <p className="text-[16px] text-[#7D7878]">Review not posted yet.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailerInfo;
