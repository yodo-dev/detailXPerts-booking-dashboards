import React, { useState } from "react";
// import DashboardLayout from "../../../Layouts/DashboardLayout";
import { users } from "./Components/Components/UserData";
import ChatSidebar from "./Components/Components/ChatSideBar";
import ChatWindow from "./Components/Components/ChatWindow";

const Chat = () => {
  const [selectedUserId, setSelectedUserId] = useState(users[0]?.id);

  const handleChatClick = (userId: string) => {
    setSelectedUserId(userId);
  };

  const selectedUser = users.find((user) => user.id === selectedUserId);

  return (
    <>
      <h3 className="mb-5">Messages</h3>
      <div className="flex h-[calc(100vh-100px)] border-2 border-[var(--primary-text-color)] overflow-hidden rounded-[10px]">
        <ChatSidebar label="Inbox" className="bg-white" />
        <ChatWindow className="bg-[#EFFAFD]" />
      </div>
    </>
  );
};

export default Chat;
