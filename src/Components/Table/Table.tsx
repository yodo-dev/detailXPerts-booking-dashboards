import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import Chevron from "../../assets/svgs/chevron.svg";
import LocationIcon from "@assets/svgs/location.svg";
import Dots from "@assets/svgs/dots.svg";
import Eye from "@assets/svgs/eye.svg";
import EditIcon from "@assets/svgs/edit-2.svg";
import Trash from "@assets/svgs/trash.svg";
import blockUser from "@assets/svgs/profile-delete.svg";
import { TableProps } from "./types";
import { rows } from "./TableData";
import "./Table.css";

const Table: React.FC<TableProps> = ({
  franchise,
  detailer,
  customer,
  dateTab,
  serviceTh,
  vehicleTh,
  earningTh,
  statusTh,
  locationTh,
  numberDetailsTh,
  joinedTh,
  jobCompleteTh,
  bookingth,
  lastBookingth,
  spendingth,
  amountth,
  payMethodth,
  invoicethv,
  user,
  category,
  issue,
  incident,
  appHelpfull,
  suggestions,
  recommendapp,
  howHelpfullApp,
  rate,
  userSuggestion,
  tableData,
  action,
  setShowModal,
}) => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(true);

  const handleDropdownToggle = (index: number) => {
    setOpenDropdownIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="py-4 overflow-x-auto ">
      <div className="w-full overflow-x-auto">
        <table className="w-full text-sm text-left border-separate border-spacing-y-2 table">
          <thead className="bg-[#F1F3FB] text-xs">
            <tr>
              {tableData?.map(({ key, label }) => (
                <th key={key} className="px-3 py-4 font-normal">
                  <span className="flex gap-3 text-[12px] font-normal">
                    {label} <ReactSVG src={Chevron} />
                  </span>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => (
              <tr key={row.id} className="bg-gray-50 rounded-md ">
                <td className="px-3 py-[12px] font-medium text-gray-700">
                  {row.id}
                </td>

                {franchise && (
                  <td className="px-3  py-[12px] text-gray-700">
                    <div className="flex gap-2 w-[190px]">
                      <div className="w-[40px] h-[40px] flex items-center justify-center border border-[#25252526] rounded-full">
                        <img
                          src={row.detailer.avatar}
                          alt={row.detailer.name}
                          className="w-5 h-5 rounded-full"
                        />
                      </div>
                      <div>
                        <div className="text-sm">{row.franchise}</div>
                        <div className="text-xs text-gray-400 flex gap-1 mt-1">
                          <ReactSVG
                            src={LocationIcon}
                            className="w-[14px] h-[14px]"
                          />{" "}
                          9272 Westheimer...
                        </div>
                      </div>
                    </div>
                  </td>
                )}

                {detailer && (
                  <td className="px-3 py-[12px] text-gray-700">
                    <div className="flex gap-2 w-[190px]">
                      <div className="w-[40px] h-[40px] flex items-center justify-center border border-[#25252526] rounded-full">
                        <img
                          src={row.detailer.avatar}
                          alt={row.detailer.name}
                          className="w-5 h-5 rounded-full"
                        />
                      </div>
                      <div>
                        <div className="text-sm">{row.franchise}</div>
                        <div className="text-xs text-gray-400 flex gap-1 mt-1">
                          <ReactSVG
                            src={LocationIcon}
                            className="w-[14px] h-[14px]"
                          />{" "}
                          9272 Westheimer...
                        </div>
                      </div>
                    </div>
                  </td>
                )}

                {customer && (
                  <td className="px-3 py-[12px] text-gray-700">
                    <div className="flex gap-2 w-[190px]">
                      <div className="w-[40px] h-[40px]  flex items-center justify-center border border-[#25252526] rounded-full">
                        <img
                          src={row.detailer.avatar}
                          alt={row.detailer.name}
                          className="w-5 h-5 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-sm">{row.franchise}</div>
                        <div className="text-xs text-gray-400 flex gap-1 mt-1">
                          hello@wildflower.bio
                        </div>
                      </div>
                    </div>
                  </td>
                )}

                {dateTab && (
                  <td className="px-3 py-2 ">
                    <div className="w-[85px]">{row.date}</div>
                  </td>
                )}

                {serviceTh && <td className="px-3 py-2">{row.service}</td>}

                {vehicleTh && <td className="px-3 py-2">{row.vehicle}</td>}

                {earningTh && (
                  <td className="px-3 py-2">
                    <div>{row.earning}</div>
                  </td>
                )}

                {joinedTh && <td className="px-3 py-2">{row.joined}</td>}

                {bookingth && <td className="px-3 py-2">{row.booking}</td>}

                {payMethodth && <td className="px-3 py-2">{row.payMethod}</td>}

                {invoicethv && <td className="px-3 py-2">{row.invoice}</td>}

                {suggestions && (
                  <td className="px-3 py-2">{row.suggestions}</td>
                )}

                {lastBookingth && (
                  <td className="px-3 py-2">{row.lastBooking}</td>
                )}

                {spendingth && <td className="px-3 py-2">{row.spending}</td>}

                {amountth && <td className="px-3 py-2">{row.amount}</td>}

                {jobCompleteTh && (
                  <td className="px-3 py-2">{row.jobComplete}</td>
                )}

                {numberDetailsTh && (
                  <td className="px-3 py-2">
                    <div className="w-[150px] md:w-[100px]">
                      {row.numberDetails}
                    </div>
                  </td>
                )}

                {locationTh && <td className="px-3 py-2">{row.location}</td>}

                {statusTh && (
                  <td className="px-3 py-2">
                    <span
                      className={`text-xs font-medium me-2 px-2.5 py-1 rounded-full ${
                        row.status === "Completed"
                          ? "bg-[#0676471A] text-[#067647] border border-[#067647] dark:bg-[#E7F2ED] dark:text-[#067647]" // Green for Completed
                          : row.status === "In Progress"
                          ? "bg-[#FFA5001A] text-[#FFAF3F] border border-[#FFAF3F] dark:bg-[#F9F5F0] dark:text-[#FFAF3F]" // Orange for In Progress
                          : row.status === "Canceled"
                          ? "bg-[#FEE4E2] text-[#F04438] border border-[#F04438] dark:bg-[#FEEDEC] dark:text-[#F04438]" // Red for Canceled
                          : "bg-[#F1F3FB] text-gray-600"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                )}
                {action !== true ? (
                  ""
                ) : (
                  <td className="px-3 py-2 relative">
                    <div className="relative inline-block text-left">
                      <span
                        className="text-center"
                        onClick={() => handleDropdownToggle(index)}
                      >
                        <ReactSVG className="ms-4 cursor-pointer" src={Dots} />
                      </span>

                      {openDropdownIndex === index && (
                        <div className="absolute right-0 mt-2 pt-2 pb-2 w-40 bg-white border border-gray-200 rounded-[12px] shadow-lg z-[999999]">
                          <button
                            onClick={() => {
                              window.location.href = "/detailers-franchise";
                            }}
                            className="cursor-pointer flex items-center text-sm text-gray-700 px-4 py-2 hover:bg-gray-100 w-full"
                          >
                            <ReactSVG src={Eye} className="mr-2" /> View
                          </button>
                          <button
                            className="cursor-pointer flex items-center text-sm text-gray-700 px-4 py-2 hover:bg-gray-100 w-full"
                            onClick={() => {
                              setShowModal(true);
                              setOpenDropdownIndex(false);
                            }}
                          >
                            <ReactSVG src={EditIcon} className="mr-2" /> Edit
                          </button>
                          <button className="cursor-pointer flex items-center text-sm text-gray-700 px-4 py-2 hover:bg-gray-100 w-full">
                            <ReactSVG src={blockUser} className="mr-2" /> Block
                          </button>
                          <button className="cursor-pointer flex items-center text-sm text-red-600 px-4 py-2 hover:bg-red-100 w-full">
                            <ReactSVG src={Trash} className="mr-2" /> Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex md:flex-row flex-col justify-between items-center mt-4 !text-[14px] !font-medium text-[#414651]">
        <p className="md:mb-0 mb-5">Showing 1 to 10 of 200 entries</p>
        <div className="space-x-2">
          <button className="px-3 py-1 rounded-md">Prev</button>
          <button className="px-3 py-1 bg-[#003CA6] text-white rounded-md">
            1
          </button>
          <button className="px-3 py-1  rounded-md">2</button>
          <button className="px-3 py-1  rounded-md">3</button>
          <button className="px-3 py-1  rounded-md">4</button>
          <button className="px-3 py-1 text-[#003CA6] rounded-md">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Table;
