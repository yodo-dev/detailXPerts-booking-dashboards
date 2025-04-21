import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import MainLayout from "@layouts/MainLayout";
import black1 from "../../assets/svgs/settings-1-black.svg";
import white1 from "../../assets/svgs/settings-1-white.svg";
import black2 from "../../assets/svgs/settings-2-black.svg";
import white2 from "../../assets/svgs/settings-2-white.svg";
import black3 from "../../assets/svgs/settings-3-black.svg";
import white3 from "../../assets/svgs/settings-3-white.svg";
import black4 from "../../assets/svgs/settings-4-black.svg";
import white4 from "../../assets/svgs/settings-4-white.svg";
import black5 from "../../assets/svgs/settings-5-black.svg";
import black6 from "../../assets/svgs/settings-6-black.svg";
import black7 from "../../assets/svgs/settings-7-black.svg";
import RolePermission from "./Components/RolePermission";
import Booking from "./Components/Booking";
import Payment from "./Components/Payment";
import Notification from "./Components/Notification";
import Roles from "./Components/Roles";
import Legal from "./Components/Legal";
import Integrations from "./Components/Integrations";

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

  const handleTabChange = (index: number, tabName: typeof activeTab) => {
    setTabs(index);
    setActiveTab(tabName);
  };

  return (
    <MainLayout>
      <div className="px-[40px]">
        <h2 className="mb-[20px]">Setting</h2>

        <div className="flex gap-2 w-[100%]">

        <div className="w-[17%] flex flex-col mt-[20px]">

          <button
            onClick={() => handleTabChange(0, "permission")}
            className={`text-start cursor-pointer flex items-center gap-2 font-medium rounded-lg text-sm px-5 py-[16px] me-2 mb-2 w-[226px] focus:outline-none ${
              tabs === 0 ? "bg-[#003CA6] text-white" : " !text-black"
            }`}
          >
            <ReactSVG width={24} src={tabs === 0 ? white1 : black1} />
            Role Permissions
          </button>

          <button
            onClick={() => handleTabChange(1, "booking")}
            className={`text-start cursor-pointer flex items-center gap-2 font-medium rounded-lg text-sm px-5 py-[16px] me-2 mb-2 w-[226px] focus:outline-none ${
              tabs === 1 ? "bg-[#003CA6] text-white" : " !text-black"
            }`}
          >
            <ReactSVG width={24} src={tabs === 1 ? white2 : black2} />
            Booking
          </button>

          <button
            onClick={() => handleTabChange(2, "payments")}
            className={`text-start cursor-pointer flex items-center gap-2 font-medium rounded-lg text-sm px-5 py-[16px] me-2 mb-2 w-[226px] focus:outline-none ${
              tabs === 2 ? "bg-[#003CA6] text-white" : " !text-black"
            }`}
          >
            <ReactSVG width={24} src={tabs === 2 ? white3 : black3} />
            Payments
          </button>

          <button
            onClick={() => handleTabChange(3, "notifications")}
            className={`text-start cursor-pointer flex items-center gap-2 font-medium rounded-lg text-sm px-5 py-[16px] me-2 mb-2 w-[226px] focus:outline-none ${
              tabs === 3 ? "bg-[#003CA6] text-white" : " !text-black"
            }`}
          >
            <ReactSVG width={24} src={tabs === 3 ? white4 : black4} />
            Notifications
          </button>

          <button
            onClick={() => handleTabChange(4, "roles")}
            className={`text-start cursor-pointer flex items-center gap-2 font-medium rounded-lg text-sm px-5 py-[16px] me-2 mb-2 w-[226px] focus:outline-none ${
              tabs === 4 ? "bg-[#003CA6] text-white" : " !text-black"
            }`}
          >
            <ReactSVG width={24} src={black5} />
            Roles
          </button>

          <button
            onClick={() => handleTabChange(5, "legal")}
            className={`text-start cursor-pointer flex items-center gap-2 font-medium rounded-lg text-sm px-5 py-[16px] me-2 mb-2 w-[226px] focus:outline-none ${
              tabs === 5 ? "bg-[#003CA6] text-white" : " !text-black"
            }`}
          >
            <ReactSVG width={24} src={black6} />
            Legal
          </button>

          <button
            onClick={() => handleTabChange(6, "integrations")}
            className={`text-start cursor-pointer flex items-center gap-2 font-medium rounded-lg text-sm px-5 py-[16px] me-2 mb-2 w-[226px] focus:outline-none ${
              tabs === 6 ? "bg-[#003CA6] text-white" : " !text-black"
            }`}
          >
            <ReactSVG width={24} src={black7} />
            Integrations
          </button>
        </div>

        <div className="mt-[20px] w-[80%]">

        {activeTab === "permission" ? <RolePermission /> : ""}
        {activeTab === "booking" ? <Booking /> : ""}
        {activeTab === "payments" ? <Payment /> : ""}
        {activeTab === "notifications" ? <Notification /> : ""}
        {activeTab === "roles" ? <Roles /> : ""}
        {activeTab === "legal" ? <Legal /> : ""}
        {activeTab === "integrations" ? <Integrations /> : ""}

        </div>

        </div>
      </div>
    </MainLayout>
  );
};

export default Settings;
