import React from "react";
import DataTable from "react-data-table-component";

const DashboardBookingTable: React.FC = () => {
  const bookings = [
    {
      name: "Jacob Jones",
      date: "10-01-2025",
      price: "$90",
      status: "Ongoing",
      img: "https://i.pravatar.cc/32?img=1",
      role: "Customer",
    },
    {
      name: "Emily Brown",
      date: "12-01-2025",
      price: "$120",
      status: "Completed",
      img: "https://i.pravatar.cc/32?img=2",
      role: "Customer",
    },
    {
      name: "Michael Smith",
      date: "15-01-2025",
      price: "$75",
      status: "Ongoing",
      img: "https://i.pravatar.cc/32?img=3",
      role: "Customer",
    },
    {
      name: "Sarah Wilson",
      date: "18-01-2025",
      price: "$130",
      status: "Completed",
      img: "https://i.pravatar.cc/32?img=4",
      role: "Customer",
    },
    {
      name: "David Johnson",
      date: "20-01-2025",
      price: "$50",
      status: "Ongoing",
      img: "https://i.pravatar.cc/32?img=5",
      role: "Customer",
    },
  ];

  const statusColor = {
    Ongoing:
      "bg-[#e6f1ed] text-[#067647] border border-[1px] border-[#067647] font-medium font-uber-move-medium",
    Completed:
      "bg-[#efebf6] text-[#003CA6] border border-[1px] border-[#003CA6] font-medium font-uber-move-medium",
    Excellent: "bg-green-100 text-green-600",
    Good: "bg-yellow-100 text-yellow-600",
    Poor: "bg-red-100 text-red-600",
  };
  const bookingColumns = [
    {
      name: "Service Details",
      selector: (row) => "Organic Detailing Package",
      sortable: false,
      wrap: true,
      minWidth: "230px",
      cell: (row) => (
        <p className="font-uber-move-medium text-[14px] text-[#4D5361]">
          Organic Detailing Package
        </p>
      ),
    },
    {
      name: "Customer",
      selector: (row) => row.name,
      minWidth: "200px",

      cell: (row) => (
        <div className="flex items-center gap-2">
          <img
            src={row.img}
            className="w-[32px] h-[32px] object-cover rounded-full"
            alt=""
          />
          <div>
            <p className="font-uber-move-medium">{row.name}</p>
            <div className="font-uber-move-medium text-xs text-[#919191] font-medium">
              {row.role}
            </div>
          </div>
        </div>
      ),
      sortable: true,
    },
    {
      name: "Service Date",
      selector: (row) => row.date,
      sortable: true,
      minWidth:"150px",
      cell: (row) => (
        <p className="font-uber-move-normal text-[14px]">{row.date}</p>
      ),
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
      maxWidth: "50px",
      cell: (row) => (
        <p className="font-uber-move-medium text-[#252525] text-[14px]">{row.price}</p>
      ),
    },
    {
      name: "Status",
      selector: (row) => row.status,
      minWidth: "130px",
      cell: (row) => (
        <span
          className={`text-xs w-[115px] text-[#4D5361] h-[32px] flex justify-center items-center rounded-full ${
            statusColor[row.status]
          }`}
        >
          {row.status}
        </span>
      ),
      sortable: true,
    },
  ];
  return (
    <div className="bg-white  rounded-[20px]  shadow p-4 px-5">
      <div className="flex justify-between items-center mb-5">
        <h2 className="!text-[20px] !font-bold font-kumbsans">Booking</h2>
        <a
          href="#"
          className="text-[18px] font-kumbsans font-semibold text-[#252525] cursor-pointer"
        >
          View all
        </a>
      </div>
      <div className="overflow-x-auto rounded-[15px] border-[1px] border-[#E6E7E7]">
        <DataTable
          columns={bookingColumns}
          data={bookings}
          className="custom-table"
          customStyles={{
            headCells: {
              style: {
                backgroundColor: "#F1F3FB",
                fontWeight: "600",
                fontSize: "14px",
                paddingTop: "18px",
                paddingBottom: "18px",
              },
            },
            cells: {
              style: {
                paddingTop: "14px",
                paddingBottom: "14px",
              },
            },
          }}
          highlightOnHover
          responsive
          noHeader
        />
      </div>
    </div>
  );
};

export default DashboardBookingTable;
