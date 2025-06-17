import { PrimaryButton } from "@components/Buttons/CommonButtons";
import CommonInput from "@components/inputs/CommonInput";
import MainLayout from "@layouts/MainLayout";
import DataTable from "react-data-table-component";
import exportIcon from "@assets/svgs/export-icon.svg";
import React, { useRef, useState } from "react";
import OverviewCard from "@components/Cards/Quick-overview-cards/OverviewCard";
import cardImg1 from "@assets/svgs/coverview-card1-img.svg";
import Linechart from "@components/Charts/Linechart";
import Dollar from "@assets/svgs/Frame 2147225855.svg";
import { ReactSVG } from "react-svg";
import girlPic from "../../assets/svgs/girlPic.svg";
import messageIcon from "../../assets/svgs/message-text.svg";
import DashboardTable from "./Components/DashboardTable";
import orderIcon from "@assets/svgs/Order Icon.svg";
import userStart from "@assets/svgs/userStart.svg";
import friendReqs from "@assets/svgs/friendReqs.svg";
import location from "@assets/svgs/location.svg";

const Dashboard: React.FC = () => {
  const [role, setRole] = useState(1);
  const [people, setPeople] = useState(["_", "_", "_", "_", "_"]);
  const [cards, setCards] = useState(["_", "_", "_", "_"]);
  const reviews = [
    {
      name: "Jacob Jones",
      status: "Excellent",
      rating: "4.5",
      img: "https://i.pravatar.cc/32?img=1",
      role: "Customer",
    },
    {
      name: "Emily Brown",
      status: "Good",
      rating: "4.0",
      img: "https://i.pravatar.cc/32?img=2",
      role: "Customer",
    },
    {
      name: "Michael Smith",
      status: "Poor",
      rating: "2.5",
      img: "https://i.pravatar.cc/32?img=3",
      role: "Customer",
    },
    {
      name: "Sarah Wilson",
      status: "Excellent",
      rating: "5.0",
      img: "https://i.pravatar.cc/32?img=4",
      role: "Customer",
    },
    {
      name: "David Johnson",
      status: "Good",
      rating: "3.8",
      img: "https://i.pravatar.cc/32?img=5",
      role: "Customer",
    },
  ];

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

  const bookingColumns = [
    {
      name: "Service Details",
      selector: (row) => "Organic Detailing Package",
      sortable: false,
      wrap: true,
    },
    {
      name: "Customer",
      selector: (row) => row.name,
      cell: (row) => (
        <div className="flex items-center gap-2">
          <img src={row.img} className="w-6 h-6 rounded-full" alt="" />
          <div>
            {row.name}
            <div className="text-xs text-gray-500">{row.role}</div>
          </div>
        </div>
      ),
      sortable: true,
    },
    {
      name: "Service Date",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      cell: (row) => (
        <span
          className={`text-xs px-2 py-1 rounded-full ${
            statusColor[row.status]
          }`}
        >
          {row.status}
        </span>
      ),
      sortable: true,
    },
  ];

  const reviewColumns = [
    {
      name: "Offer Name",
      selector: (row) => row.name,
      cell: (row) => (
        <div className="flex items-center gap-2">
          <img src={row.img} className="w-6 h-6 rounded-full" alt="" />
          {row.name}
        </div>
      ),
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      cell: (row) => (
        <span
          className={`text-xs px-2 py-1 rounded-full ${
            statusColor[row.status]
          }`}
        >
          {row.status}
        </span>
      ),
      sortable: true,
    },
    {
      name: "Rating",
      selector: (row) => row.rating,
      sortable: true,
    },
    {
      name: "Actions",
      cell: () => <span>...</span>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  const statusColor = {
    Ongoing: "bg-green-100 text-green-600",
    Completed: "bg-blue-100 text-blue-600",
    Excellent: "bg-green-100 text-green-600",
    Good: "bg-yellow-100 text-yellow-600",
    Poor: "bg-red-100 text-red-600",
  };

    const servicesData = [
  {
    id: 1,
    detail:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, eveniet.",
  },
  {
    id: 2,
    detail:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, eveniet.",
  },
  {
    id: 3,
    detail:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, eveniet.",
  },
  {
    id: 4,
    detail:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, eveniet.",
  },
  {
    id: 5,
    detail:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, eveniet.",
  },
];

const locationData = [
  {
    id: 1,
    location:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, eveniet.",
  },
  {
    id: 2,
    location:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, eveniet.",
  },
  {
    id: 3,
    location:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, eveniet.",
  },
  {
    id: 4,
    location:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, eveniet.",
  },
  {
    id: 5,
    location:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, eveniet.",
  },
];
const servicesColumns = [
  {
    name: "Sr.",
    selector: (row) => row.id,
    width: "60px",
  },
  {
    name: "Service Details",
    selector: (row) => row.detail,
    wrap: true,
  },
];

const locationColumns = [
  {
    name: "Sr.",
    selector: (row) => row.id,
    width: "60px",
  },
  {
    name: "Location",
    cell: (row) => (
      <div className="flex items-start gap-3">
        <img src={location} alt="" className="pt-1" width="14px" />
        {row.location}
      </div>
    ),
    grow: 2,
    wrap: true,
  },
];

const customStyles = {
  headRow: {
    style: {
      backgroundColor: "#F1F3FB",
      color: "#252525",
      fontSize: "12px",
      fontWeight: 500,
      borderBottom: "1px solid #E6E7E7",
    },
  },
  headCells: {
    style: {
      paddingLeft: "10px",
      paddingRight: "10px",
    },
  },
  rows: {
    style: {
      fontSize: "14px",
      color: "#4D5361",
      fontWeight: 500,
      paddingTop: "12px",
      paddingBottom: "12px",
      borderBottom: "1px solid #f0f0f0",
    },
  },
  cells: {
    style: {
      paddingLeft: "10px",
      paddingRight: "10px",
    },
  },
};

  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
  const username = userInfo?.user?.first_name || "";

  return (
    <MainLayout>
      <div className="default_container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-6">
          <div className="overview_section col-span-1 lg:col-span-2 sm:col-span-1  p-0">
            <div className="w-full lg:flex-row flex-col mb-[20px] rounded-[10px] flex lg:items-center bg-white py-[23px] px-[20px] justify-between md:w-full">
              <div className="mb-8 lg:mb-0">
                <h2 className="mb-4 !text-[24px] !font-medium md:!text-[32px]">
                  Welcome back. {username}! 👋
                </h2>
                <p className="text-[14px] md:text-[18px] leading-3 font-normal">
                  Your AI insights of expense tracking and reports
                </p>
              </div>

              <div className="md:w-[366px]">
                <CommonInput
                  placeholder="Search"
                  inputClass="border-[#E1E3F6] border-[1px]"
                  showImg={true}
                />
              </div>
            </div>
            <div className="flex items-start  justify-between">
              <div className="mb-[20px]">
                <h3 className="!text-[25px]">Summary Overview</h3>
              </div>
            </div>

            <div
              className={`grid ${
                role == 1 ? "lg:grid-cols-4" : "lg:grid-cols-4"
              }  gap-4 md:grid-cols-1 sm:grid-cols-1`}
            >
              {cards?.map(() => (
                <OverviewCard
                  index={0}
                  img={Dollar}
                  // title="Monthly Revenue"
                  title="Today Revenue"
                  averageIncrese="Currently live on the app"
                  monthlyRevenue="$1k"
                  renderMainValueNumber="+0.3%"
                />
              ))}
            </div>
          </div>
        </div>

        <div className=" mb-[20px]">
          <div className="grid grid-cols-5  gap-5">
            <div className="bg-white rounded-xl col-span-5 lg:col-span-3 shadow p-5">
              <div className="flex justify-between items-center mb-5">
                <h2 className="!text-[20px] !font-bold">Booking</h2>
                <a
                  href="#"
                  className="text-[18px] font-semibold text-[#252525] cursor-pointer"
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

            <div className="bg-white rounded-xl col-span-5 lg:col-span-2 shadow p-4">
              <h2 className="!text-[20px] !font-bold mb-4">Customer Reviews</h2>
              <div className="overflow-x-auto rounded-[15px] border-[1px] border-[#E6E7E7]">
                <DataTable
                  columns={reviewColumns}
                  data={reviews}
                  className="custom-table"
                  customStyles={{
                    headCells: {
                      style: {
                        backgroundColor: "#F1F3FB",
                        fontWeight: "600",
                        fontSize: "14px",
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
          </div>
        </div>

         <div className="">
      <div className="grid grid-cols-5 gap-5">
        {/* Most Booked Services */}
        <div className="bg-white rounded-xl col-span-5 lg:col-span-3 shadow p-5">
          <div className="sm:flex justify-between items-center mb-[21px]">
            <h3 className="text-[#252525] font-bold !text-[18px] !sm:text-[20px]">
              Most Booked Services
            </h3>
            <p className="font-semibold text-[#252525] text-[14px] sm:text-[18px]">
              View all
            </p>
          </div>
          <div className="rounded-[10px] border-[1px] border-[#E6E7E7] overflow-x-auto">
            <DataTable
              columns={servicesColumns}
              data={servicesData}
              customStyles={customStyles}
              noHeader
              striped
              highlightOnHover
            />
          </div>
        </div>

        {/* Popular Booking Locations */}
        <div className="bg-white rounded-xl col-span-5 lg:col-span-2 shadow p-5">
          <div className="mb-[21px]">
            <h3 className="text-[#252525] font-bold !text-[18px] !sm:text-[20px]">
              Popular booking locations
            </h3>
          </div>
          <div className="rounded-[10px] border-[1px] border-[#E6E7E7] overflow-x-auto">
            <DataTable
              columns={locationColumns}
              data={locationData}
              customStyles={customStyles}
              noHeader
              striped
              highlightOnHover
            />
          </div>
        </div>
      </div>
    </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
