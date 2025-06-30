// import SelectField from "@components/SelectField/SelectField";
// import userImg from "../../../assets/images/user-profile-img.png";
// import { ReactSVG } from "react-svg";
// import StartIcon from "../../../assets/svgs/Star 3.svg";
// import AvatarPic from "../../../assets/svgs/Avatars.svg";
// import CommonInput from "@components/inputs/CommonInput";
// import { useState } from "react";
// import AddCircle from "../../../assets/svgs/add-circle.svg";
// import ReactSwitch from "react-switch";
// import { ArrowLeft, ChevronLeft, RefreshCcw } from "lucide-react";
// import { Link } from "react-router-dom";
// import MainLayout from "@layouts/MainLayout";
// import TcikIcon from "@assets/svgs/icon.svg";
// import CrossIcon from "@assets/svgs/cross.svg";
// // import map from "@assets/images/Mapsicle Map.png";
// import Linechart from "@components/Charts/Linechart";
// import { FaDownload } from "react-icons/fa";
// import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { format } from "date-fns";
// import { PrimaryButton } from "@components/Buttons/CommonButtons";
// // import DownloadButton from "@assets/svgs/receive-square.svg";
// import DataTable from "react-data-table-component";

// const FreelancerProfile: React.FC = () => {
//   const [selectedImage, setSelectedImage] = useState("");
//   const [fieldStep, setFieldStep] = useState(0);
//   const [role, setRole] = useState(0);
//   const [viewUsers, setViewUsers] = useState(true);
//   const [addEditUsers, setAddEditUsers] = useState(true);
//   const [deactivateUsers, setDeactivateUsers] = useState(true);
//   const [mustAddNumbers, setMustAddNumbers] = useState(false);

//   const [viewJobRequests, setViewJobRequests] = useState(true);
//   const [assignDetailers, setAssignDetailers] = useState(false);
//   const [cancelRescheduleJobs, setCancelRescheduleJobs] = useState(false);
//   const [viewJobStatus, setViewJobStatus] = useState(true);

//   const [viewWallet, setViewWallet] = useState(true);
//   const [managePayouts, setManagePayouts] = useState(false);
//   const [refundManagement, setRefundManagement] = useState(false);
//   const [stripeSettings, setStripeSettings] = useState(true);
//   const [selectedDate, setSelectedDate] = useState(new Date("2025-04-14"));
//   const columns = [
//     {
//       name: "Service Details",
//       selector: (row) => row.service,
//       sortable: true,
//       cell: (row) => <div className="">{row.service}</div>,
//     },
//     {
//       name: "Price",
//       selector: (row) => row.price,
//       sortable: true,
//       cell: (row) => <div className="">{row.price}</div>,
//     },
//     {
//       name: "Vehicle",
//       selector: (row) => row.vehicle,
//       sortable: true,
//       cell: (row) => <div className="">{row.vehicle}</div>,
//     },
//     {
//       name: "Time",
//       selector: (row) => row.time,
//       sortable: true,
//       cell: (row) => <div className="">{row.time}</div>,
//     },
//     {
//       name: "Duration",
//       selector: (row) => row.duration,
//       sortable: true,
//       cell: (row) => <div className="">{row.duration}</div>,
//     },
//     {
//       name: "Action",
//       cell: (row) => (
//         <div className="p-4 font-medium  cursor-pointer">
//           View <span className="inline-block ml-1">→</span>
//         </div>
//       ),
//       ignoreRowClick: true,
//       allowOverflow: true,
//       button: true,
//     },
//   ];
//   const customStyles = {
//     headCells: {
//       style: {
//         padding: "1rem",
//         backgroundColor: "#f3f4f6", // Tailwind's bg-gray-100
//         color: "#4b5563", // Tailwind's text-gray-600
//         fontWeight: "500",
//         fontSize: "14px",
//       },
//     },
//     rows: {
//       style: {
//         padding: "0.5rem",
//         color: "#1f2937", // Tailwind's text-gray-800
//         fontSize: "14px",
//         borderBottom: "1px solid #e5e7eb", // Tailwind's border-gray-200
//       },
//       highlightOnHoverStyle: {
//         backgroundColor: "#f9fafb", // Tailwind's hover:bg-gray-50
//       },
//     },
//     tableWrapper: {
//       style: {
//         overflowX: "auto",
//       },
//     },
//   };

