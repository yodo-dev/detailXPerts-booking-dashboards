import MainLayout from "@layouts/MainLayout";
import React, { useEffect, useState } from "react";
// import arrowLeft from "@assets/svgs/ArrowLeft.svg";
import { ReactSVG } from "react-svg";

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
