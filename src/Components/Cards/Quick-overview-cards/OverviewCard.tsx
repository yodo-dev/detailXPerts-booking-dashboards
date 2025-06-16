import React from "react";
import { OverviewCardProps } from "../types";
import graphUp from "@assets/svgs/trend-up-01.svg";

const cardBgColors = ["#FFE2E5", "#FFF4DE", "#DCFCE7", "#F3E8FF"];
const imgBgColors = ["#FA5A7D", "#FF947A", "#3CD856", "#BF83FF"];

const OverviewCard: React.FC<OverviewCardProps> = ({
  img,
  revenue,
  title,
  averageIncrese,
  monthlyRevenue,
  totalFranchises,
  totalCustomers,
  totalDetailers,
  renderMainValueNumber,
  index,
}) => {
  const bgColor = cardBgColors[index % cardBgColors.length];
  const imgBgColor = imgBgColors[index % imgBgColors.length];
  

  const renderMainValue = () => {
    if (monthlyRevenue)
      return <p className="text-2xl font-bold">{monthlyRevenue}</p>;
    if (totalFranchises)
      return <p className="text-2xl font-bold">{totalFranchises}</p>;
    if (totalCustomers)
      return <p className="text-2xl font-bold">{totalCustomers}</p>;
    if (totalDetailers)
      return <p className="text-2xl font-bold">{totalDetailers}</p>;
    return null;
  };

  return (
    <div className="overview_card rounded-2xl border border-[#2525250D] p-[20px] cursor-pointer">
      <div className="w-10 h-10 flex items-center justify-center rounded-full mb-4">
        <img src={img} alt="icon" className="w-[44px] h-[44px]" />
      </div>

      <p className="text-gray-800  mt-3 !text-[18px] !font-semibold">{title}</p>
      <div className="flex mb-1 gap-2">
        {renderMainValue()}
        <p className="text-[#067647] mt-3 flex gap-1 text-[12px] font-medium ">
          <img src={graphUp} alt="" className="w-[16px] h-[16px] " />{" "}
          {renderMainValueNumber}
        </p>
      </div>
      <p className="!text-sm !font-normal !text-[#252525]">
        <span>{averageIncrese}</span>
      </p>
    </div>
  );
};

export default OverviewCard;