//   const bookings = Array(7).fill({
//     service: "Premium Full Detail",
//     price: "$75.50",
//     vehicle: "Honda Civic 2022",
//     time: "9:11 pm - 11:27 pm",
//     duration: "2:16:03",
//   });
//   const lineData = [
//     {
//       name: "Jan",
//       "Loyal Customers": 20,
//       "New Customers": 15,
//       "Unique Customers": 10,
//     },
//     {
//       name: "Feb",
//       "Loyal Customers": 25,
//       "New Customers": 18,
//       "Unique Customers": 13,
//     },
//     {
//       name: "Mar",
//       "Loyal Customers": 30,
//       "New Customers": 22,
//       "Unique Customers": 18,
//     },
//     {
//       name: "Apr",
//       "Loyal Customers": 40,
//       "New Customers": 30,
//       "Unique Customers": 25,
//     },
//     {
//       name: "May",
//       "Loyal Customers": 22,
//       "New Customers": 17,
//       "Unique Customers": 12,
//     },
//     {
//       name: "Jun",
//       "Loyal Customers": 35,
//       "New Customers": 25,
//       "Unique Customers": 20,
//     },
//     {
//       name: "Jul",
//       "Loyal Customers": 33,
//       "New Customers": 29,
//       "Unique Customers": 18,
//     },
//     {
//       name: "Aug",
//       "Loyal Customers": 37,
//       "New Customers": 32,
//       "Unique Customers": 21,
//     },
//     {
//       name: "Sep",
//       "Loyal Customers": 34,
//       "New Customers": 26,
//       "Unique Customers": 19,
//     },
//     {
//       name: "Oct",
//       "Loyal Customers": 36,
//       "New Customers": 28,
//       "Unique Customers": 22,
//     },
//     {
//       name: "Nov",
//       "Loyal Customers": 32,
//       "New Customers": 27,
//       "Unique Customers": 20,
//     },
//     {
//       name: "Dec",
//       "Loyal Customers": 38,
//       "New Customers": 30,
//       "Unique Customers": 25,
//     },
//   ];

//   const handleAddMore = () => {
//     if (fieldStep < 3) {
//       setFieldStep(fieldStep + 1);
//     }
//   };

//   const [isActive, setIsActive] = useState(false);

//   const handleToggle = () => {
//     setIsActive(!isActive);
//   };

//   return (
//     <MainLayout>
//       <div className="default_container min-h-screen">
//         <div className="bg-[#F8F9FA] mb-[10px]">
//           <div className="sm:flex items-center  gap-4">
//             <div className="flex gap-2 sm:mb-0 mb-4">
//             <Link to={"/booking-management"}>
//               <ChevronLeft />
//             </Link>
//             <span>Back</span>
//             </div>
//             <h2 className="!text-black">Freelancer Profile:</h2>
//           </div>

//           <div className="flex space-x-4 mb-6 mt-6">
//             <button
//               className={`px-4 py-2 ${
//                 role === 0 ? "bg-[#003CA6] !text-white" : "bg-white !text-black"
//               } rounded-[12px] text-[14px] font-semibold`}
//               onClick={() => setRole(0)}
//             >
//               Personal Info
//             </button>
//             <button
//               className={`px-4 py-2 ${
//                 role === 1 ? "bg-[#003CA6] !text-white" : "bg-white !text-black"
//               } rounded-[12px] text-[14px] font-semibold`}
//               onClick={() => setRole(1)}
//             >
//               Role Permissions
//             </button>
//           </div>

//           <div>
//             {role == 0 ? (
//               <div className="bg-white !rounded-[20px] p-[28px]">
//                 <div className=" mx-auto  rounded-lg shadow-md ">
//                   {/* Tabs */}

//                   {/* Profile Header */}
//                   {/* Top Person Card */}
//                   <div
//                     style={{ backgroundColor: "rgba(27, 61, 150, 0.05)" }}
//                     className="  border-[1px] border-[#e6e6e6] lg:flex-row flex-wrap  flex justify-between items-center p-[26px] pe-[30px] rounded-2xl mb-5"
//                   >
//                     <div className="flex gap-2 lg:mb-0 mb-8">
//                       <div className="sm:w-[95px] w-[80px] h-[80px] sm:h-[95px] flex items-center justify-center border border-[#25252526] rounded-full">
//                         <img
//                           src={userImg}
//                           alt=""
//                           className="sm:w-[95px] w-[80px] h-[80px] sm:h-[95px] rounded-full"
//                         />
//                       </div>

//                       <div className="flex items-start justify-center flex-col ">
//                         <div className="text-sm cursor-pointer text-[20px] font-semibold">
//                           Luis Froza
//                         </div>
//                         <div className="text-xs text-gray-400 flex gap-1 mt-1">
//                           <p className="text-[15px]">abc@someone.com</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className=" flex justify-between gap-9 items-center flex-wrap">
//                       <div>
//                         <div className="flex mb-[5px]">
//                           <div className="flex flex-col justify-start items-start">
//                             <div className="flex">
//                               <ReactSVG src={StartIcon} />
//                               <span>4.5 (237)</span>
//                             </div>
//                             <ReactSVG src={AvatarPic} />
//                           </div>
//                         </div>
//                       </div>

//                       <div>
//                         <div className="flex mb-[5px]">
//                           <span className="text-[#2929297c] font-medium">
//                             Position
//                           </span>
//                         </div>
//                         <p className="font-medium">Detailer</p>
//                       </div>

//                       <div>
//                         <div className="flex mb-[5px]">
//                           <span className="text-[#2929297c] font-medium">
//                             Joining Date
//                           </span>
//                         </div>
//                         <p className="font-medium">21-08-2025</p>
//                       </div>

//                       <div>
//                         <div className="flex mb-[5px]">
//                           <span className="text-[#2929297c] font-medium">
//                             Total Bookigns
//                           </span>
//                         </div>
//                         <p className="font-medium">400+</p>
//                       </div>

