import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import Chevron from "../../assets/svgs/chevron.svg";
import LocationIcon from "@assets/svgs/location.svg";
import Dots from "@assets/svgs/dots.svg";
import Eye from "@assets/svgs/eye.svg";
import EditIcon from "@assets/svgs/edit-2.svg";
import Trash from "@assets/svgs/trash.svg";
import blockUser from "@assets/svgs/profile-delete.svg";
import TcikIcon from "@assets/svgs/icon.svg";
import CrossIcon from "@assets/svgs/cross.svg";
import CheckIcon from "@assets/svgs/check.svg";

import { TableProps } from "./types";
import { rows } from "./TableData";
import "./Table.css";
import { Link } from "react-router-dom";

const Table: React.FC<TableProps> = ({
  franchise,
  detailer,
  lastBookingth,
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
  issueTd,
  Bookingfranchise,
  incidentTh,
  idNot,
  view,
  ratingTd,
  permissions,
  pagination = true,
  setShowSubTask,
  Adminfranchise,
  adminDetailer,
  AdminBookingfranchise,
  JobBooking,
  AdminDet2,
  showCheck
  // AdminBookingfranchise,
  // data,
  // th,
}) => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );

  const handleDropdownToggle = (index: number) => {
    setOpenDropdownIndex((prev) => (prev === index ? null : index));
  };

  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="py-4 overflow-x-auto ">
      <div className="w-full overflow-x-auto">
        <table className="w-full text-sm text-left border-separate border-spacing-y-2 table">
          <thead className="bg-[#F1F3FB] text-xs">
            <tr>
              {tableData?.map(({ key, label }) => (
                <th key={key} className="px-3 py-4 font-normal ">
                  <div className="flex">
                    {(label == "ID" && showCheck) && <div className="checkbox-wrapper-33">
                      <label className="checkbox">
                        <input
                          className="checkbox__trigger visuallyhidden"
                          type="checkbox"
                        />
                        <span className="checkbox__symbol">
                          <ReactSVG className="icon-checkbox" src={CheckIcon} />
                        </span>
                        {/* <p className="checkbox__textwrapper">Checkbox</p> */}
                      </label>
                    </div>}
                    <span className="flex gap-3 text-[12px] font-normal">
                      {label} <ReactSVG src={Chevron} />
                    </span>
                  </div>
                </th>
              ))}
            </tr>

            {/* <tr>
              {th &&
                th.map((item, key) => (
                  <th
                    key={key}
                    className={`ps-4 py-3.5 border-b fs-8 font-bold text-uppercase ${
                      item === "Image" ? "w-image-20" : ""
                    } ${item === "Name" ? "w-48" : ""} ${
                      item === "Price" ? "w-28" : ""
                    } ${item === "Email" ? "w-60" : ""} ${
                      item === "Order" ? "w-24" : ""
                    } ${item === "Total" ? "w-24" : ""} ${
                      item === "Customer Name" ? "w-56" : ""
                    }`}
                  >
                    {item}
                  </th>
                ))}
            </tr> */}
          </thead>

          <tbody>
            {/* ORIGINAL */}

            {rows.map((row, index) => (
              <tr key={row.id} className="bg-gray-50 rounded-md ">
                {idNot ? (
                  ""
                ) : (
                  <div className="flex item-center">
                    {showCheck && <div className="ml-3  checkbox-wrapper-33">
                      <label className="checkbox">
                        <input
                          className="checkbox__trigger visuallyhidden"
                          type="checkbox"
                        />
                        <span className="checkbox__symbol">
                          <ReactSVG className="icon-checkbox" src={CheckIcon} />
                        </span>
                        {/* <p className="checkbox__textwrapper">Checkbox</p> */}
                      </label>
                    </div>}
                    <td className="py-[12px] font-medium text-gray-700">
                      {row.id}
                    </td>
                  </div>
                )}

                {/* {Bookingfranchise && (
                  <td className="px-3  py-[12px] text-gray-700">
                    <div className="flex gap-2 w-[190px]">
                      <div className="w-[40px] h-[40px] flex items-center justify-center border border-[#25252526] rounded-full">
                        <img
                          src={row.detailer.avatar}
                          alt={row.detailer.name}
                          className="w-5 h-5 rounded-full"
                        />
                      </div>
                      <div className="">
                        <div className="text-sm cursor-pointer">
                          <Link to={"/customers-franchise"}>
                            {row.franchise}
                          </Link>
                        </div>
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
                )} */}

                {AdminBookingfranchise && (
                  <td className="px-3  py-[12px] text-gray-700">
                    <div
                      onClick={() => setShowSubTask(true)}
                      className="flex gap-2 w-[190px]"
                    >
                      <div className="w-[40px] h-[40px] flex items-center justify-center border border-[#25252526] rounded-full">
                        <img
                          src={row.detailer.avatar}
                          alt={row.detailer.name}
                          className="w-5 h-5 rounded-full"
                        />
                      </div>
                      <div className="">
                        <div className="text-sm cursor-pointer">
                          {/* {row.franchise} */}
                          {/* {row.franchise} */}
                          {row.franchise}
                        </div>
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

                {franchise && (
                  <td className="px-3  py-[12px] text-gray-700">
                    <div className="flex gap-2 w-[190px]">
                      <div
                        onClick={() => setShowSubTask(true)}
                        className="w-[40px] h-[40px] flex items-center justify-center border border-[#25252526] rounded-full"
                      >
                        <img
                          src={row.detailer.avatar}
                          alt={row.detailer.name}
                          className="w-5 h-5 rounded-full"
                        />
                      </div>
                      <div className="flex items-center">
                        <div className="text-sm cursor-pointer">
                          <Link
                            to={"/customers-franchise"}
                            onClick={() => setShowSubTask(true)}
                          >
                            {row.franchise}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </td>
                )}

                {AdminDet2 && (
                  <td className="px-3  py-[12px] text-gray-700">
                    <div className="flex gap-2 w-[190px]">
                      <div
                        onClick={() => setShowSubTask(true)}
                        className="w-[40px] h-[40px] flex items-center justify-center border border-[#25252526] rounded-full"
                      >
                        <img
                          src={row.detailer.avatar}
                          alt={row.detailer.name}
                          className="w-5 h-5 rounded-full"
                        />
                      </div>
                      <div className="flex items-center">
                        <div className="text-sm cursor-pointer">
                          <Link
                            to={"/detailers-profile"}
                            onClick={() => setShowSubTask(true)}
                          >
                            {row.franchise}
                            <div className="text-xs text-gray-400 flex gap-1 mt-1">
                              <ReactSVG
                                src={LocationIcon}
                                className="w-[14px] h-[14px]"
                              />{" "}
                              9272 Westheimer...
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </td>
                )}

                {AdminBookingfranchise && (
                  <td className="px-3  py-[12px] text-gray-700">
                    <div className="flex gap-2 w-[190px]">
                      <div
                        onClick={() => setShowSubTask(true)}
                        className="w-[40px] h-[40px] flex items-center justify-center border border-[#25252526] rounded-full"
                      >
                        <img
                          src={row.detailer.avatar}
                          alt={row.detailer.name}
                          className="w-5 h-5 rounded-full"
                        />
                      </div>
                      <div className="flex items-center">
                        <div className="text-sm cursor-pointer">
                          <Link
                            to={"/customers-franchise"}
                            onClick={() => setShowSubTask(true)}
                          >
                            {row.franchise}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </td>
                )}

                {Adminfranchise && (
                  <td className="px-3  py-[12px] text-gray-700">
                    <div
                      className="flex gap-2 w-[190px]"
                      onClick={() => setShowSubTask(true)}
                    >
                      <div className="w-[40px] h-[40px] flex items-center justify-center border border-[#25252526] rounded-full">
                        <img
                          src={row.detailer.avatar}
                          alt={row.detailer.name}
                          className="w-5 h-5 rounded-full"
                        />
                      </div>
                      <div className="flex items-center">
                        <div className="text-sm cursor-pointer">
                          {row.franchise}
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
                        <div className="text-sm cursor-pointer">
                          <Link to={"/customers-franchise"}>
                            {row.franchise}
                          </Link>
                        </div>
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

                {adminDetailer && (
                  <td className="px-3 py-[12px] text-gray-700">
                    <div
                      className="flex gap-2 w-[190px]"
                      onClick={() => setShowSubTask(true)}
                    >
                      <div className="w-[40px] h-[40px] flex items-center justify-center border border-[#25252526] rounded-full">
                        <img
                          src={row.detailer.avatar}
                          alt={row.detailer.name}
                          className="w-5 h-5 rounded-full"
                        />
                      </div>
                      <div>
                        <div className="text-sm cursor-pointer">
                          {row.franchise}
                        </div>
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
                        <div className="text-sm cursor-pointer">
                          <Link to={"/customers-franchise"}>
                            {row.franchise}
                          </Link>
                        </div>
                        <div className="text-xs text-gray-400 flex gap-1 mt-1">
                          hello@wildflower.bio
                        </div>
                      </div>
                    </div>
                  </td>
                )}

                {user && (
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

                {appHelpfull && (
                  <td className="px-3 py-2">{row.appHelpfull}</td>
                )}
                {recommendapp && (
                  <td className="px-3 py-2">{row.appHelpfull}</td>
                )}
                {howHelpfullApp && (
                  <td className="px-3 py-2">{row.howHelpfullApp}</td>
                )}
                {howHelpfullApp && (
                  <td className="px-3 py-2">{row.howHelpfullApp}</td>
                )}
                {userSuggestion && (
                  <td className="px-3 py-2">{row.userSuggestion}</td>
                )}
                {locationTh && <td className="px-3 py-2">{row.location}</td>}

                {numberDetailsTh && (
                  <td className="px-3 py-2">
                    <div>#{row.numberDetails}</div>
                  </td>
                )}

                {earningTh && (
                  <td className="px-3 py-2">
                    <div>{row.earning}</div>
                  </td>
                )}

                {issueTd && <td className="px-3 py-2">{row.issueTd}</td>}
                {incidentTh && <td className="px-3 py-2">{row.incidentTh}</td>}

                {dateTab && (
                  <td className="px-3 py-2 ">
                    <div className="w-[85px]">{row.date}</div>
                  </td>
                )}

                {invoicethv && <td className="px-3 py-2">{row.invoice}</td>}

                {serviceTh && <td className="px-3 py-2">{row.service}</td>}

                {vehicleTh && <td className="px-3 py-2">{row.vehicle}</td>}

                {joinedTh && <td className="px-3 py-2">{row.joined}</td>}

                {bookingth && <td className="px-3 py-2">{row.booking}</td>}

                {payMethodth && (
                  <td className="px-3 py-2">{row.payMethodth}</td>
                )}
                {payMethodth && <td className="px-3 py-2">{row.payMethod}</td>}

                {invoicethv && <td className="px-3 py-2">{row.invoice}</td>}

                {suggestions && (
                  <td className="px-3 py-2">{row.suggestions}</td>
                )}

                {payMethodth && <td className="px-3 py-2">{row.payMethod}</td>}

                {lastBookingth && (
                  <td className="px-3 py-2">{row.lastBooking}</td>
                )}

                {spendingth && <td className="px-3 py-2">{row.spending}</td>}

                {amountth && <td className="px-3 py-2">{row.amount}</td>}

                {jobCompleteTh && (
                  <td className="px-3 py-2">{row.jobComplete}</td>
                )}

                {ratingTd && (
                  <td className="px-3 py-2">
                    <div>{row.ratingTd}</div>
                  </td>
                )}

                {permissions && (
                  <td className="px-3 py-2">
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer "
                        checked={isActive}
                        onChange={handleToggle}
                      />
                      <div className="relative w-20 h-10 bg-[#1D1B201F] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#ffffff00] rounded-full peer peer-checked:after:translate-x-10 after:content-[''] after:absolute after:top-[5px] after:left-[5px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-8 after:w-8 after:transition-all peer-checked:bg-[#0EA363]">
                        {isActive ? (
                          <>
                            <ReactSVG
                              className="absolute z-9 right-3 top-4 w-[11px] h-[8px] text-black pointer-events-none"
                              src={TcikIcon}
                            />
                            <p className="text-white absolute top-[14px] left-[5px] text-[9px]">
                              Activate
                            </p>
                          </>
                        ) : (
                          <>
                            <ReactSVG
                              className="absolute z-9 left-4 top-4 w-[11px] h-[8px] text-black pointer-events-none"
                              src={CrossIcon}
                            />
                            <p className="text-[#ACA7AC] absolute top-[14px] right-[5px] text-[9px]">
                              Disable
                            </p>
                          </>
                        )}
                      </div>
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {isActive ? "" : ""}
                      </span>
                    </label>
                  </td>
                )}

                {statusTh && (
                  <td className="px-3 py-2">
                    <span
                      className={`text-xs font-medium me-2 px-2.5 py-1 rounded-full ${row.status === "Completed"
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
                          <button className="cursor-pointer flex items-center text-sm text-gray-700 px-4 py-2 hover:bg-gray-100 w-full">
                            <Link to={view} className="flex ">
                              <ReactSVG src={Eye} className="mr-2" /> View
                            </Link>
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

            {/* ORIGINAL */}

            {/* 
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-b hover:bg-gray-50 transition-all"
              >
                {th.map((key, colIndex) => (
                  // ${key === "Status" && row[key] === "COMPLETED" ? "text-success" : ""}
                  <td
                    className={`ps-4 text-sm fs-8  font-medium `}
                    key={colIndex}
                    style={{}}
                  >
                    {key === "Description" && row[key] && row[key] !== "-" ? (
                      <div>
                        {expandedDescriptions[row.id] ? (
                          // Render full HTML description
                          <span
                            dangerouslySetInnerHTML={{
                              __html: row[key],
                            }}
                          />
                        ) : (
                          // Render truncated HTML description
                          <span
                            dangerouslySetInnerHTML={{
                              __html:
                                row[key].slice(0, 100) +
                                (row[key].length > 100 ? "..." : ""),
                            }}
                          />
                        )}
                        {row[key].length > 100 && (
                          <button
                            onClick={() => toggleDescription(row.id)}
                            style={{
                              color: "blue",
                              cursor: "pointer",
                              marginLeft: "5px",
                            }}
                          >
                            {expandedDescriptions[row.id]
                              ? "Show Less"
                              : "Show More"}
                          </button>
                        )}
                      </div>
                    ) : key === "Image" && row[key] && row[key] !== "-" ? (
                      row[key].length > 0 ? (
                        // <img
                        //   src={`https://phpstack-1250693-4992063.cloudwaysapps.com/public/${row[key]}`}
                        //   alt="Image"
                        //   style={{
                        //     width: `100px ${key=="Image" ? "10px" : ""}`,
                        //     height: "70px",
                        //     objectFit: "cover",
                        //     borderRadius: "10px",
                        //   }}
                        // />

                        <img
                          src={`https://phpstack-1250693-4992063.cloudwaysapps.com/public/${row[key]}`}
                          alt="Image"
                          style={{
                            width: "60px",
                            height: "60px",
                            objectFit: "cover",
                            borderRadius: "10px",
                          }}
                        />
                      ) : (
                        <img
                          src={`${API_URL}/public/ `}
                          style={{
                            width: `100px  `,
                            height: "70px",
                            objectFit: "cover",
                            borderRadius: "10px",
                          }}
                          alt="Default Image"
                        />
                      )
                    ) : key === "Price" && row[key] && row[key] !== "-" ? (
                      <span className="font-bold fs-8">${row[key]}</span>
                    ) : key === "Code" && row[key] && row[key] !== "-" ? (
                      <span className="font-medium fs-8">{row[key]}</span>
                    ) : key === "Nurse" && row[key] && row[key] !== "-" ? (
                      <span className="text-capitalize fs-8">{row[key]}</span>
                    ) : key === "Status" && row[key] && row[key] !== "-" ? (
                      <span
                        className={`text-capitalize fs-8 ${
                          row[key] === "COMPLETED"
                            ? "badge bg-success"
                            : row[key] === "PENDING"
                            ? "badge bg-danger"
                            : ""
                        }`}
                      >
                        {row[key]}
                      </span>
                    ) : key === "Answer" && row[key] && row[key] !== "-" ? (
                      <span>
                        {dropdownQuiz === true && (
                          <select
                            id={`status-select-${row.id}`}
                            value={row.Status}
                            onChange={(e) =>
                              handleStatusChange(row.id, e.target.value, row)
                            }
                            className="select-custom border fs-8 form-select rounded w-32 focus:ring-2 focus:ring-purple-500"
                            data-selected={row.Status}
                          >
                            {row.Answer.map((i) => (
                              <option
                                selected={i[1] === true ? "selected" : ""}
                              >
                                {i[0]}
                              </option>
                            ))}
                          </select>
                        )}
                      </span>
                    ) : key === "Others" && row[key] && row[key] !== "-" ? (
                      <span>
                        {dropdownQuiz === true && (
                          <ul>
                            {row.Answer.map((i) => (
                              <li>
                                {" "}
                                <span className="●"></span> {i}
                              </li>
                            ))}
                          </ul>
                        )}
                      </span>
                    ) : (
                      row[key]
                    )}
                  </td>
                ))}
              </tr>
            ))} */}

            {/* {data?.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-b hover:bg-gray-50 transition-all"
              >
                {th?.map((key, colIndex) => (
                  <td className="ps-4 text-sm fs-8 font-medium" key={colIndex}>
                    {row[key] || "-"}
                  </td>
                ))}
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
      {pagination ? (
        <div className="flex md:flex-row flex-col justify-between items-center mt-4 !text-[14px] !font-medium text-[#414651]">
          <p className="md:mb-0 mb-5">Showing 5 of 20 entries</p>
          <div className="space-x-2">
            <button className="px-3 py-1 rounded-md cursor-pointer">
              Prev
            </button>
            <button className="px-3 py-1 bg-[#003CA6] cursor-pointer text-white rounded-md">
              1
            </button>
            <button className="px-3 py-1 cursor-pointer rounded-md">2</button>
            <button className="px-3 py-1 cursor-pointer rounded-md">3</button>
            <button className="px-3 py-1 cursor-pointer rounded-md">4</button>
            <button className="px-3 py-1 cursor-pointer text-[#003CA6] rounded-md">
              Next
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Table;
