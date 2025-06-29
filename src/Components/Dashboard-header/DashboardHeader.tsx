import React, { useRef, useState } from "react";
import DetailXpertsLogo from "@assets/svgs/detailXperts-logo.svg";
import { v4 as uuid } from "uuid";
import { Link, useLocation } from "react-router-dom";
import settingIcon from "@assets/svgs/setting-2.svg";
import notificationIcon from "@assets/svgs/notification.svg";
import userImg from "@assets/images/user-profile-img.png";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import "./DashboardHeader.css";
import useUserInfoStore from "../../Store/Store";
import ProfileDropdown from "@components/ProfileDropdown/ProfileDropdown";
import userDummy from "@assets/images/user-dummy-img.jpg";

const DashboardHeader: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { User, logout, isAuthenticated } = useUserInfoStore();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("userInfo")).user
  );

  const dropdownRef = useRef(null);

  const role = User?.role_id;
  // const role = 2;

  if (isAuthenticated == false) {
    localStorage.clear();
  }

  const headerLinks = [
    { id: uuid(), path: "/", name: "Dashboard" },
    { id: uuid(), path: "/booking-management", name: "Booking" },
    { id: uuid(), path: "/frenchise-management", name: "Franchise" },
    { id: uuid(), path: "/freelancer-management", name: "Freelancer" },

    { id: uuid(), path: "/detailers-management", name: "Detailers" },
    { id: uuid(), path: "/customers-management", name: "Customers" },
    { id: uuid(), path: "/payment-management", name: "Payments" },
    { id: uuid(), path: "/services-management", name: "Services" },

    { id: uuid(), path: "/feedback-support", name: "Feedback" },
    { id: uuid(), path: "/user-management", name: "User Management" },
    { id: uuid(), path: "/reports", name: "Reports" },
  ];
  return (
    <div className="bg-[var(--primary-color)]  py-5 mb-12 mb-[40px] rounded-b-[40px] ">
      <div className="default_container flex items-center justify-between">
        <div className="flex items-center gap-4 lg:gap-[40px] header">
          <Link to="/">
            <img
              src={DetailXpertsLogo}
              alt="DetailXperts"
              className="w-[50px] h-[50px]"
            />
          </Link>
          <div className="hidden lg:flex gap-4 ">
            {headerLinks.map((link) => {
              const isActive = location.pathname === link.path;

              if (link.name === "Reports" && role == 1) {
                return null; // Skip rendering the link if condition is met
              }

              if (link.name === "Feedback & Support" && role == 2) {
                // return null; // Skip rendering the link if condition is met
              }

              if (link.name === "Franchise" && role !== 1) {
                return null; // Skip rendering the link if condition is met
              }
              if (link.name === "Feedback" && role !== 1) {
                return null; // Skip rendering the link if condition is met
              }

              if (link.name === "Freelancer" && role !== 1) {
                return null; // Skip rendering the link if condition is met
              }

              if (link.name === "User Management" && role !== 5) {
                return null; // Skip rendering the link if condition is met
              }

              if (link.name === "Services" && role !== 1) {
                return null; // Skip rendering the link if condition is met
              }

              return (
                <Link
                  key={link.id}
                  to={link.path}
                  className={`relative text-white font-normal label_link ${
                    isActive
                      ? '!font-bold after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-white pb-[7px]'
                      : "!font-normal"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-[18px]">
          <Link to="/settings">
            <div className="bg-[var(--dull-white-bg)] w-[48px] h-[48px] flex items-center justify-center rounded-full">
              <img
                src={settingIcon}
                alt="Profile Settings"
                className="size-6"
              />
            </div>
          </Link>

          <Link to="/notifications">
            <div className="bg-[var(--dull-white-bg)] w-[48px] h-[48px] flex items-center justify-center rounded-full">
              <img
                src={notificationIcon}
                alt="Notifications"
                className="size-6 object-cover"
              />
            </div>
          </Link>

          <button
            className="cursor-pointer"
            onClick={() => setShowProfileDropdown(!showProfileDropdown)}
          >
            {/* <img
              src={`${import.meta.env.VITE_APP_API_IMG_URL}${userInfo?.image}`}
              alt="Profile"
              className="w-[60px] h-[60px] rounded-full object-cover"
              style={{ border: "1px solid rgba(0,0,0,10%)" }}
            /> */}

            <img
              src={
                userInfo?.image
                  ? `${import.meta.env.VITE_APP_API_IMG_URL}${userInfo.image}`
                  : userDummy // fallback if no image in data
              }
              alt="Profile"
              className="w-[60px] h-[60px] rounded-full object-cover"
              style={{ border: "1px solid rgba(0,0,0,10%)" }}
              onError={(e) => {
                e.currentTarget.src = "/path-to-dummy-image/userDummy.png"; // fallback if image fails to load
              }}
            />
          </button>

          {/* <Link to="/profile">
           
            <img
              src={`${import.meta.env.VITE_APP_API_IMG_URL}${userInfo?.image}`}
              alt="Profile"
              className="w-[60px] h-[60px] rounded-full object-cover"
              style={{ border: "1px solid rgba(0,0,0,10%)" }}
            />
          </Link> */}

          {showProfileDropdown && (
            <div ref={dropdownRef} className="absolute right-5 top-13">
              {" "}
              <ProfileDropdown />{" "}
            </div>
          )}

          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="size-9 text-white cursor-pointer " />
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className="fixed top-0 right-0 w-[80%] h-full bg-white z-[9999] shadow-lg flex flex-col px-6 py-8"
        >
          <div className="flex justify-end mb-6">
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X className="size-7 cursor-pointer" />
            </button>
          </div>

          {headerLinks.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={` mb-4 text-lg ${
                location.pathname === link.path
                  ? "font-semibold text-[var(--primary-color)]"
                  : "text-gray-800"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default DashboardHeader;