//                       <div>
//                         <div className="flex mb-[5px]">
//                           <span className="text-[#2929297c] font-medium">
//                             Service
//                           </span>
//                         </div>
//                         <p className="font-medium">Car Radiator</p>
//                         <p className="font-medium">Specialist</p>
//                       </div>

//                       <div>
//                         <div className="flex mb-[5px]">
//                           <span className="text-[#2929297c] font-medium">
//                             Profile Status
//                           </span>
//                         </div>

//                         <label className="inline-flex items-center cursor-pointer">
//                           <input
//                             type="checkbox"
//                             className="sr-only peer "
//                             checked={isActive}
//                             onChange={handleToggle}
//                           />
//                           <div className="relative w-20 h-10 bg-[#1D1B201F] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#ffffff00] rounded-full peer peer-checked:after:translate-x-10 after:content-[''] after:absolute after:top-[5px] after:left-[5px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-8 after:w-8 after:transition-all peer-checked:bg-[#0EA363]">
//                             {isActive ? (
//                               <>
//                                 <ReactSVG
//                                   className="absolute z-9 right-3 top-4 w-[11px] h-[8px] text-black pointer-events-none"
//                                   src={TcikIcon}
//                                 />
//                                 <p className="text-white absolute top-[14px] left-[5px] text-[9px]">
//                                   Activate
//                                 </p>
//                               </>
//                             ) : (
//                               <>
//                                 <ReactSVG
//                                   className="absolute z-9 left-4 top-4 w-[11px] h-[8px] text-black pointer-events-none"
//                                   src={CrossIcon}
//                                 />
//                                 <p className="text-[#ACA7AC] absolute top-[14px] right-[5px] text-[9px]">
//                                   Disable
//                                 </p>
//                               </>
//                             )}
//                           </div>
//                           <span className="ml-3 text-base font-medium text-gray-900">
//                             {isActive ? "" : ""}
//                           </span>
//                         </label>
//                       </div>
//                     </div>
//                   </div>
//                   {/* Top Person Card */}
//                 </div>
//                 {/* 2nd--------------- */}
//                 <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-4 mb-6 pt-4">
//                   <div className="flex flex-col w-full">
//                     <p className="text-[12px] font-semibold text-[#252525] mb-1">
//                       Full Name
//                     </p>
//                     <CommonInput
//                       placeholder="Brooklyn Simmons"
//                       inputClass="border border-[#EEEE] !rounded-md !px-3 !py-2"
//                       showEdit
//                     />
//                   </div>

//                   <div className="flex flex-col w-full">
//                     <p className="text-[12px] font-semibold text-[#252525] mb-1">
//                       Email
//                     </p>
//                     <CommonInput
//                       placeholder="Brooklyn@email.com"
//                       inputClass="border border-[#EEEE] !rounded-md !px-3 !py-2"
//                       showEdit
//                     />
//                   </div>

//                   <div className="flex flex-col w-full">
//                     <p className="text-[12px] font-semibold text-[#252525] mb-1">
//                       Mobile Number
//                     </p>
//                     <CommonInput
//                       placeholder="+1 0215 212 1235"
//                       inputClass="border border-[#EEEE] !rounded-md !px-3 !py-2"
//                       showEdit
//                     />
//                   </div>

//                   <div className="flex flex-col w-full">
//                     <p className="text-[12px] font-semibold text-[#252525] mb-1">
//                       Mobile Number
//                     </p>
//                     <CommonInput
//                       placeholder="+1 0215 212 1235"
//                       inputClass="border border-[#EEEE] !rounded-md !px-3 !py-2"
//                       showEdit
//                     />
//                   </div>
//                 </div>

//                 <h3 className="font-medium !text-[18px] mb-2">
//                   Address Details
//                 </h3>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//                   <div className="flex flex-col w-full">
//                     <p className="text-[12px] font-semibold text-[#252525] mb-1">
//                       Flat/House/building Number
//                     </p>
//                     <CommonInput
//                       placeholder="50B/2"
//                       inputClass="border border-[#EEEE] !rounded-md !px-3 !py-2"
//                       showEdit
//                     />
//                   </div>

//                   <div className="flex flex-col w-full">
//                     <p className="text-[12px] font-semibold text-[#252525] mb-1">
//                       Street/Town
//                     </p>
//                     <CommonInput
//                       placeholder="Hike"
//                       inputClass="border border-[#EEEE] !rounded-md !px-3 !py-2"
//                       showEdit
//                     />
//                   </div>

//                   <div className="flex flex-col w-full">
//                     <p className="text-[12px] font-semibold text-[#252525] mb-1">
//                       City
//                     </p>
//                     <CommonInput
//                       placeholder="Urban"
//                       inputClass="border border-[#EEEE] !rounded-md !px-3 !py-2"
//                       showEdit
//                     />
//                   </div>

//                   <div className="flex flex-col w-full">
//                     <p className="text-[12px] font-semibold text-[#252525] mb-1">
//                       Country
//                     </p>
//                     <CommonInput
//                       placeholder="United Kingdom"
//                       inputClass="border border-[#EEEE] !rounded-md !px-3 !py-2"
//                       showEdit
//                     />
//                   </div>
//                 </div>

