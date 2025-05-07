import React from "react";
import Chevron from "../../../assets/svgs/chevron.svg";
import { ReactSVG } from "react-svg";
function Table({ th }) {
  return (
    <table className="w-full text-sm text-left border-separate border-spacing-y-2 table rounded-t-[12px]">
      <thead className="bg-[#F1F3FB] text-xs">
        <tr>
          {/* <th className="px-3 py-4 font-normal">
            <span className="flex gap-3 text-[12px] font-normal">
              Detailers <ReactSVG src={Chevron} />
            </span>
          </th>
          <th className="px-3 py-4 font-normal">
            <span className="flex gap-3 text-[12px] font-normal">
              Job <ReactSVG src={Chevron} />
            </span>
          </th> */}

          {th.map((label) => (
            <th className="px-3 py-4 font-normal">
              <span className="flex gap-3 text-[12px] font-normal">
                {label} <ReactSVG src={Chevron} />
              </span>
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        <tr className="bg-gray-50 rounded-md">
          <td className="px-3 py-2">
            <p className="font-medium text-[12px]">John Wick</p>
            <p className="text-[#4D5361] font-normal text-[12px]">
              john@gmail.com
            </p>
          </td>

          <td className="px-3 py-2">20</td>

          <td className="px-3 py-2">
            <span className="text-[#067647] font-medium">Active</span>
          </td>
          <td className="px-3 py-2 relative"></td>
        </tr>

        <tr className="bg-gray-50 rounded-md">
          <td className="px-3 py-2">
            <p className="font-medium text-[12px]">John Wick</p>
            <p className="text-[#4D5361] font-normal text-[12px]">
              john@gmail.com
            </p>
          </td>

          <td className="px-3 py-2">20</td>

          <td className="px-3 py-2">
            <span className="text-[#067647] font-medium">Active</span>
          </td>
          <td className="px-3 py-2 relative"></td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
