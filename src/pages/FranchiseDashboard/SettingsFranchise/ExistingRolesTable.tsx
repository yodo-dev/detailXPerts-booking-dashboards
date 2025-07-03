import React from "react";
import DataTable from "react-data-table-component";
import { FiMoreVertical } from "react-icons/fi";
import { PrimaryButton } from "@components/Buttons/CommonButtons";
// import chevron from "@assets/svgs/chevron-selector-vertical.svg";

const rolesData = [
  { id: 1, role: "HR", permission: "Have all access" },
  { id: 2, role: "Support Team", permission: "Have all access" },
  { id: 3, role: "Support Team", permission: "View Only" },
];

const columns = [
  {
    name: (
      <span className="pl-2 flex gap-1 items-center text-[#4d5361]">
        Role 
        {/* <img src={chevron} alt="" className="w-[16px] h-[16px] cursor-pointer" /> */}
      </span>
    ),
    selector: (row) => row.role,
    cell: (row) => (
      <span className="text-[#4d5361] text-[14px] font-bold p-2 ubermove">
        {row.role}
      </span>
    ),
  },
  {
    name: <span className="flex gap-1 items-center text-[#4d5361]">Permissions</span>,
    selector: (row) => row.permission,
    cell: (row) => (
      <span className="text-[#4d5361] text-[14px] font-medium ubermove">
        {row.permission}
      </span>
    ),
  },
  {
    name: <span className="pr-4 text-[#4d5361]">Action</span>,
    right: true,
    cell: () => (
      <div className="pr-7">
        <FiMoreVertical className="text-[#4d5361] text-[18px] cursor-pointer" />
      </div>
    ),
  },
];

const customStyles = {
  table: {
    style: {
      border: "none",
      borderRadius: "0px",
      overflow: "hidden",
    },
  },
  headRow: {
    style: {
      backgroundColor: "#F1F3FB",
      fontWeight: 600,
      fontSize: "14px",
      color: "#252525",
      borderBottom: "none",
    },
  },
  rows: {
    style: {
      fontSize: "14px",
      color: "#252525",
      borderBottom: "none !important",
    },
  },
  cells: {
    style: {
      padding: "16px",
      borderBottom: "none", 
    },
  },
};
const ExistingRolesTable = ({setSection}) => {
  return (
    <div className=" mx-auto">
      <h2 className="!text-[20px] !font-bold !text-[#252525] mb-[24px]">
        Existing Roles
      </h2>

      <div className="border border-[#efefef] rounded-[15px] overflow-x-auto">
        <div className=" p-[20px] overflow-hidden">
          <DataTable
            columns={columns}
            data={rolesData}
            customStyles={customStyles}
            noHeader
            pagination={false}
          />
        </div>
      </div>

      <div className="mt-6">
        <PrimaryButton
          btnText="Create a new role"
          btnClass="w-full py-[12px] !rounded-[12px] ubermove bg-[#1B3D96] text-white font-bold text-[16px] hover:bg-[#1b1d96] transition"
          onClick={()=>(setSection(1))}
        />
      </div>
    </div>
  );
};

export default ExistingRolesTable;