//                 <div className="flex justify-end mb-4">
//                   <button
//                     className="text-[#1B3D96] flex gap-2 text-end text-sm cursor-pointer disabled:opacity-50"
//                     onClick={handleAddMore}
//                     disabled={fieldStep >= 3}
//                   >
//                     Add More Address
//                     <img src={AddCircle} alt="" />
//                   </button>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
//                   {fieldStep >= 1 && (
//                     <div className="">
//                       <div className="flex flex-col w-full">
//                         <p className="text-[12px] font-semibold text-[#252525] mb-1">
//                           Flat/House
//                         </p>
//                         <CommonInput
//                           placeholder="Flat/House"
//                           inputClass="border border-[#EEEE] !rounded-md !px-3 !py-2"
//                           showEdit
//                         />
//                       </div>
//                     </div>
//                   )}
//                   {fieldStep >= 2 && (
//                     <div>
//                       <div className="flex flex-col w-full">
//                         <p className="text-[12px] font-semibold text-[#252525] mb-1">
//                           Building Number
//                         </p>
//                         <CommonInput
//                           placeholder="Building Number"
//                           inputClass="border border-[#EEEE] !rounded-md !px-3 !py-2"
//                           showEdit
//                         />
//                       </div>
//                     </div>
//                   )}
//                   {fieldStep >= 3 && (
//                     <div>
//                       <div className="flex flex-col w-full">
//                         <p className="text-[12px] font-semibold text-[#252525] mb-1">
//                           Street No
//                         </p>
//                         <CommonInput
//                           placeholder="Street No"
//                           inputClass="border border-[#EEEE] !rounded-md !px-3 !py-2"
//                           showEdit
//                         />
//                       </div>
//                     </div>
//                   )}
//                 </div>
//                 <button className="w-full bg-[#1B3D96] text-white py-2 rounded-[8px] cursor-pointer">
//                   Update
//                 </button>
//               </div>
//             ) : (
//               <>
//                 <div className="bg-white !rounded-[20px] p-[28px]">
//                   <div className=" mx-auto  rounded-lg shadow-md ">
//                     {/* Tabs */}
//                     {/* <div className="flex space-x-4 mb-6">
//                   <button
//                     className={`px-4 py-2 ${
//                       role == 0 ? "bg-[#003CA6] " : "bg-white"
//                     }  rounded-[12px] text-[14px] text-white rounded font-semibold`}
//                     onClick={() => setRole(0)}
//                   >
//                     Personal Info
//                   </button>
//                   <button
//                     className={`px-4 py-2 ${
//                       role == 0 ? "bg-white " : "bg-[#003CA6]"
//                     }  rounded-[12px] text-[14px] text-white rounded font-semibold`}
//                     onClick={() => setRole(1)}
//                   >
//                     Role Permissions
//                   </button>
//                 </div> */}

//                     {/* Payments & Wallet */}
//                     <div>
//                       <h2 className="!font-semibold !text-[18px] !text-[#252525] mb-4">
//                         Payments & Wallet
//                       </h2>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
//                           <span className="text-[#546E7F] text-[14px]">
//                             View Wallet
//                           </span>
//                           <ReactSwitch
//                             checked={viewWallet}
//                             onChange={setViewWallet}
//                             checkedIcon={false}
//                             uncheckedIcon={false}
//                           />
//                         </div>
//                         <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
//                           <span className="text-[#546E7F] text-[14px]">
//                             Manage Payouts
//                           </span>
//                           <ReactSwitch
//                             checked={managePayouts}
//                             onChange={setManagePayouts}
//                             checkedIcon={false}
//                             uncheckedIcon={false}
//                           />
//                         </div>
//                         <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
//                           <span className="text-[#546E7F] text-[14px]">
//                             Refund Management
//                           </span>
//                           <ReactSwitch
//                             checked={refundManagement}
//                             onChange={setRefundManagement}
//                             checkedIcon={false}
//                             uncheckedIcon={false}
//                           />
//                         </div>
//                         <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
//                           <span className="text-[#546E7F] text-[14px]">
//                             Stripe Integration Settings
//                           </span>
//                           <ReactSwitch
//                             checked={stripeSettings}
//                             onChange={setStripeSettings}
//                             checkedIcon={false}
//                             uncheckedIcon={false}
//                           />
//                         </div>
//                       </div>
//                     </div>

//                     {/* Franchise Management */}
//                     <div className="mt-4">
//                       <h2 className="!font-semibold !text-[18px] !text-[#252525] mb-4">
//                         Franchise Manaement
//                       </h2>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
//                           <span className="text-[#546E7F] text-[14px]">
//                             View Wallet
//                           </span>
//                           <ReactSwitch
//                             // checked={viewWallet}
//                             // onChange={setViewWallet}
//                             checkedIcon={false}
//                             uncheckedIcon={false}
//                           />
//                         </div>
//                         <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
//                           <span className="text-[#546E7F] text-[14px]">
//                             Manage Payouts
//                           </span>
//                           <ReactSwitch
//                             // checked={managePayouts}
//                             // onChange={setManagePayouts}
//                             checkedIcon={false}
//                             uncheckedIcon={false}
//                           />
//                         </div>
//                         <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
//                           <span className="text-[#546E7F] text-[14px]">
//                             Refund Management
//                           </span>
//                           <ReactSwitch
//                             // checked={refundManagement}
//                             // onChange={setRefundManagement}
//                             checkedIcon={false}
//                             uncheckedIcon={false}
//                           />
//                         </div>
//                       </div>
//                     </div>

