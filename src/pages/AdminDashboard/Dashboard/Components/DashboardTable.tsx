import { span } from "framer-motion/client";
import React from "react";
import DataTable, { TableColumn } from "react-data-table-component";

// Sample Data
const tableData = [
  { name: "AutoWash", booking: 132, color: "#0095FF" },
  { name: "AutoWash", booking: 132, color: "#00E096" },
  { name: "AutoWash", booking: 132, color: "#884DFF" },
  { name: "AutoWash", booking: 132, color: "#FF8F0D" },
];

interface RowType {
  name: string;
  booking: number;
  color: string;
}

interface DashboardTableProps {
  topTable?: boolean;
}

const DashboardTable: React.FC<DashboardTableProps> = ({ topTable }) => {
  // Columns for topTable
  const columns: TableColumn<RowType>[] = [
    {
      name: <span className="pl-2 text-[13px] font-bold text-[#252525]">#</span>,
      selector: (_row, index) => String(index + 1).padStart(2, "0"),
      sortable: false,
      width: "80px",
      cell: (row, index) => (
        <span className="text-sm !font-medium text-gray-700 px-2">
          {String(index + 1).padStart(2, "0")}
        </span>
      ),
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      cell: (row) => (
        <span className="!text-[14px] text-[#252525] font-medium">{row.name}</span>
      ),
    },
    {
      name: "Booking",
      selector: (row) => row.booking.toString(),
      sortable: true,
      center: true,
      width: "150px",
      cell: (row) => (
        <span
          className="border font-normal text-[13px] pt-[2px] pb-[2px] px-[13px] mr-3 rounded-lg"
          style={{
            color: row.color,
            borderColor: row.color,
          }}
        >
          {row.booking}
        </span>
      ),
    },
  ];

  // Custom styles to match your UI
const customStyles = {
  table: {
    style: {
    },
  },
  head: {
    style: {
      borderBottom: "1px solid #fafcfd",
    },
  },
  headRow: {
    style: {
      backgroundColor: "transparent",
      borderBottom: "1px solid #fafcfd",
    },
  },
  headCells: {
    style: {
      fontWeight: "bold",
      fontSize: "14px",
      color: "#252525",
      padding: "16px",
      borderBottom: "1px solid #fafcfd",
    },
  },
  rows: {
    style: {
      backgroundColor: "#fff",
      borderBottom: "1px solid #fafcfd !important",
    },
  },
  cells: {
    style: {
      padding: "20px 16px",
    },
  },
};



  return (
    <div className="mt-[20px] rounded-lg overflow-hidden">
      {topTable ? (
        <DataTable
          columns={columns}
          data={tableData}
          customStyles={customStyles}
          noHeader
          highlightOnHover
        />
      ) : (
        <div className="text-center text-[#888] py-10">No data</div>
      )}
    </div>
  );
};

export default DashboardTable;
