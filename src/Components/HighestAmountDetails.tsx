import React from "react";

function HighestAmountDetails() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 p-6 ps-0 pe-0 bg-white rounded-lg text-black">
      {/* Left Card */}
      <div className="bg-white rounded-xl shadow-sm ps-6 pe-6 pb-[10px] pt-[10px] flex flex-col items-center justify-center w-full lg:w-1/3">
        <h4 className="!text-[14px] !font-medium text-black mb-2 uber-move ">
          Monthly Income
        </h4>

        {/* Circle Progress — Simulated (use a library for real circle) */}
        <div className="relative w-[160px] h-[160px] mb-4">
          <div className="absolute inset-0 rounded-full border-[10px] border-[#07DB9B] border-t-transparent animate-spin-slow"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-[30px] text-black font-bold uber-move ">
              $10K
            </span>

            <span className="text-[10px] text-black uber-move font-normal ">
              Earned This Month
            </span>
          </div>
        </div>
        <div></div>
        <div className="w-full">
          <span className="text-[#4D9BF2] cursor-pointer text-[16px] underline">
            Report
          </span>
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
  );
}

const StatRow = ({ label, value, bold }) => (
  <div className="uber-move flex justify-between items-center ">
    <span className="text-gray-600  !text-normal !text-[#252525] !text-[16px]">
      {label}
    </span>
    <span
      className={`px-4 py-1 bg-[#F6FAFE]  rounded-md ${
        bold ? "font-semibold" : "font-medium"
      } !font-bold text-[22px]`}
    >
      {value}
    </span>
  </div>
);

export default HighestAmountDetails;