//                     {/* Communication Tools */}
//                     <div className="mt-4">
//                       <h2 className="!font-semibold !text-[18px] !text-[#252525] mb-4">
//                         Communication Tools
//                       </h2>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
//                           <span className="text-[#546E7F] text-[14px]">
//                             View Wallet
//                           </span>
//                           <ReactSwitch
//                             // checked={viewWallet}
//                             // onChange={setViewWallet}
//                             checkedIcon={false}
//                             uncheckedIcon={false}
//                           />
//                         </div>
//                         <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
//                           <span className="text-[#546E7F] text-[14px]">
//                             Manage Payouts
//                           </span>
//                           <ReactSwitch
//                             // checked={managePayouts}
//                             // onChange={setManagePayouts}
//                             checkedIcon={false}
//                             uncheckedIcon={false}
//                           />
//                         </div>
//                         <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
//                           <span className="text-[#546E7F] text-[14px]">
//                             Refund Management
//                           </span>
//                           <ReactSwitch
//                             // checked={refundManagement}
//                             // onChange={setRefundManagement}
//                             checkedIcon={false}
//                             uncheckedIcon={false}
//                           />
//                         </div>
//                       </div>

//                       <button className="w-full mt-10 bg-[#003CA6] flex justify-center items-center gap-2 text-white py-3 rounded-[8px] cursor-pointer">
//                         <RefreshCcw />
//                         <span>Update Settings</span>
//                       </button>
//                     </div>
//                   </div>
//                   {/* 2nd--------------- */}
//                 </div>
//               </>
//             )}
//           </div>
//         </div>

//         <div className="bg-[#FFFFFF] rounded-[20px] p-[24px] mb-[20px] border-gray-200 border">
//           <h3 className="mb-[16px] !text-[20px] !font-bold ">Service Area</h3>
//           {/* <img src={map} alt="" /> */}
//         </div>

//         <div className="mb-20">
//           <div className="min-h-screen bg-white p-6 md:p-10">
//             <h1 className="text-2xl font-semibold text-gray-800 mb-6">
//               Booking Schedule
//             </h1>

//             <div className="flex flex-col md:flex-row gap-6">
//               {/* Calendar Section */}
//               <div className="bg-white rounded-xl shadow p-4 w-full md:w-1/3">
//                 <LocalizationProvider dateAdapter={AdapterDateFns}>
//                   <DateCalendar
//                     date={selectedDate}
//                     onChange={(newDate) => setSelectedDate(newDate)}
//                     renderDay={(day, _value, DayComponentProps) => (
//                       <div
//                         className={`${
//                           DayComponentProps.selected
//                             ? "bg-blue-600 text-white"
//                             : ""
//                         } px-2 py-1 rounded-full`}
//                       >
//                         {format(day, "d")}
//                       </div>
//                     )}
//                   />
//                 </LocalizationProvider>
//               </div>

//               {/* Booking Table */}
//               <div className="w-full md:w-2/3 bg-white rounded-xl shadow overflow-x-auto">
//                 <DataTable
//                   columns={columns}
//                   data={bookings}
//                   customStyles={customStyles}
//                   responsive
//                   highlightOnHover
//                   striped={false}
//                   pagination={false}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div>
//           <div className="p-6 space-y-10 bg-gray-50 min-h-screen">
//             {/* Working Hours */}
//             <div className="bg-white p-6 rounded-xl shadow-md">
//               <div className="sm:items-center sm:flex-row flex-col flex justify-between mb-6">
//                 <h2 className="!sm:text-[32px] !text-[20px] font-semibold sm:mb-0 mb-6">Working Hours</h2>
//                 <div className="flex sm:items-center items-start sm:flex-row flex-col gap-4">
//                   {/* <PrimaryButton
//                     btnClass="bg-blue-600 text-white text-sm px-4 py-2"
//                     img={DownloadButton}
//                     btnText="Download report"
//                   /> */}

//                   <span className="text-sm text-gray-600">Nov 23 - Nov 29</span>
//                 </div>
//               </div>
//               {/* Dummy Bar Chart Placeholder */}
//               <div className="h-40 flex items-end justify-between text-center text-xs font-medium text-gray-700">
//                 {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
//                   (day, idx) => (
//                     <div
//                       key={idx}
//                       className="flex flex-col items-center justify-end h-full w-8"
//                     >
//                       <div
//                         className="w-full bg-blue-700 rounded-t-md"
//                         style={{
//                           height: `${[80, 10, 30, 80, 70, 20, 10][idx]}%`,
//                         }}
//                       ></div>
//                       <span className="mt-2">{day}</span>
//                     </div>
//                   )
//                 )}
//               </div>
//               <p className="mt-4 text-sm text-gray-600">
//                 Worked This Week: <strong>27 Hours</strong>
//               </p>
//             </div>

