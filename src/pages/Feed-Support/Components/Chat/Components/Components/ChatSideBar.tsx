import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import userDummy from "@assets/images/user-dummy-img.jpg";
// import profilePlaceholder from "@assets/images/profile-placeholder.jpg";
import { useChat } from "../../../../../../Hooks/useChatSupport";
function ChatSidebar({ label, className }) {
  // const { data, isLoading, error } = useQuery(["chatGetPeople"], ChatSupport);
  const {
    data,
    isLoading: isLoadingSuggestions,
    isError: isErrorSuggestions,
    error: errorSuggestions,
  } = useChat({ type: "SUGGESTION" });

  const [chatId, setChatId] = useState();

  // console.log("69 chatting", chatId);

  useEffect(() => {
    // chatId()
  }, [chatId]);

  return (
    <aside
      className={`w-1/3 max-w-sm border-r border-gray-200 p-4 pt-2 ${className}`}
    >
      <div className="flex justify-between">
        <h4 className="text-lg font-bold text-[24px] mb-4 mt-4">{label}</h4>
      </div>

      <div className="space-y-4 overflow-y-auto h-[calc(100vh-150px)]">
        {data?.map((_, index) => (
          <div
            key={index}
            className="flex cursor-pointer items-start gap-3 cursor-pointer hover:bg-gray-200 p-2 rounded-lg"
            onClick={() => setChatId(_?.id)}
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
                  {_.participants.participants[0]?.first_name} {_.participants.participants[0]?.last_name}
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
        ))}
      </div>
    </aside>
  );
}

export default ChatSidebar;
