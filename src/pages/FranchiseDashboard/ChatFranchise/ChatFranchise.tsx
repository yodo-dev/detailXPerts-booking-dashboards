import React, { useState } from "react";
// import DashboardLayout from "../../../Layouts/DashboardLayout";
import { users } from "./Components/UserData";
import ChatSidebar from "./Components/ChatSideBar";
import ChatWindow from "./Components/ChatWindow";
import { ReactSVG } from "react-svg";
import ArrowLeft from "@assets/svgs/arrowLeftFull.svg";
import { Link } from "react-router-dom";
import MainLayout from "@layouts/MainLayout";

const ChatFranchise = () => {
  const [selectedUserId, setSelectedUserId] = useState(users[0]?.id);

  const handleChatClick = (userId: string) => {
    setSelectedUserId(userId);
  };

  const selectedUser = users.find((user) => user.id === selectedUserId);

  return (
    <MainLayout>
      <div className="p-[20px]">
        <div className="flex mb-5 gap-4  items-center">
          <ReactSVG
            className="cursor-pointer md:hidden block"
            src={ArrowLeft}
          />
          <h3 className=" flex gap-3"> Messages</h3>
        </div>
        <div className="flex h-[calc(100vh-100px)] overflow-hidden rounded-[10px]">
          <ChatSidebar label="Inbox" className="bg-white" />
          <ChatWindow className="bg-[#EFFAFD]" />
        </div>
      </div>
    </MainLayout>
  );
};

export default ChatFranchise;
