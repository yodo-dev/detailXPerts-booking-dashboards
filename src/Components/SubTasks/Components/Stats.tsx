import React from "react";

const Stats: React.FC = ({ imgSrc }) => {
  return (
    <div className="p-4 bg-white rounded-[12px] border border-[#929292]">
      <p className=" font-medium text-[16px] mb-1 text-start">Total Bookings</p>
      <div className="flex ">
        <p className="text-[24px] font-semibold text-start">1,980</p>
        {imgSrc ? <img src={imgSrc} alt="" className="ms-2" /> : ""}
      </div>
      <p className="mt-1 font-medium text-[#003CA6] text-start text-[12px] ">
        All time
      </p>
    </div>
  );
};

export default Stats;
