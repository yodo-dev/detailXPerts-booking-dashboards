import React from "react";
import { ReactSVG } from "react-svg";
import TrashIcon from "@assets/svgs/trash.svg";

import { FileEdit } from "lucide-react";

function ActionDropdown({
  setOpenDropdown,
  openDropdown,
  rowId,
  setShowEditModal,
  showEditId,
  setShowEditId,
}) {
  return (
    <div className="relative ">
      {openDropdown === rowId && (
        <div
          //   ref={dropdownRef}
          className="absolute top-8 right-0 z-100 w-80 rounded-md bg-white shadow-lg border border-gray-200"
        >
          <div className="p-3">
            <h3 className="text-left font-medium !text-[14px] text-black">
              Actions
            </h3>
          </div>
          <div className="flex flex-col justify-between p-2 gap-[5px]">
            <button
              onClick={(e) => {
                setShowEditModal(true);
                setShowEditId(rowId);
                setOpenDropdown(false)
                // e.stopPropagation(); // Prevents the outside click handler from firing
              }}
              className={`group cursor-pointer text-sm px-3 py-2 flex items-center gap-2 rounded-md hover:bg-[#e0e0e063]`}
            >
              <FileEdit />
              Edit
            </button>

            <button
              //   onClick={() => handleDelete(row.id)}
              className=" group cursor-pointer text-sm px-3 py-2  flex items-center gap-2 rounded-md hover:bg-[#e0e0e063]"
            >
              <div className="relative ">
                <ReactSVG src={TrashIcon} className="block " />
                {/* <ReactSVG src={WhiteBin} className="hidden group-hover:block" /> */}
              </div>
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ActionDropdown;
