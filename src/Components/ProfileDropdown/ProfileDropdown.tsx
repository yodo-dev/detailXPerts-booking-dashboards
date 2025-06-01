import React from "react";
import { Link } from "react-router-dom";
// import UserIcon from "../assets/svgs/user-img.svg";
import { ReactSVG } from "react-svg";
import { User2 } from "lucide-react";
import useUserInfoStore from "../../Store/Store";

const ProfileDropdown = ({ handleLogout }) => {
  const { User, logout } = useUserInfoStore();

  const LogoutUser=()=>{
    logout()
  }

  return (
    <div
      className="bg-white rounded-xl absolute right-8 top-6 mt-2 z-10 w-[370px] py-7 px-5 pb-3"
      style={{ boxShadow: "0px 4px 60px 0px #04060F14" }}
    >
      <div className="flex items-start gap-3 border-b border-gray-200 pb-6 mb-6">
        {/* <img src={UserIcon} alt="User" className="w-[45px] h-[45px] mt-1" /> */}
        <div>
          <p className="text-[16px] text-black font-medium">
            {/* {user?.first_name} {user?.last_name} */}
            {User?.first_name} {User?.last_name}
          </p>
          {/* <p className="text-[#727272] text-[16px]">{user?.email}</p> */}
          <p className="text-[#727272] text-[16px]">{User?.email}</p>
        </div>
      </div>

      <div className="text-[#727272] text-[16px]">
        <Link
          to="/profile"
          className="flex items-center gap-2 hover:text-black mb-4"
        >
          {/* <img src={userSmallIcon} alt="Profile" className="w-5 h-5" /> */}
          <span>Profile Settings</span>
        </Link>

        <button
          onClick={LogoutUser}
          className="flex items-center gap-2 hover:text-black mb-3 cursor-pointer"
        >
          {/* <img src={logoutImg} alt="Logout" className="w-5 h-5" /> */}
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileDropdown;
