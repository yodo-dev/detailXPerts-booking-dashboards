import React from "react";
import { OverviewCardProps } from "../types";

const cardBgColors = ["#FFE2E5", "#FFF4DE", "#DCFCE7", "#F3E8FF"];
const imgBgColors = ["#FA5A7D", "#FF947A", "#3CD856", "#BF83FF"];


const OverviewCard: React.FC<OverviewCardProps> = ({
  img,
  title,
  averageIncrese,
  averageTitle,
  monthlyRevenue,
  totalFranchises,
  totalCustomers,
  totalDetailers,
  index,
}) => {
  const bgColor = cardBgColors[index % cardBgColors.length];
  const imgBgColor = imgBgColors[index % imgBgColors.length];

  const renderMainValue = () => {
    if (monthlyRevenue) return <p className="text-2xl font-bold">{monthlyRevenue}</p>;
    if (totalFranchises) return <p className="text-2xl font-bold">{totalFranchises}</p>;
    if (totalCustomers) return <p className="text-2xl font-bold">{totalCustomers}</p>;
    if (totalDetailers) return <p className="text-2xl font-bold">{totalDetailers}</p>;
    return null;
  };

  return (
    <div
      className="overview_card rounded-2xl max-w-[280px] w-full p-4"
      style={{ backgroundColor: bgColor }}
    >
      <div
        className="w-10 h-10 flex items-center justify-center rounded-full mb-4"
        style={{ backgroundColor: imgBgColor }}
      >
        <img src={img} alt="icon" className="w-5 h-5" />
      </div>

      {renderMainValue()}
      <p className="text-gray-800 mb-3 mt-3 !text-[18px] !font-medium">{title}</p>
      <p className="!text-sm !font-medium mb-2 !text-blue-700">
        <span>{averageIncrese}</span> <span>{averageTitle}</span>
      </p>
    </div>
  );
};

export default OverviewCard;
