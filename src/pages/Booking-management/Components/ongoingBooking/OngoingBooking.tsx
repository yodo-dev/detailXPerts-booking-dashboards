import MainLayout from "@layouts/MainLayout";
import React, { useEffect, useState } from "react";
// import arrowLeft from "@assets/svgs/ArrowLeft.svg";
import { ReactSVG } from "react-svg";
import youngWomen from "@assets/images/youngWomen.png";
import callIcon from "@assets/svgs/call.svg";
import messageGreen from "@assets/svgs/message-green.svg";
import civic1 from "@assets/svgs/civic1.svg";
import civic2 from "@assets/svgs/civic2.svg";
import civic3 from "@assets/svgs/civic3.svg";
import civic4 from "@assets/svgs/civic4.svg";
import DetailerInfo from "./Components/DetailerInfo";
import CustomerInfo from "./Components/CustomerInfo";
import ArrowLeftFull from "@assets/svgs/arrowLeftFull.svg";

const OngoingBooking: React.FC = () => {
  return (
    <MainLayout>
      <div className="md:px-[40px] px-[20px] pt-0">
        <div className="mb-[20px]">
          <h2 className="text-black !text-[20px] flex gap-[14px] cursor-pointer font-uber-move-bold">
            <ReactSVG src={ArrowLeftFull} /> Ongoing Booking
          </h2>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-[20px] border border-[#0000001A] p-[20px] rounded-[12px]">
          <DetailerInfo />

          <CustomerInfo />
        </div>
      </div>
    </MainLayout>
  );
};

export default OngoingBooking;
