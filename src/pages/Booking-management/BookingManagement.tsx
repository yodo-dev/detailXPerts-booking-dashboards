import MainLayout from "@layouts/MainLayout";
import React, { useEffect, useState } from "react";
import CommonInput from "@components/inputs/CommonInput";
import Table from "@components/Table/Table";
import { table } from "console";
import DataTable from "react-data-table-component";
import { customStyles } from "@components/CustomStylesTable";
import { apiGet } from "../../Auth/Auth";
import { Link } from "react-router-dom";
import Logo from "../../assets/svgs/logo1.svg";
import { ReactSVG } from "react-svg";
import LocationIcon from "../../assets/svgs/location.svg";
import Chevron from "../../assets/svgs/chevron.svg";
import { ChevronDown } from "lucide-react";
import SkeltonLoader from "@components/SkeltonLoader";
const BookingManagement: React.FC = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);

  const token = localStorage.getItem("token");

  const columns = [
    {
      name: "ID",
      maxWidth: "100px !important",
      selector: (row) => row.id,
      cell: (row) => <span>101</span>,
    },

    {
      name: "Franchise",
      selector: (row) => row.franchise,
      minWidth: "230px",
      cell: (row) => (
        <div
          // onClick={() => setShowSubTask(true)}
          className="flex gap-2 w-[190px]"
        >
          <div className="w-[40px] h-[40px] flex items-center justify-center border border-[#25252526] rounded-full">
            <img
              src={Logo}
              // alt={row.detailer.name}
              className="w-5 h-5 rounded-full"
            />
          </div>
          <div className="">
            <div className="text-sm cursor-pointer">
              {/* {row.franchise} */}
              Ben Ten
            </div>
            <div className="text-xs text-gray-400 flex gap-1 mt-1">
              <ReactSVG src={LocationIcon} className="w-[14px] h-[14px]" /> 9272
              Westheimer...
            </div>
          </div>
        </div>
      ),
    },

    {
      name: "Detailer",
      selector: (row) => row.franchise,
      minWidth: "230px",
      cell: (row) => (
        <div
          // onClick={() => setShowSubTask(true)}
          className="flex gap-2 w-[190px]"
        >
          <div className="w-[40px] h-[40px] flex items-center justify-center border border-[#25252526] rounded-full">
            <img
              src={Logo}
              // alt={row.detailer.name}
              className="w-5 h-5 rounded-full"
            />
          </div>
          <div className="">
            <div className="text-sm cursor-pointer">
              {/* {row.franchise} */}
              Ben Ten
            </div>
            <div className="text-xs text-gray-400 flex gap-1 mt-1">
              <ReactSVG src={LocationIcon} className="w-[14px] h-[14px]" /> 9272
              Westheimer...
            </div>
          </div>
        </div>
      ),
    },

    {
      name: "Customer",
      selector: (row) => row.franchise,
      minWidth: "230px",
      cell: (row) => (
        <div
          // onClick={() => setShowSubTask(true)}
          className="flex gap-2 w-[190px]"
        >
          <div className="w-[40px] h-[40px] flex items-center justify-center border border-[#25252526] rounded-full">
            <img
              src={Logo}
              // alt={row.detailer.name}
              className="w-5 h-5 rounded-full"
            />
          </div>
          <div className="">
            <div className="text-sm cursor-pointer">
              {/* {row.franchise} */}
              Ben Ten
            </div>
            <div className="text-xs text-gray-400 flex gap-1 mt-0">
              <span>hello@abc.com</span>
            </div>
          </div>
        </div>
      ),
    },

    {
      name: "Date",
      minWidth: "120px",
      selector: (row) => row.date,
      cell: (row) => <span>04-05-2025</span>,
    },

    {
      name: "Service",
      minWidth: "100px",
      selector: (row) => row.service,
      cell: (row) => <span>Car Wash</span>,
    },

    {
      name: "Vehicle",
      minWidth: "100px",
      selector: (row) => row.service,
      cell: (row) => <span>BMW I8</span>,
    },

    {
      name: "Earning",
      minWidth: "100px",
      selector: (row) => row.service,
      cell: (row) => <span>$19.22</span>,
    },

    {
      name: "Status",
      selector: (row) => row.status,
      minWidth: "130px",
      cell: (row) => (
        // <span
        //   className={`px-2 py-1 rounded-[36px] text-[12px] font-bold ${
        //     row.status === "ACTIVE"
        //       ? "text-[#067647] bg-[#DFFCEB]"
        //       : "text-[#B00020] bg-[#FFD8D8]"
        //   }`}
        // >
        //   {row.status === "ACTIVE" ? "Online" : "Offline"}
        // </span>
        <span
          className={`text-xs font-medium me-2 px-2.5 py-1 rounded-full ${
            row.status === "Completed"
              ? "bg-[#0676471A] text-[#067647] border border-[#067647] dark:bg-[#E7F2ED] dark:text-[#067647]" // Green for Completed
              : row.status === "PENDING"
              ? "bg-[#FFA5001A] text-[#FFAF3F] border border-[#FFAF3F] dark:bg-[#F9F5F0] dark:text-[#FFAF3F]" // Orange for In Progress
              : row.status === "Canceled"
              ? "bg-[#FEE4E2] text-[#F04438] border border-[#F04438] dark:bg-[#FEEDEC] dark:text-[#F04438]" // Red for Canceled
              : "bg-[#F1F3FB] text-gray-600"
          }`}
        >
          {row.status}
        </span>
      ),
    },

    // {
    //   name: "Action",
    //   selector: (row) => row.action,
    //   minWidth: "120px",
    //   cell: (row) => (
    //     <div className="relative">
    //       <span
    //         onClick={() => {
    //           setOpenDropdown(openDropdown === row.id ? null : row.id);
    //           setIsDropdownOpen(!isDropdownOpen);
    //         }}
    //         className="cursor-pointer"
    //       >
    //         <ReactSVG src={Dots} />
    //       </span>

    //       {openDropdown === row.id && (
    //         <div
    //           ref={dropdownRef}
    //           className="absolute top-8 right-0 z-100 w-80 rounded-md bg-white shadow-lg border border-gray-200"
    //         >
    //           <div className="p-3">
    //             <h3 className="text-left font-medium text-[12px] text-black">
    //               Actions
    //             </h3>
    //           </div>
    //           <div className="flex flex-col justify-between p-2 gap-[5px]">
    //             <button
    //               onClick={() => {
    //                 setEditModal(true);
    //                 setEditId(row.id);
    //               }}
    //               className={`group cursor-pointer text-sm px-3 py-2 flex items-center gap-2 rounded-md hover:bg-gray-100 hover:text-white hover:bg-[linear-gradient(259.13deg,_#1D61E7_0%,_#002D85_100%)]`}
    //             >
    //               <ReactSVG
    //                 src={BlackEdit}
    //                 className="block group-hover:hidden"
    //               />
    //               <ReactSVG
    //                 src={whiteEdit}
    //                 className="hidden group-hover:block"
    //               />
    //               Edit
    //             </button>

    //             <button
    //               onClick={() => handleDelete(row.id)}
    //               className=" group cursor-pointer text-sm px-3 py-2  flex items-center gap-2 rounded-md hover:text-white hover:bg-[linear-gradient(259.13deg,_#1D61E7_0%,_#002D85_100%)]"
    //             >
    //               <div className="relative ">
    //                 <ReactSVG
    //                   src={TrashIcon}
    //                   className="block group-hover:hidden"
    //                 />
    //                 <ReactSVG
    //                   src={WhiteBin}
    //                   className="hidden group-hover:block"
    //                 />
    //               </div>
    //               Delete
    //             </button>
    //           </div>
    //         </div>
    //       )}
    //     </div>
    //   ),
    // },
  ];

  const getBookings = async () => {
    // setLoading(true);
    try {
      const url = `${import.meta.env.VITE_APP_API_URL}v1/booking`;

      const params = {};
      const response = await apiGet(url, params, token);
      if (response.success) {
        setLoading(false);
        setBookings(response.payload.records);
      }
    } catch (error) {
      setLoading(false);
      console.log("Error :", error);
    }
  };


  useEffect(() => {
    getBookings();
  }, []);

  const tableData = [
    { key: "id", label: "ID" },
    { key: "franchise", label: "Franchise" },
    { key: "detailer", label: "Detailer" },
    { key: "customer", label: "Customer" },
    { key: "date", label: "Date" },
    { key: "service", label: "Service" },
    { key: "vehicle", label: "Vehicle" },
    { key: "earning", label: "Earning" },
    { key: "status", label: "Status" },
  ];

  const customLoader = (
    <div className="p-4 flex w-[100%]  justify-center bg-[#F8F9FA] ">
      {[...Array(1)].map((_, i) => (
        <div key={i} className="mb-3 ">
          <SkeltonLoader columns={[100, 100, 100, 100, 100, 100, 100]} />
        </div>
      ))}
    </div>
  );

  return (
    <MainLayout>
      <div className="default_container p-4 pt-0 overflow-x-auto">
        <div className="flex lg:items-center md:flex-row flex-col justify-between mb-6 ">
          <h2 className="md:mb-0 mb-7">Bookings Management</h2>
          <div className="md:w-[366px]">
            <CommonInput placeholder="Search" showImg={true} />
          </div>
        </div>

        <DataTable
          columns={columns}
          customStyles={customStyles}
          data={bookings}
          // sortIcon={<ReactSVG src={Chevron}/>}
          // sortIcon={<ChevronDown className="ml-1 text-gray-500" />}
          // defaultSortFieldId={1}
          // defaultSortAsc={true}

          progressPending={loading}
          progressComponent={customLoader}
        />

        {/* <Table
          Bookingfranchise={true}
          // AdminBookingfranchise={true}
          detailer={true}
          AdminDet2={true}
          customer={true}
          dateTab={true}
          serviceTh={true}
          vehicleTh={true}
          earningTh={true}
          statusTh={true}
          tableData={tableData}
          action={false}
        /> */}
      </div>
    </MainLayout>
  );
};

export default BookingManagement;
