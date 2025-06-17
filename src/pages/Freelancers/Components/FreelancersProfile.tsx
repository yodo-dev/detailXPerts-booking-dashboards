import SelectField from "@components/SelectField/SelectField";
import userImg from "../../../assets/images/user-profile-img.png";
import { ReactSVG } from "react-svg";
import StartIcon from "../../../assets/svgs/Star 3.svg";
import AvatarPic from "../../../assets/svgs/Avatars.svg";
import CommonInput from "@components/inputs/CommonInput";
import { useState } from "react";
import AddCircle from "../../../assets/svgs/add-circle.svg";
import ReactSwitch from "react-switch";
import { ArrowLeft, ChevronLeft, RefreshCcw } from "lucide-react";
import { Link } from "react-router-dom";
import MainLayout from "@layouts/MainLayout";
import TcikIcon from "@assets/svgs/icon.svg";
import CrossIcon from "@assets/svgs/cross.svg";
// import map from "@assets/images/Mapsicle Map.png";
import Linechart from "@components/Charts/Linechart";
import { FaDownload } from "react-icons/fa";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { format } from "date-fns";
import { PrimaryButton } from "@components/Buttons/CommonButtons";
// import DownloadButton from "@assets/svgs/receive-square.svg";
import DataTable from "react-data-table-component";

