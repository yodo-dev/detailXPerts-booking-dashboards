import React from "react";
import greenBorder from "../../assets/svgs/Border.svg";
import redBorder from "../../../assets/svgs/redBorder.svg";
import { ReactSVG } from "react-svg";

const DashboardTable: React.FC = ({ tableHeaders, topTable }) => {
  return (
      <table className="min-w-[900px] rounded-lg border-separate border-spacing-0 mt-[20px] ">
        <thead className=" text-black rounded-t-lg">
          {tableHeaders.map((col) => (
            <th
              key={col.key}
              className={`px-6 py-3 text-sm font-bold text-${col.align} ${
                col.align === "center" ? "pe-0" : ""
              }`}
            >
              <span className={`!${col.customClass}`}>
                {col.label}
                {/* Optional: Add sort icons or interactivity here */}
              </span>
            </th>
          ))}
        </thead>
        <tbody>
          {topTable ? (
            <tr className="text-start border hover:bg-[#f5f8ff] transition-all duration-300 ease-in-out bg-white">
              <td className="px-6 py-5 text-sm !font-medium text-gray-700">
                0
              </td>

              <td className="px-6 py-4 !text-[14px] text-[#252525] text-start font-medium">
                AutoWash
              </td>

              <td className="px-6 py-5 !text-[16px] text-[#252525]">
                <div className="h-[4px] bg-[#CDE7FF] rounded relative ">
                  <div className="h-[100%] w-[30%] bg-[#0095FF] rounded"></div>
                  <span className="absolute top-[-7px] right-[-38px] text-[12px] font-normal">
                    25%
                  </span>
                </div>
              </td>

              <td className="px-6 py-5 !text-[16px]  text-[#252525] text-center pe-0">
                <span className="border !text-center border-[#0095FF] text-[#0095FF] font-normal text-[13px] pt-[2px] pb-[2px] ps-[13px] pe-[13px] rounded-lg ">
                  132
                </span>
              </td>
            </tr>
          ) : (
            <tr className="text-start border-b hover:bg-[#f5f8ff] transition-all duration-300 ease-in-out bg-white">
              <td className="px-6 py-5 text-sm text-[#898989]">
                <span className="flex justify-start items-center gap-3">
                  {" "}
                  12:45 Am <ReactSVG src={redBorder} />
                </span>{" "}
              </td>

              <td className="px-6 py-5 text-sm text-center font-medium flex justify-start">
                Franchise “EcoWash” added...
              </td>
            </tr>
          )}
        </tbody>
      </table>
  );
};

export default DashboardTable;
