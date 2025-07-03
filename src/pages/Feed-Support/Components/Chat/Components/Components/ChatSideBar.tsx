import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import userDummy from "@assets/images/user-dummy-img.jpg";
// import profilePlaceholder from "@assets/images/profile-placeholder.jpg";
import { useChat } from "../../../../../../Hooks/useChatSupport";
import chatStore from "../../../../../../Store/ChatStore";
import SkeltonLoader from "@components/SkeltonLoader";
import ChatSidebarSkeleton from "./SkeltonChat/ChatSkelton";
function ChatSidebar({ label, className }) {
  // const { data, isLoading, error } = useQuery(["chatGetPeople"], ChatSupport);
  const {
    data,
    isLoading,
    isError: isErrorSuggestions,
    error: errorSuggestions,
  } = useChat({ type: "SUGGESTION" });

  const [chatId, setChatId] = useState();

  const {
    currentChatId,
    setCurrentChatId,
    setCurrentChatUserId,
    currentChatUserId,
  } = chatStore();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  // useEffect(() => {
  //   if (data && data.length > 0) {
  //     setCurrentChatId(data[0].id);
  //   }
  // }, [data]);

  useEffect(() => {
    if (data && data.length > 0 && userInfo?.user?.id) {
      const firstChat = data[0];
      const otherParticipant = firstChat?.participants?.find(
        (participant) => participant?.id !== userInfo?.user?.id
      );

      // Only set if it's not already the current state
      // if (currentChatId !== firstChat?.id) {
      //   setCurrentChatId(firstChat?.id);
      // }

      if (currentChatUserId !== otherParticipant?.id) {
        // setCurrentChatUserId(otherParticipant?.id);
      }
    }
  }, [data, userInfo?.user?.id]);

  return (
    <aside
      className={`w-1/3 max-w-sm border-r !bg-[#EFFAFD] md:block hidden border-gray-200 p-4 pt-2 ${className}`}
    >
      <div className="flex justify-between">
        <h4 className="text-lg font-bold text-[24px] mb-4 mt-4">{label}</h4>
      </div>

      <div className="space-y-4 overflow-y-auto h-[calc(100vh-150px)] pb-6">
        {/* {data && data.length > 0 ? (
          data?.map((_, index) => (
            <div
              key={index}
              className="flex cursor-pointer items-start gap-3 cursor-pointer hover:bg-gray-200 p-2 rounded-lg"
              onClick={() => {
                setCurrentChatId(_?.id);
                // setCurrentChatUserId(_?.participants?.filter((participant)=>(userInfo?.user?.id !== participant?.id)))
                const otherParticipant = _?.participants?.find(
                  (participant) => userInfo?.user?.id !== participant?.id
                );
                
                setCurrentChatUserId(otherParticipant?.id);
              }}
            >
              <img
                src={
                  _.participants[0]?.image
                    ? `${import.meta.env.VITE_APP_API_IMG_URL}${
                        _.participants[0].image
                      }`
                    : userDummy
                }
                alt="avatar"
                className="w-[56px] h-[56px] rounded-full object-cover"
              />

              <div className="flex items-center gap-9 w-full justify-between">
                <div>
                  <p className="bold_para capitalize">
                    {_?.participants[0]?.first_name}{" "}
                    {_.participants[0]?.last_name}
                  </p>
                  <p className="sm_para line-clamp-1 text-gray-500">
                    {_.messages[0]?.content}
                  </p>
                </div>

                <div className="flex flex-col items-end justify-between gap-1">
                  <p className="sm_para text-xs text-gray-400">12:45</p>
                  <div className="bg-[var(--red)] size-4 rounded-full flex items-center justify-center p-[10px]">
                    <span className="font-normal text-[12px] leading-[1] tracking-normal font-segoe text-white">
                      1
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="">
            <h3 className="text-center font-thin !text-[18px] mt-50">
              No Conversation Found
            </h3>
          </div>
        )} */}

        {/* {data && data.length > 0 ? (
          data.map((chat, index) => {
            const otherParticipant = chat?.participants?.find(
              (participant) => userInfo?.user?.id !== participant?.id
            );

            return (
              <div
                key={index}
                className="flex cursor-pointer items-start gap-3 hover:bg-gray-200 p-2 rounded-lg"
                onClick={() => {
                  setCurrentChatId(chat?.id);
                  setCurrentChatUserId(otherParticipant?.id);
                }}
              >
                <img
                  src={
                    otherParticipant?.image
                      ? `${import.meta.env.VITE_APP_API_IMG_URL}${
                          otherParticipant.image
                        }`
                      : userDummy
                  }
                  alt="avatar"
                  className="w-[56px] h-[56px] rounded-full object-cover"
                />

                <div className="flex items-center gap-9 w-full justify-between">
                  <div>
                    <p className="bold_para capitalize">
                      {otherParticipant?.first_name}{" "}
                      {otherParticipant?.last_name}
                    </p>
                    <p className="sm_para line-clamp-1 text-gray-500">
                      {chat.messages[0]?.content}
                    </p>
                  </div>

                  <div className="flex flex-col items-end justify-between gap-1">
                    <p className="sm_para text-xs text-gray-400">12:45</p>
                    <div className="bg-[var(--red)] size-4 rounded-full flex items-center justify-center p-[10px]">
                      <span className="font-normal text-[12px] leading-[1] tracking-normal font-segoe text-white">
                        1
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="">
            <h3 className="text-center font-thin !text-[18px] mt-50">
              No Conversation Found
            </h3>
          </div>
        )} */}

        {isLoading ? (
          // Loader while fetching chat list
          <ChatSidebarSkeleton />
        ) : data && data.length > 0 ? (
          data.map((chat, index) => {
            const otherParticipant = chat?.participants?.find(
              (participant) => userInfo?.user?.id !== participant?.id
            );

            return (
              <div
                key={index}
                className="flex cursor-pointer items-start gap-3 hover:bg-gray-200 p-2 rounded-lg"
                onClick={() => {
                  setCurrentChatId(chat?.id);
                  setCurrentChatUserId(otherParticipant?.id);
                }}
              >
                <img
                  src={
                    otherParticipant?.image
                      ? `${import.meta.env.VITE_APP_API_IMG_URL}${
                          otherParticipant.image
                        }`
                      : userDummy
                  }
                  alt="avatar"
                  className="w-[56px] h-[56px] rounded-full object-cover"
                />

                <div className="flex items-center gap-9 w-full justify-between">
                  <div>
                    <p className="bold_para text-[14px] capitalize">
                      {otherParticipant?.first_name}{" "}
                      {otherParticipant?.last_name}
                    </p>
                    <p className="sm_para line-clamp-1 text-gray-500">
                      {chat.messages[0]?.content}
                    </p>
                  </div>

                  <div className="flex flex-col items-end justify-between gap-1">
                    <p className="sm_para text-xs text-gray-400">12:45</p>
                    <div className="bg-[var(--red)] size-4 rounded-full flex items-center justify-center p-[10px]">
                      <span className="font-normal text-[12px] leading-[1] tracking-normal font-segoe text-white">
                        1
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>
            <h3 className="text-center font-thin !text-[18px] mt-50">
              No Conversation Found
            </h3>
          </div>
        )}
      </div>
    </aside>
  );
}

export default ChatSidebar;
