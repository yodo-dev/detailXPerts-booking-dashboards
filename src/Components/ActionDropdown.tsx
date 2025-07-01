import React, { useEffect, useRef } from "react";
import { ReactSVG } from "react-svg";
import TrashIcon from "@assets/svgs/trash.svg";
import EditIcon from "@assets/svgs/edit-2.svg";
import Eye from "@assets/svgs/eye.svg";
import blockUser from "@assets/svgs/profile-delete.svg";

import { FileEdit } from "lucide-react";
import { Link } from "react-router-dom";
import handleClickOutside from "./handleClickOutside";

function ActionDropdown({
  setOpenDropdown,
  openDropdown,
  rowId,
  setShowEditModal,
  showEditId,
  setShowEditId,
  handleDelete,
  viewOnly,
  handleViewModal,
  handleEdit,
  removeEdit,
}) {


  const dropdownRef = useRef(null);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       setOpenDropdown(null);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [setOpenDropdown]);

  handleClickOutside(dropdownRef, () => setOpenDropdown(false));

  return (
    <div className="relative ">
      {openDropdown === rowId && (
        <div
          ref={dropdownRef}
          className="absolute top-[-70px] right-5 z-100 w-30 rounded-md bg-white shadow-lg border border-gray-200"
        >
          <div className="flex flex-col justify-between p-2 ps-0 gap-[5px]">
            {/* <button
              onClick={handleViewModal}
              className="cursor-pointer flex items-center text-sm text-gray-700 px-4 py-2 hover:bg-gray-100 w-full"
            >
              {" "}
              <ReactSVG src={Eye} className="mr-2" /> View 
            </button> */}

            {viewOnly ? (
              ""
            ) : (
              <>
                {removeEdit && (
                  <button
                    onClick={(e) => {
                      setOpenDropdown(false);
                      handleEdit(rowId);
                    }}
                    className={`cursor-pointer flex items-center text-sm text-gray-700 px-4 py-2 hover:bg-gray-100 w-full`}
                  >
                    <ReactSVG src={EditIcon} className="mr-2" /> Edit
                  </button>
                )}

                {/* <button className="cursor-pointer flex items-center text-sm text-gray-700 px-4 py-2 hover:bg-gray-100 w-full">
                  <ReactSVG src={blockUser} className="mr-2" /> Block{" "}
                </button> */}

                <button
                  //   onClick={() => handleDelete(row.id)}
                  onClick={() => {
                    handleDelete(rowId);
                    setOpenDropdown(false);
                  }}
                  className=" group cursor-pointer text-sm px-3 py-2  flex items-center gap-2 rounded-md hover:bg-[#e0e0e063]"
                >
                  <div className="relative ">
                    <ReactSVG src={TrashIcon} className="block " />
                    {/* <ReactSVG src={WhiteBin} className="hidden group-hover:block" /> */}
                  </div>
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ActionDropdown;

// {
//   openDropdownIndex === index && (
//     <div className="absolute right-0 mt-2 pt-2 pb-2 w-40 bg-white border border-gray-200 rounded-[12px] shadow-lg z-[999999]">
//       <button className="cursor-pointer flex items-center text-sm text-gray-700 px-4 py-2 hover:bg-gray-100 w-full">
//         <Link to={view} className="flex ">
//           <ReactSVG src={Eye} className="mr-2" /> View
//         </Link>
//       </button>
//       <button
//         className="cursor-pointer flex items-center text-sm text-gray-700 px-4 py-2 hover:bg-gray-100 w-full"
//         onClick={() => {
//           setShowModal(true);
//           setOpenDropdownIndex(false);
//         }}
//       >
//         <ReactSVG src={EditIcon} className="mr-2" /> Edit
//       </button>
//       <button className="cursor-pointer flex items-center text-sm text-gray-700 px-4 py-2 hover:bg-gray-100 w-full">
//         <ReactSVG src={blockUser} className="mr-2" /> Block
//       </button>
//       <button className="cursor-pointer flex items-center text-sm text-red-600 px-4 py-2 hover:bg-red-100 w-full">
//         <ReactSVG src={Trash} className="mr-2" /> Delete
//       </button>
//     </div>
//   );
// }