//             {/* Analytics */}
//             <div className="bg-white p-6 rounded-xl shadow-md">
//               <div className="flex sm:items-center sm:flex-row flex-col  justify-between mb-6">
//                 <h2 className="!sm:text-[32px] !text-[20px] font-semibold sm:mb-0 mb-6">Analytics</h2>
//                 <div className="flex sm:flex-row flex-col items-start sm:items-center gap-4">
//                   {/* <PrimaryButton
//                     btnClass="bg-blue-600 text-white text-sm px-4 py-2"
//                     img={DownloadButton}
//                     btnText="Download report"
//                   /> */}
//                   <span className="text-sm text-gray-600">Nov 23 - Nov 29</span>
//                 </div>
//               </div>

//               <Linechart
//                 data={lineData}
//                 legend={true}
//                 color1="#00E096"
//                 color2="#0095FF"
//                 color3="#FF3D71"
//               />

//               {/* Bottom Cards */}
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
//                 <div className="bg-white p-6 rounded-xl shadow-md text-center border">
//                   <div className="text-lg font-semibold">Monthly Earning</div>
//                   <div className="text-3xl font-bold text-green-600 mt-2">
//                     $10K
//                   </div>
//                   <p className="text-xs text-gray-500">Earned This Month</p>
//                   <p className="text-sm text-blue-500 underline mt-4 inline-block">
//                     Report
//                   </p>
//                 </div>

//                 <div className="bg-white p-6 rounded-xl shadow-md border">
//                   <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
//                     <div>
//                       <p>Highest Amount Earned</p>
//                       <p className="font-bold text-gray-900">$4.5K</p>
//                     </div>
//                     <div>
//                       <p>Satisfaction Rate</p>
//                       <p className="font-bold text-gray-900">97%</p>
//                     </div>
//                     <div>
//                       <p>Total Revenue Generated</p>
//                       <p className="font-bold text-gray-900">$25K</p>
//                     </div>
//                     <div>
//                       <p>Recurring Customers</p>
//                       <p className="font-bold text-gray-900">45%</p>
//                     </div>
//                     <div>
//                       <p>Most Selling Area</p>
//                       <p className="font-bold text-gray-900">Baltimore</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </MainLayout>
//   );
// };

// export default FreelancerProfile;

// ----------------------------------------

