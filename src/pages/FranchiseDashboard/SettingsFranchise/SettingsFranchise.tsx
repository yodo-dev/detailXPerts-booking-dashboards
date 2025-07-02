// import React, { useState } from "react";
// import { ReactSVG } from "react-svg";
// import MainLayout from "@layouts/MainLayout";
// import ReactSwitch from "react-switch";
// import { PrimaryButton } from "@components/Buttons/CommonButtons";
// import refreshIcon from "../../../assets/svgs/refresh-2.svg";
// // import black1 from "../../assets/svgs/settings-1-black.svg";
// // import white1 from "../../assets/svgs/settings-1-white.svg";
// // import black2 from "../../assets/svgs/settings-2-black.svg";
// // import white2 from "../../assets/svgs/settings-2-white.svg";
// // import black3 from "../../assets/svgs/settings-3-black.svg";
// // import white3 from "../../assets/svgs/settings-3-white.svg";
// // import black4 from "../../assets/svgs/settings-4-black.svg";
// // import white4 from "../../assets/svgs/settings-4-white.svg";
// // import black5 from "../../assets/svgs/settings-5-black.svg";
// // import black6 from "../../assets/svgs/settings-6-black.svg";
// // import black7 from "../../assets/svgs/settings-7-black.svg";

// const Settings: React.FC = () => {
//   const [tabs, setTabs] = useState(0);
//   const [activeTab, setActiveTab] = useState<
//     | "permission"
//     | "booking"
//     | "payments"
//     | "notifications"
//     | "roles"
//     | "legal"
//     | "integrations"
//   >("permission");

//   const handleTabChange = (index: number, tabName: typeof activeTab) => {
//     setTabs(index);
//     setActiveTab(tabName);
//   };

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

//   return (
//     <MainLayout>
//       <div className="default_container ">
//         <h2 className="mb-[20px]">Settingsppppp</h2>

//         <div className=" gap-2 w-[100%] bg-white px-[5px]">
//           <div className="p-4 rounded-[15px] border-[#afacac56] space-y-6 max-w-full">
//             {/* User Management */}
//             <div className="">
//               <h2 className="!font-semibold !text-[18px] mb-4 !text-[#252525]">
//                 Password Policies
//               </h2>
//               <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3 ">
//                 <div className="col-span-1">
//                   <div className="flex justify-between items-center bg-[#F7F8FC]  p-3 rounded-[5px] ">
//                     <span className="text-[#546E7F] text-[14px]">
//                       View Users
//                     </span>
//                     <ReactSwitch
//                       checked={viewUsers}
//                       onChange={setViewUsers}
//                       checkedIcon={false}
//                       uncheckedIcon={false}
//                     />
//                   </div>
//                 </div>

//                 <div className="col-span-1">
//                   <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
//                     <span className="text-[#546E7F] text-[14px]">
//                       Add/Edit Users
//                     </span>
//                     <ReactSwitch
//                       checked={addEditUsers}
//                       onChange={setAddEditUsers}
//                       checkedIcon={false}
//                       uncheckedIcon={false}
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3 mt-4 ">
//                 <div className="col-span-1">
//                   <div className="flex justify-between items-center bg-[#F7F8FC]  p-3 rounded-[5px] ">
//                     <span className="text-[#546E7F] text-[14px]">
//                       View Users
//                     </span>
//                     <ReactSwitch
//                       checked={viewUsers}
//                       onChange={setViewUsers}
//                       checkedIcon={false}
//                       uncheckedIcon={false}
//                     />
//                   </div>
//                 </div>

//                 <div className="col-span-1">
//                   <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
//                     <span className="text-[#546E7F] text-[14px]">
//                       Add/Edit Users
//                     </span>
//                     <ReactSwitch
//                       checked={addEditUsers}
//                       onChange={setAddEditUsers}
//                       checkedIcon={false}
//                       uncheckedIcon={false}
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3 mt-4 ">
//                 <div className="col-span-1">
//                   <div className="flex justify-between items-center bg-[#F7F8FC]  p-3 rounded-[5px] ">
//                     <span className="text-[#546E7F] text-[14px]">
//                       View Users
//                     </span>
//                     <ReactSwitch
//                       checked={viewUsers}
//                       onChange={setViewUsers}
//                       checkedIcon={false}
//                       uncheckedIcon={false}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="border-t mt-7 border-[#acacac3a]"></div>

