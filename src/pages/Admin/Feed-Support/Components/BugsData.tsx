import ActionDropdown from "@components/ActionDropdown";
import React, { useState } from "react";

function BugsData() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const columns = [
    {
      name: "User",
      selector: (row) => row.first_name,
      minWidth: "230px",
      cell: (row) => (
        <div className="flex gap-2 w-[190px]">
          <div className="w-[40px] h-[40px] flex items-center justify-center border border-[#25252526] rounded-full">
            <img
              // src={Logo}
              // alt={row.detailer.name}
              className="w-5 h-5 rounded-full"
            />
          </div>
          <div className="">
            <div
              className="text-sm cursor-pointer"
              // onClick={() => setShowSubTask({ setShowSubTask })}
              // onClick={() => {
              //   setShowSubTask(true);
              //   setShowEditId(row?.id);
              // }}
            >
              {/* {row.franchise} */}
              Santa Clause
            </div>
            <div className="text-xs text-gray-400 flex gap-1 mt-1">
              {/* <ReactSVG src={LocationIcon} className="w-[14px] h-[14px]" /> 9272 */}
              <span>user@gmail.com</span>
            </div>
          </div>
        </div>
      ),
    },

    {
      name: "Category",
      minWidth: "150px",
      selector: (row) => row.category,
    },

    {
      name: "Issue",
      minWidth: "50px",
      selector: (row) => row.issue,
    },

    {
      name: "Incident",
      minWidth: "100px",
      selector: (row) => row.service,
      cell: (row) => <span>Car Accident</span>,
    },

    {
      name: "Action",
      selector: (row) => row.action,
      minWidth: "10px",
      cell: (row) => (
        <div>
          <span
            onClick={() => {
              setOpenDropdown(openDropdown === row.id ? null : row.id);
            }}
            className="cursor-pointer bg-red-500"
          >
            {/* <ReactSVG src={DotsIcon} /> */}
          </span>
          <div>
            <ActionDropdown
              setOpenDropdown={setOpenDropdown}
              openDropdown={openDropdown}
              rowId={row.id}
              viewOnly={true}
              // setShowEditModal={setShowEditModal}
              // setShowEditId={setShowEditId}
              // showEditId={showEditId}
              // handleDelete={deleteFrenchise}
            />
          </div>
        </div>
      ),
    },
  ];

  return columns;
}

export default BugsData;