const FreelancerProfile: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const [fieldStep, setFieldStep] = useState(0);
  const [role, setRole] = useState(0);
  const [viewUsers, setViewUsers] = useState(true);
  const [addEditUsers, setAddEditUsers] = useState(true);
  const [deactivateUsers, setDeactivateUsers] = useState(true);
  const [mustAddNumbers, setMustAddNumbers] = useState(false);

  const [viewJobRequests, setViewJobRequests] = useState(true);
  const [assignDetailers, setAssignDetailers] = useState(false);
  const [cancelRescheduleJobs, setCancelRescheduleJobs] = useState(false);
  const [viewJobStatus, setViewJobStatus] = useState(true);

  const [viewWallet, setViewWallet] = useState(true);
  const [managePayouts, setManagePayouts] = useState(false);
  const [refundManagement, setRefundManagement] = useState(false);
  const [stripeSettings, setStripeSettings] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date("2025-04-14"));
  const columns = [
    {
      name: "Service Details",
      selector: (row) => row.service,
      sortable: true,
      cell: (row) => <div className="">{row.service}</div>,
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
      cell: (row) => <div className="">{row.price}</div>,
    },
    {
      name: "Vehicle",
      selector: (row) => row.vehicle,
      sortable: true,
      cell: (row) => <div className="">{row.vehicle}</div>,
    },
    {
      name: "Time",
      selector: (row) => row.time,
      sortable: true,
      cell: (row) => <div className="">{row.time}</div>,
    },
    {
      name: "Duration",
      selector: (row) => row.duration,
      sortable: true,
      cell: (row) => <div className="">{row.duration}</div>,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="p-4 font-medium  cursor-pointer">
          View <span className="inline-block ml-1">→</span>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];
  const customStyles = {
    headCells: {
      style: {
        padding: "1rem",
        backgroundColor: "#f3f4f6", // Tailwind's bg-gray-100
        color: "#4b5563", // Tailwind's text-gray-600
        fontWeight: "500",
        fontSize: "14px",
      },
    },
    rows: {
      style: {
        padding: "0.5rem",
        color: "#1f2937", // Tailwind's text-gray-800
        fontSize: "14px",
        borderBottom: "1px solid #e5e7eb", // Tailwind's border-gray-200
      },
      highlightOnHoverStyle: {
        backgroundColor: "#f9fafb", // Tailwind's hover:bg-gray-50
      },
    },
    tableWrapper: {
      style: {
        overflowX: "auto",
      },
    },
  };

  const bookings = Array(7).fill({
    service: "Premium Full Detail",
    price: "$75.50",
    vehicle: "Honda Civic 2022",
    time: "9:11 pm - 11:27 pm",
    duration: "2:16:03",
  });
  const lineData = [
    {
      name: "Jan",
      "Loyal Customers": 20,
      "New Customers": 15,
      "Unique Customers": 10,
    },
    {
      name: "Feb",
      "Loyal Customers": 25,
      "New Customers": 18,
      "Unique Customers": 13,
    },
    {
      name: "Mar",
      "Loyal Customers": 30,
      "New Customers": 22,
      "Unique Customers": 18,
    },
    {
      name: "Apr",
      "Loyal Customers": 40,
      "New Customers": 30,
      "Unique Customers": 25,
    },
    {
      name: "May",
      "Loyal Customers": 22,
      "New Customers": 17,
      "Unique Customers": 12,
    },
    {
      name: "Jun",
      "Loyal Customers": 35,
      "New Customers": 25,
      "Unique Customers": 20,
    },
    {
      name: "Jul",
      "Loyal Customers": 33,
      "New Customers": 29,
      "Unique Customers": 18,
    },
    {
      name: "Aug",
      "Loyal Customers": 37,
      "New Customers": 32,
      "Unique Customers": 21,
    },
    {
      name: "Sep",
      "Loyal Customers": 34,
      "New Customers": 26,
      "Unique Customers": 19,
    },
    {
      name: "Oct",
      "Loyal Customers": 36,
      "New Customers": 28,
      "Unique Customers": 22,
    },
    {
      name: "Nov",
      "Loyal Customers": 32,
      "New Customers": 27,
      "Unique Customers": 20,
    },
    {
      name: "Dec",
      "Loyal Customers": 38,
      "New Customers": 30,
      "Unique Customers": 25,
    },
  ];

  const handleAddMore = () => {
    if (fieldStep < 3) {
      setFieldStep(fieldStep + 1);
    }
  };

  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <MainLayout>
      <div className="default_container min-h-screen">
        <div className="bg-[#F8F9FA] mb-[10px]">
          <div className="sm:flex items-center  gap-4">
            <div className="flex gap-2 sm:mb-0 mb-4">
            <Link to={"/booking-management"}>
              <ChevronLeft />
            </Link>
            <span>Back</span>
            </div>
            <h2 className="!text-black">Freelancer Profile:</h2>
          </div>

          <div className="flex space-x-4 mb-6 mt-6">
            <button
              className={`px-4 py-2 ${
                role === 0 ? "bg-[#003CA6] !text-white" : "bg-white !text-black"
              } rounded-[12px] text-[14px] font-semibold`}
              onClick={() => setRole(0)}
            >
              Personal Info
            </button>
            <button
              className={`px-4 py-2 ${
                role === 1 ? "bg-[#003CA6] !text-white" : "bg-white !text-black"
              } rounded-[12px] text-[14px] font-semibold`}
              onClick={() => setRole(1)}
            >
              Role Permissions
            </button>
          </div>

          <div>
            {role == 0 ? (
              <div className="bg-white !rounded-[20px] p-[28px]">
                <div className=" mx-auto  rounded-lg shadow-md ">
                  {/* Tabs */}

                  {/* Profile Header */}
                  {/* Top Person Card */}
                  <div
                    style={{ backgroundColor: "rgba(27, 61, 150, 0.05)" }}
                    className="  border-[1px] border-[#e6e6e6] lg:flex-row flex-wrap  flex justify-between items-center p-[26px] pe-[30px] rounded-2xl mb-5"
                  >
                    <div className="flex gap-2 lg:mb-0 mb-8">
                      <div className="sm:w-[95px] w-[80px] h-[80px] sm:h-[95px] flex items-center justify-center border border-[#25252526] rounded-full">
                        <img
                          src={userImg}
                          alt=""
                          className="sm:w-[95px] w-[80px] h-[80px] sm:h-[95px] rounded-full"
                        />
                      </div>

                      <div className="flex items-start justify-center flex-col ">
                        <div className="text-sm cursor-pointer text-[20px] font-semibold">
                          Luis Froza
                        </div>
                        <div className="text-xs text-gray-400 flex gap-1 mt-1">
                          <p className="text-[15px]">abc@someone.com</p>
                        </div>
                      </div>
                    </div>
                    <div className=" flex justify-between gap-9 items-center flex-wrap">
                      <div>
                        <div className="flex mb-[5px]">
                          <div className="flex flex-col justify-start items-start">
                            <div className="flex">
                              <ReactSVG src={StartIcon} />
                              <span>4.5 (237)</span>
                            </div>
                            <ReactSVG src={AvatarPic} />
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="flex mb-[5px]">
                          <span className="text-[#2929297c] font-medium">
                            Position
                          </span>
                        </div>
                        <p className="font-medium">Detailer</p>
                      </div>

                      <div>
                        <div className="flex mb-[5px]">
                          <span className="text-[#2929297c] font-medium">
                            Joining Date
                          </span>
                        </div>
                        <p className="font-medium">21-08-2025</p>
                      </div>

                      <div>
                        <div className="flex mb-[5px]">
                          <span className="text-[#2929297c] font-medium">
                            Total Bookigns
                          </span>
                        </div>
                        <p className="font-medium">400+</p>
                      </div>

                      <div>
                        <div className="flex mb-[5px]">
                          <span className="text-[#2929297c] font-medium">
                            Service
                          </span>
                        </div>
                        <p className="font-medium">Car Radiator</p>
                        <p className="font-medium">Specialist</p>
                      </div>

                      <div>
                        <div className="flex mb-[5px]">
                          <span className="text-[#2929297c] font-medium">
                            Profile Status
                          </span>
                        </div>

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
                      </div>
                    </div>
                  </div>
                  {/* Top Person Card */}
                </div>
                {/* 2nd--------------- */}
                <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-4 mb-6 pt-4">
                  <div className="flex flex-col w-full">
                    <p className="text-[12px] font-semibold text-[#252525] mb-1">
                      Full Name
                    </p>
                    <CommonInput
                      placeholder="Brooklyn Simmons"
                      inputClass="border border-[#EEEE] !rounded-md !px-3 !py-2"
                      showEdit
                    />
                  </div>

                  <div className="flex flex-col w-full">
                    <p className="text-[12px] font-semibold text-[#252525] mb-1">
                      Email
                    </p>
                    <CommonInput
                      placeholder="Brooklyn@email.com"
                      inputClass="border border-[#EEEE] !rounded-md !px-3 !py-2"
                      showEdit
                    />
                  </div>

                  <div className="flex flex-col w-full">
                    <p className="text-[12px] font-semibold text-[#252525] mb-1">
                      Mobile Number
                    </p>
                    <CommonInput
                      placeholder="+1 0215 212 1235"
                      inputClass="border border-[#EEEE] !rounded-md !px-3 !py-2"
                      showEdit
                    />
                  </div>

                  <div className="flex flex-col w-full">
                    <p className="text-[12px] font-semibold text-[#252525] mb-1">
                      Mobile Number
                    </p>
                    <CommonInput
                      placeholder="+1 0215 212 1235"
                      inputClass="border border-[#EEEE] !rounded-md !px-3 !py-2"
                      showEdit
                    />
                  </div>
                </div>

                <h3 className="font-medium !text-[18px] mb-2">
                  Address Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="flex flex-col w-full">
                    <p className="text-[12px] font-semibold text-[#252525] mb-1">
                      Flat/House/building Number
                    </p>
                    <CommonInput
                      placeholder="50B/2"
                      inputClass="border border-[#EEEE] !rounded-md !px-3 !py-2"
                      showEdit
                    />
                  </div>

                  <div className="flex flex-col w-full">
                    <p className="text-[12px] font-semibold text-[#252525] mb-1">
                      Street/Town
                    </p>
                    <CommonInput
                      placeholder="Hike"
                      inputClass="border border-[#EEEE] !rounded-md !px-3 !py-2"
                      showEdit
                    />
                  </div>

                  <div className="flex flex-col w-full">
                    <p className="text-[12px] font-semibold text-[#252525] mb-1">
                      City
                    </p>
                    <CommonInput
                      placeholder="Urban"
                      inputClass="border border-[#EEEE] !rounded-md !px-3 !py-2"
                      showEdit
                    />
                  </div>

                  <div className="flex flex-col w-full">
                    <p className="text-[12px] font-semibold text-[#252525] mb-1">
                      Country
                    </p>
                    <CommonInput
                      placeholder="United Kingdom"
                      inputClass="border border-[#EEEE] !rounded-md !px-3 !py-2"
                      showEdit
                    />
                  </div>
                </div>

                <div className="flex justify-end mb-4">
                  <button
                    className="text-[#1B3D96] flex gap-2 text-end text-sm cursor-pointer disabled:opacity-50"
                    onClick={handleAddMore}
                    disabled={fieldStep >= 3}
                  >
                    Add More Address
                    <img src={AddCircle} alt="" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                  {fieldStep >= 1 && (
                    <div className="">
                      <div className="flex flex-col w-full">
                        <p className="text-[12px] font-semibold text-[#252525] mb-1">
                          Flat/House
                        </p>
                        <CommonInput
                          placeholder="Flat/House"
                          inputClass="border border-[#EEEE] !rounded-md !px-3 !py-2"
                          showEdit
                        />
                      </div>
                    </div>
                  )}
                  {fieldStep >= 2 && (
                    <div>
                      <div className="flex flex-col w-full">
                        <p className="text-[12px] font-semibold text-[#252525] mb-1">
                          Building Number
                        </p>
                        <CommonInput
                          placeholder="Building Number"
                          inputClass="border border-[#EEEE] !rounded-md !px-3 !py-2"
                          showEdit
                        />
                      </div>
                    </div>
                  )}
                  {fieldStep >= 3 && (
                    <div>
                      <div className="flex flex-col w-full">
                        <p className="text-[12px] font-semibold text-[#252525] mb-1">
                          Street No
                        </p>
                        <CommonInput
                          placeholder="Street No"
                          inputClass="border border-[#EEEE] !rounded-md !px-3 !py-2"
                          showEdit
                        />
                      </div>
                    </div>
                  )}
                </div>
                <button className="w-full bg-[#1B3D96] text-white py-2 rounded-[8px] cursor-pointer">
                  Update
                </button>
              </div>
            ) : (
              <>
                <div className="bg-white !rounded-[20px] p-[28px]">
                  <div className=" mx-auto  rounded-lg shadow-md ">
                    {/* Tabs */}
                    {/* <div className="flex space-x-4 mb-6">
                  <button
                    className={`px-4 py-2 ${
                      role == 0 ? "bg-[#003CA6] " : "bg-white"
                    }  rounded-[12px] text-[14px] text-white rounded font-semibold`}
                    onClick={() => setRole(0)}
                  >
                    Personal Info
                  </button>
                  <button
                    className={`px-4 py-2 ${
                      role == 0 ? "bg-white " : "bg-[#003CA6]"
                    }  rounded-[12px] text-[14px] text-white rounded font-semibold`}
                    onClick={() => setRole(1)}
                  >
                    Role Permissions
                  </button>
                </div> */}

                    {/* Payments & Wallet */}
                    <div>
                      <h2 className="!font-semibold !text-[18px] !text-[#252525] mb-4">
                        Payments & Wallet
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                          <span className="text-[#546E7F] text-[14px]">
                            View Wallet
                          </span>
                          <ReactSwitch
                            checked={viewWallet}
                            onChange={setViewWallet}
                            checkedIcon={false}
                            uncheckedIcon={false}
                          />
                        </div>
                        <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                          <span className="text-[#546E7F] text-[14px]">
                            Manage Payouts
                          </span>
                          <ReactSwitch
                            checked={managePayouts}
                            onChange={setManagePayouts}
                            checkedIcon={false}
                            uncheckedIcon={false}
                          />
                        </div>
                        <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                          <span className="text-[#546E7F] text-[14px]">
                            Refund Management
                          </span>
                          <ReactSwitch
                            checked={refundManagement}
                            onChange={setRefundManagement}
                            checkedIcon={false}
                            uncheckedIcon={false}
                          />
                        </div>
                        <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                          <span className="text-[#546E7F] text-[14px]">
                            Stripe Integration Settings
                          </span>
                          <ReactSwitch
                            checked={stripeSettings}
                            onChange={setStripeSettings}
                            checkedIcon={false}
                            uncheckedIcon={false}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Franchise Management */}
                    <div className="mt-4">
                      <h2 className="!font-semibold !text-[18px] !text-[#252525] mb-4">
                        Franchise Manaement
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                          <span className="text-[#546E7F] text-[14px]">
                            View Wallet
                          </span>
                          <ReactSwitch
                            // checked={viewWallet}
                            // onChange={setViewWallet}
                            checkedIcon={false}
                            uncheckedIcon={false}
                          />
                        </div>
                        <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                          <span className="text-[#546E7F] text-[14px]">
                            Manage Payouts
                          </span>
                          <ReactSwitch
                            // checked={managePayouts}
                            // onChange={setManagePayouts}
                            checkedIcon={false}
                            uncheckedIcon={false}
                          />
                        </div>
                        <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                          <span className="text-[#546E7F] text-[14px]">
                            Refund Management
                          </span>
                          <ReactSwitch
                            // checked={refundManagement}
                            // onChange={setRefundManagement}
                            checkedIcon={false}
                            uncheckedIcon={false}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Communication Tools */}
                    <div className="mt-4">
                      <h2 className="!font-semibold !text-[18px] !text-[#252525] mb-4">
                        Communication Tools
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                          <span className="text-[#546E7F] text-[14px]">
                            View Wallet
                          </span>
                          <ReactSwitch
                            // checked={viewWallet}
                            // onChange={setViewWallet}
                            checkedIcon={false}
                            uncheckedIcon={false}
                          />
                        </div>
                        <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                          <span className="text-[#546E7F] text-[14px]">
                            Manage Payouts
                          </span>
                          <ReactSwitch
                            // checked={managePayouts}
                            // onChange={setManagePayouts}
                            checkedIcon={false}
                            uncheckedIcon={false}
                          />
                        </div>
                        <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
                          <span className="text-[#546E7F] text-[14px]">
                            Refund Management
                          </span>
                          <ReactSwitch
                            // checked={refundManagement}
                            // onChange={setRefundManagement}
                            checkedIcon={false}
                            uncheckedIcon={false}
                          />
                        </div>
                      </div>

                      <button className="w-full mt-10 bg-[#003CA6] flex justify-center items-center gap-2 text-white py-3 rounded-[8px] cursor-pointer">
                        <RefreshCcw />
                        <span>Update Settings</span>
                      </button>
                    </div>
                  </div>
                  {/* 2nd--------------- */}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="bg-[#FFFFFF] rounded-[20px] p-[24px] mb-[20px] border-gray-200 border">
          <h3 className="mb-[16px] !text-[20px] !font-bold ">Service Area</h3>
          {/* <img src={map} alt="" /> */}
        </div>

        <div className="mb-20">
          <div className="min-h-screen bg-white p-6 md:p-10">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">
              Booking Schedule
            </h1>

            <div className="flex flex-col md:flex-row gap-6">
              {/* Calendar Section */}
              <div className="bg-white rounded-xl shadow p-4 w-full md:w-1/3">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateCalendar
                    date={selectedDate}
                    onChange={(newDate) => setSelectedDate(newDate)}
                    renderDay={(day, _value, DayComponentProps) => (
                      <div
                        className={`${
                          DayComponentProps.selected
                            ? "bg-blue-600 text-white"
                            : ""
                        } px-2 py-1 rounded-full`}
                      >
                        {format(day, "d")}
                      </div>
                    )}
                  />
                </LocalizationProvider>
              </div>

              {/* Booking Table */}
              <div className="w-full md:w-2/3 bg-white rounded-xl shadow overflow-x-auto">
                <DataTable
                  columns={columns}
                  data={bookings}
                  customStyles={customStyles}
                  responsive
                  highlightOnHover
                  striped={false}
                  pagination={false}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="p-6 space-y-10 bg-gray-50 min-h-screen">
            {/* Working Hours */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="sm:items-center sm:flex-row flex-col flex justify-between mb-6">
                <h2 className="!sm:text-[32px] !text-[20px] font-semibold sm:mb-0 mb-6">Working Hours</h2>
                <div className="flex sm:items-center items-start sm:flex-row flex-col gap-4">
                  {/* <PrimaryButton
                    btnClass="bg-blue-600 text-white text-sm px-4 py-2"
                    img={DownloadButton}
                    btnText="Download report"
                  /> */}

                  <span className="text-sm text-gray-600">Nov 23 - Nov 29</span>
                </div>
              </div>
              {/* Dummy Bar Chart Placeholder */}
              <div className="h-40 flex items-end justify-between text-center text-xs font-medium text-gray-700">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                  (day, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center justify-end h-full w-8"
                    >
                      <div
                        className="w-full bg-blue-700 rounded-t-md"
                        style={{
                          height: `${[80, 10, 30, 80, 70, 20, 10][idx]}%`,
                        }}
                      ></div>
                      <span className="mt-2">{day}</span>
                    </div>
                  )
                )}
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Worked This Week: <strong>27 Hours</strong>
              </p>
            </div>

            {/* Analytics */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex sm:items-center sm:flex-row flex-col  justify-between mb-6">
                <h2 className="!sm:text-[32px] !text-[20px] font-semibold sm:mb-0 mb-6">Analytics</h2>
                <div className="flex sm:flex-row flex-col items-start sm:items-center gap-4">
                  {/* <PrimaryButton
                    btnClass="bg-blue-600 text-white text-sm px-4 py-2"
                    img={DownloadButton}
                    btnText="Download report"
                  /> */}
                  <span className="text-sm text-gray-600">Nov 23 - Nov 29</span>
                </div>
              </div>

              <Linechart
                data={lineData}
                legend={true}
                color1="#00E096"
                color2="#0095FF"
                color3="#FF3D71"
              />

              {/* Bottom Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                <div className="bg-white p-6 rounded-xl shadow-md text-center border">
                  <div className="text-lg font-semibold">Monthly Earning</div>
                  <div className="text-3xl font-bold text-green-600 mt-2">
                    $10K
                  </div>
                  <p className="text-xs text-gray-500">Earned This Month</p>
                  <p className="text-sm text-blue-500 underline mt-4 inline-block">
                    Report
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border">
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                    <div>
                      <p>Highest Amount Earned</p>
                      <p className="font-bold text-gray-900">$4.5K</p>
                    </div>
                    <div>
                      <p>Satisfaction Rate</p>
                      <p className="font-bold text-gray-900">97%</p>
                    </div>
                    <div>
                      <p>Total Revenue Generated</p>
                      <p className="font-bold text-gray-900">$25K</p>
                    </div>
                    <div>
                      <p>Recurring Customers</p>
                      <p className="font-bold text-gray-900">45%</p>
                    </div>
                    <div>
                      <p>Most Selling Area</p>
                      <p className="font-bold text-gray-900">Baltimore</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default FreelancerProfile;