//             {/* Job Management */}
//             <div>
//               <h2 className="!font-semibold !text-[18px] mb-4 !text-[#252525]">
//                 Access Logs
//               </h2>
//               <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-3 ">
//                 <div className="col-span-1">
//                   <div className="flex justify-between items-center bg-[#F7F8FC]  p-3 rounded-[5px] ">
//                     <span className="text-[#546E7F] text-[14px]">
//                       View Users
//                     </span>
//                     <ReactSwitch
//                       checked={viewUsers}
//                       onChange={setViewUsers}
//                       checkedIcon={false}
//                       uncheckedIcon={false}
//                     />
//                   </div>
//                 </div>

//                 <div className="col-span-1">
//                   <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
//                     <span className="text-[#546E7F] text-[14px]">
//                       Add/Edit Users
//                     </span>
//                     <ReactSwitch
//                       checked={addEditUsers}
//                       onChange={setAddEditUsers}
//                       checkedIcon={false}
//                       uncheckedIcon={false}
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-3 mt-4 ">
//                 <div className="col-span-1">
//                   <div className="flex justify-between items-center bg-[#F7F8FC]  p-3 rounded-[5px] ">
//                     <span className="text-[#546E7F] text-[14px]">
//                       View Users
//                     </span>
//                     <ReactSwitch
//                       checked={viewUsers}
//                       onChange={setViewUsers}
//                       checkedIcon={false}
//                       uncheckedIcon={false}
//                     />
//                   </div>
//                 </div>

//                 <div className="col-span-1">
//                   <div className="flex justify-between items-center bg-[#F7F8FC] p-3 rounded-[5px] ">
//                     <span className="text-[#546E7F] text-[14px]">
//                       Add/Edit Users
//                     </span>
//                     <ReactSwitch
//                       checked={addEditUsers}
//                       onChange={setAddEditUsers}
//                       checkedIcon={false}
//                       uncheckedIcon={false}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="border-t mt-7 mb-[50px] grid  grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-3 pt-[50px] border-[#acacac3a]">
//               <div className="col-span-1">
//                 <h2 className="!text-[25px] !font-semibold">
//                   2 Factor Authentication (2FA)
//                 </h2>
//               </div>
//               <div className="col-span-1">
//                 <div className="flex justify-end me-3">
//                   <ReactSwitch
//                     checked={viewJobStatus}
//                     onChange={setViewJobStatus}
//                     checkedIcon={false}
//                     uncheckedIcon={false}
//                   />
//                 </div>
//               </div>
//             </div>

//             <PrimaryButton
//               btnText="Update Settings"
//               showImg={true}
//               img={refreshIcon}
//               btnClass="bg-[#003CA6] rounded-xl text-white !px-[22px] py-[12px] !w-fit text-[14px]"
//             />
//           </div>
//         </div>
//       </div>
//     </MainLayout>
//   );
// };

// export default Settings;