import SelectField from "@components/SelectField/SelectField";
import userImg from "../../../assets/images/user-profile-img.png";
import { ReactSVG } from "react-svg";
import StartIcon from "../../../assets/svgs/Star 3.svg";
import AvatarPic from "../../../assets/svgs/Avatars.svg";
import CommonInput from "@components/inputs/CommonInput";
import { useState, useRef } from "react";
import AddCircle from "../../../assets/svgs/add-circle.svg";
import ReactSwitch from "react-switch";
import { ArrowLeft, ChevronLeft, RefreshCcw } from "lucide-react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Link } from "react-router-dom";
import MainLayout from "@layouts/MainLayout";
import TcikIcon from "@assets/svgs/icon.svg";
import CrossIcon from "@assets/svgs/cross.svg";
// import map from "@assets/images/Mapsicle Map.png";
import Linechart from "@components/Charts/Linechart";
import { FaDownload } from "react-icons/fa";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { format } from "date-fns";
import { FiCalendar } from "react-icons/fi";
import dayjs, { Dayjs } from "dayjs";
import { PrimaryButton } from "@components/Buttons/CommonButtons";
// import DownloadButton from "@assets/svgs/receive-square.svg";
import CalendarIcon from "@assets/svgs/calendar.svg";
import DataTable from "react-data-table-component";
// import Calender2 from "@assets/svgs/calendar-2.svg";
import { Popper, TextField } from "@mui/material";
import Calender1 from "@assets/svgs/calendar (1).svg";
// import Send from "@assets/svgs/send.svg";
import { DateRange } from "react-date-range";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

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

  const percentage = 80;
  const [viewWallet, setViewWallet] = useState(true);
  const [managePayouts, setManagePayouts] = useState(false);
  const [refundManagement, setRefundManagement] = useState(false);
  const [stripeSettings, setStripeSettings] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date("2025-04-14"));
  const [value, setValue] = useState<Dayjs | null>(null);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short", // 'Nov'
      day: "numeric", // '23'
    });
  };
  const handleDateChange = (e) => {
    setState([e.selection]);
    // getData(e.selection.startDate, e.selection.endDate);
  };
  const handleOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleFieldClick = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const columns = [
    {
      name: "Service Details",
      selector: (row) => row.service,
      sortable: true,
      cell: (row) => <div className="">{row.service}</div>,
      minWidth:"200px"
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
      minWidth:"200px"

    },
    {
      name: "Time",
      selector: (row) => row.time,
      sortable: true,
      cell: (row) => <div className="">{row.time}</div>,
      minWidth:"200px"

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
  const statsData = [
    { label: "Highest Amount Earned", value: "$4.5K" },
    { label: "Satisfaction Rate", value: "97%" },
    { label: "Total Revenue Generated", value: "$25K" },
    { label: "Recurring Customers", value: "45%" },
    { label: "Most Selling Area", value: "Baltimore" },
  ];

  return (
    <MainLayout>
      <div className="default_container min-h-screen">
        <div className="bg-[#F8F9FA] mb-[10px] ">
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

        <div className="bg-[#FFFFFF] rounded-[20px] p-[24px] mb-[20px] border-[#e0e3e8] border">
          <h3 className="mb-[16px] !text-[20px] !font-bold ">Service Area</h3>
          {/* <img src={map} alt="" /> */}
        </div>

        <div className="mb-20 border border-[#e0e3e8] rounded-xl">
          <div className="min-h-screen bg-white border-[#e0e3e8] rounded-xl p-6 md:p-10">
            <h1 className="!text-[20px] !font-bold !text-gray-800 mb-[16px]">
              Booking Schedule
            </h1>

            <div className="w-full mb-[16px]">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div
                  className="w-full bg-gray-100 rounded-xl flex items-center justify-between px-4 py-3 cursor-pointer"
                  onClick={handleOpen}
                >
                  <span
                    className={`text-sm ${
                      value ? "text-gray-800" : "text-gray-500"
                    }`}
                  >
                    {value
                      ? value.format("DD MMM YYYY, hh:mm A")
                      : "Select date & time"}
                  </span>
                  {/* <img src={Calender2} className="text-gray-500 text-xl" /> */}
                </div>

                {/* Invisible DateTimePicker used to render the Popper only */}
                <Popper
                  open={Boolean(anchorEl)}
                  anchorEl={anchorEl}
                  placement="bottom-start"
                >
                  <div className="p-2 bg-white shadow rounded-xl z-50">
                    <DateTimePicker
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                        handleClose();
                      }}
                      closeOnSelect={true}
                      slotProps={{
                        textField: {
                          hiddenLabel: true,
                          variant: "standard",
                        },
                      }}
                    />
                  </div>
                </Popper>
              </LocalizationProvider>
            </div>

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
          <div className=" space-y-10 bg-gray-50 min-h-screen">
            <div className="flex justify-between items-center ">
              <h2 className="!text-[32px] text-[#252525] !font-medium ">
                Working Hours
              </h2>
              <div className="flex gap-2.5">
                <div>
                  <PrimaryButton
                    btnText="Download Report"
                    btnClass="bg-[#003CA6] text-[14px] font-semibold px-[23px] py-[16px] text-white"
                    btnTextClass="ml-2" // optional spacing
                    // img={Send} // your image
                    showImg={true} // THIS IS REQUIRED to show the image
                    imgPosition="left" // or "right"
                    imgClass="w-5 h-5" // control size of image
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    value={`${formatDate(state[0].startDate)} - ${
                      state[0].endDate ? formatDate(state[0].endDate) : ""
                    }`}
                    onClick={handleFieldClick}
                    className="bg-white border border-[#082042] border-[1px] rounded-[8px] p-[13px]"
                    readOnly
                  />
                  <button
                    className="absolute top-4 right-5 cursor-pointer"
                    onClick={handleFieldClick}
                  >
                    <ReactSVG src={CalendarIcon} className="text-light" />
                  </button>
                  {isCalendarVisible && (
                    <div
                      style={{
                        position: "absolute",
                        top: "100%", // Position the calendar below the input field
                        right: "3%",
                        zIndex: 9999999, // Ensure it's above other elements
                      }}
                    >
                      <DateRange
                        editableDateInputs={true}
                        onChange={(item) => {
                          setState([item.selection]);
                          handleDateChange(item);
                        }}
                        moveRangeOnFirstSelection={false}
                        ranges={state}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* Working Hours */}
            <div className="bg-white py-[40px] pl-[37px] pr-[67px] rounded-xl border border-[#e0e3e8]">
              <div className="sm:items-center sm:flex-row flex-col flex justify-between mb-6">
                <h2 className="!text-[20px] text-[#252525] !font-semibold sm:mb-0 !mb-[54px]">
                  Working Hours
                </h2>
              </div>

              <p className="text-[#7A7A7A] mb-[25px] !text-[14px] !font-medium">
                This Week
              </p>

              <div className="h-[230px] flex items-end justify-between mb-[35px] text-center text-xs font-medium text-gray-700">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                  (day, idx) => {
                    const barHeights = [100, 18, 45, 100, 70, 20, 10]; // in %
                    const topLabels = [
                      "8:00",
                      "1:00",
                      "4:00",
                      "8:00",
                      "6:00",
                      "2:00",
                      "1:00",
                    ];

                    return (
                      <div
                        key={idx}
                        className="flex flex-col items-center justify-end h-full w-8"
                      >
                        {/* Top label */}
                        <span className="mb-[21px] text-[12px] font-medium">
                          {topLabels[idx]}
                        </span>

                        {/* Gray bar container */}
                        <div className="w-full h-full bg-[#F6F4FE] rounded-[3px] flex items-end">
                          {/* Blue filled bar */}
                          <div
                            className="w-full bg-[#003CA6] rounded-[3px]"
                            style={{ height: `${barHeights[idx]}%` }}
                          ></div>
                        </div>

                        {/* Day label */}
                        <span className="mt-[21px]">{day}</span>
                      </div>
                    );
                  }
                )}
              </div>

              <p className="mt-4 font-medium text-[16px] text-[#252525]">
                Worked This Week: <strong>27 Hours</strong>
              </p>
            </div>

            {/* Analytics */}
            <div>
              <div className="flex justify-between items-center mb-[20px]">
                <h2 className="!text-[32px] text-[#252525] !font-medium sm:mb-0">
                  Analytics
                </h2>
                <div className="flex gap-2.5">
                  <div>
                    <PrimaryButton
                      btnText="Download Report"
                      btnClass="bg-[#003CA6] text-[14px] font-semibold px-[23px] py-[16px] text-white"
                      btnTextClass="ml-2" // optional spacing
                      // img={Send} // your image
                      showImg={true} // THIS IS REQUIRED to show the image
                      imgPosition="left" // or "right"
                      imgClass="w-5 h-5" // control size of image
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      value={`${formatDate(state[0].startDate)} - ${
                        state[0].endDate ? formatDate(state[0].endDate) : ""
                      }`}
                      onClick={handleFieldClick}
                      className="bg-white border border-[#082042] border-[1px] rounded-[8px] p-[13px]"
                      readOnly
                    />
                    <button
                      className="absolute top-4 right-5 cursor-pointer"
                      onClick={handleFieldClick}
                    >
                      <ReactSVG src={CalendarIcon} className="text-light" />
                    </button>
                    {isCalendarVisible && (
                      <div
                        style={{
                          position: "absolute",
                          top: "100%", // Position the calendar below the input field
                          right: "3%",
                          zIndex: 9999999, // Ensure it's above other elements
                        }}
                      >
                        <DateRange
                          editableDateInputs={true}
                          onChange={(item) => {
                            setState([item.selection]);
                            handleDateChange(item);
                          }}
                          moveRangeOnFirstSelection={false}
                          ranges={state}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl mb-[20px] border border-[#e0e3e8]">
                <div className="flex sm:items-center sm:flex-row flex-col  justify-between mb-6">
                  <h2 className="!sm:text-[32px] !text-[20px] font-semibold sm:mb-0 mb-6">
                    Analytics
                  </h2>
                  <div className="flex sm:flex-row flex-col items-start sm:items-center gap-5">
                    <div className="flex items-center gap-1.5">
                      <div className="bg-[#00D5D2] rounded-[3px] w-[16px] h-[16px] "></div>
                      <span className="text-[#252525] text-[16px] font-medium ">
                        $100K+Sales{" "}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <div className="bg-[#F9E844] rounded-[3px] w-[16px] h-[16px] "></div>
                      <span className="text-[#252525] text-[16px] font-medium ">
                        278 Bookings Completed
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <div className="bg-[#FC5A41] rounded-[3px] w-[16px] h-[16px] "></div>
                      <span className="text-[#252525] text-[16px] font-medium ">
                        5 Canceled Bookings
                      </span>
                    </div>
                  </div>
                </div>

                <Linechart
                  data={lineData}
                  legend={false}
                  color1="#00D5D2"
                  color2="#F9E844"
                  color3="#FC5A41"
                />

                {/* Bottom Cards */}
              </div>
              <div className="grid grid-cols-4 gap-6 mt-6 mb-5">
                {/* Left Card - Monthly Earning */}
                <div className="bg-white p-6 rounded-xl flex flex-col justify-center col-span-1 shadow-md border border-[#e0e3e8]">
                  <div className="w-[80%] mx-auto">
                    <CircularProgressbar
                      value={percentage}
                      text={
                        <>
                          <tspan x="50%" dy="-0.2em" fontSize="18px">
                            $10K
                          </tspan>
                          <tspan x="50%" dy="2.4em" fontSize="6px">
                            Earned
                          </tspan>
                        </>
                      }
                      styles={buildStyles({
                        rotation: 0.25, // rotates starting point so it ends on the right
                        strokeLinecap: "round",
                        textSize: "16px",
                        pathColor: "#07DB9B",
                        textColor: "#252525",
                        trailColor: "#e6f5f0",
                      })}
                    />
                  </div>

                  <p className="text-sm text-blue-500 cursor-pointer underline mt-4">
                    Report
                  </p>
                </div>

                {/* Right Card - Stats */}
                <div className="bg-white p-6 col-span-3 rounded-xl shadow-md border border-[#e0e3e8]">
                  <div className="space-y-4 text-sm text-gray-700">
                    {statsData.map((item, index) => (
                      <div
                        key={index}
                        className="flex pb-[20px] pt-[10px] border-b border-[#e0e3e8] justify-between items-center"
                      >
                        <p>{item.label}</p>
                        <p className="w-[143px] h-[40px] bg-[#F6FAFE] rounded-md font-bold text-[18px] text-center flex justify-center items-center text-[#252525] text-sm">
                          {item.value}
                        </p>
                      </div>
                    ))}
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