import React, { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import { LogOut, Menu, X } from "lucide-react";
import MainLayout from "@layouts/MainLayout";
import black1 from "@assets/svgs/settings-1-black.svg";
import white1 from "@assets/svgs/settings-1-white.svg";
import black2 from "@assets/svgs/settings-2-black.svg";
import white2 from "@assets/svgs/settings-2-white.svg";
import black3 from "@assets/svgs/settings-3-black.svg";
import white3 from "@assets/svgs/settings-3-white.svg";
import black4 from "@assets/svgs/settings-4-black.svg";
import white4 from "@assets/svgs/settings-4-white.svg";
import black5 from "@assets/svgs/settings-5-black.svg";
import black6 from "@assets/svgs/settings-6-black.svg";
import black7 from "@assets/svgs/settings-7-black.svg";
import roles2 from "@assets/svgs/roles-2.svg";
import legal2 from "@assets/svgs/legal-2.svg";

import integration2 from "@assets/svgs/integration-2.svg";
import RolePermission from "./RolePermission";
import Booking from "./Booking";
import Payment from "./Payment";
import Notification from "./Notification";
import Roles from "./Roles";
import Legal from "./Legal";
import Integrations from "./Integrations";
import LogoutIcon from "@assets/svgs/logout.svg";

const Settings: React.FC = () => {
  const [tabs, setTabs] = useState(0);
  const [activeTab, setActiveTab] = useState<
    | "permission"
    | "booking"
    | "payments"
    | "notifications"
    | "roles"
    | "legal"
    | "integrations"
  >("permission");

  const [showSidebar, setShowSidebar] = useState(false);

  const handleTabChange = (index: number, tabName: typeof activeTab) => {
    setTabs(index);
    setActiveTab(tabName);
    setShowSidebar(false);
  };

  // Optional: Close sidebar if screen gets resized
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setShowSidebar(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MainLayout>
      <div className="default_container relative">
        {/* Header */}
        <div className="flex items-center gap-3 mb-[20px]">
          <div className="lg:hidden">
            <Menu
              className="cursor-pointer size-8"
              onClick={() => setShowSidebar(true)}
            />
          </div>
          <h2>Settings</h2>
        </div>

        <div className="flex gap-3 w-full relative common_box ">
          <div
            className={`
              flex flex-col bg-white z-40 w-[290px] 
              lg:relative lg:translate-x-0 lg:transition-none
              fixed top-0 h-full left-0 transition-transform duration-300 ease-in-out
               ${showSidebar ? "translate-x-0" : "-translate-x-full"}
            `}
          >
            <div className="lg:hidden flex justify-end p-4">
              <X
                className="cursor-pointer"
                onClick={() => setShowSidebar(false)}
              />
            </div>

            <div className="mt-[20px] px-2">
              {/* <SidebarButton
                label="Role Permissions"
                index={0}
                tab="permission"
                iconActive={white1}
                iconInactive={black1}
                activeTab={tabs}
                handleTabChange={handleTabChange}
              /> */}
              <SidebarButton
                label="Booking"
                index={1}
                tab="booking"
                iconActive={white2}
                iconInactive={black2}
                activeTab={tabs}
                handleTabChange={handleTabChange}
              />
              <SidebarButton
                label="Payments"
                index={2}
                tab="payments"
                iconActive={white3}
                iconInactive={black3}
                activeTab={tabs}
                handleTabChange={handleTabChange}
              />
              <SidebarButton
                label="Notifications"
                index={3}
                tab="notifications"
                iconActive={white4}
                iconInactive={black4}
                activeTab={tabs}
                handleTabChange={handleTabChange}
              />
              <SidebarButton
                label="Roles"
                index={4}
                tab="roles"
                iconActive={roles2}
                iconInactive={black5}
                activeTab={tabs}
                handleTabChange={handleTabChange}
              />
              {/* <SidebarButton
                label="Legal"
                index={5}
                tab="legal"
                iconActive={legal2}
                iconInactive={black6}
                activeTab={tabs}
                handleTabChange={handleTabChange}
              /> */}
              <SidebarButton
                label="Integrations"
                index={6}
                tab="integrations"
                iconActive={integration2}
                iconInactive={black7}
                activeTab={tabs}
                handleTabChange={handleTabChange}
              />

              <SidebarButton
                label="Logout"
                index={7}
                tab="logout"
                iconActive={LogoutIcon}
                iconInactive={LogoutIcon}
                activeTab={tabs}
                handleTabChange={handleTabChange}
                textColorRed={true}
                disabled={true}
                
              />
            </div>
          </div>

          <div className="mt-[20px] w-full">
            {activeTab === "permission" && <RolePermission />}
            {activeTab === "booking" && <Booking />}
            {activeTab === "payments" && <Payment />}
            {activeTab === "notifications" && <Notification />}
            {activeTab === "roles" && <Roles />}
            {activeTab === "legal" && <Legal />}
            {activeTab === "integrations" && <Integrations />}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

const SidebarButton = ({
  label,
  index,
  tab,
  iconActive,
  iconInactive,
  activeTab,
  handleTabChange,
  textColorRed,
  disabled = false,
}: {
  label: string;
  index: number;
  tab: any;
  iconActive: string;
  iconInactive: string;
  activeTab: number;
  textColoRed: boolean;
  handleTabChange: (index: number, tab: any) => void;
}) => (
  <button
    onClick={() => handleTabChange(index, tab)}
    disabled={disabled}
    className={`text-start cursor-pointer flex items-center gap-2 font-medium rounded-lg text-[16px] px-5 py-[16px] me-2 mb-2 w-full focus:outline-none ${
      activeTab === index ? "bg-[#003CA6] text-white" : "text-black"
    } ${textColorRed ? "text-red-500" : ""} `}
  >
    <ReactSVG
      width={24}
      src={activeTab === index ? iconActive : iconInactive}
    />
    {label}
  </button>
);

export default Settings;
