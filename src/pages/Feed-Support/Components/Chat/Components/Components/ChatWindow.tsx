import React, { useState, useRef, useEffect } from "react";
import Picker from "@emoji-mart/react";
import socket from "@socket/socket";
// import emojiIcon from "../../../../assets/svgs/dashboard-svgs/face-smile.svg";
import { Ellipsis, Smile } from "lucide-react";
import emojiIcon from "@assets/svgs/face-smile.svg";
import { useChatAllMessages } from "../../../../../../Hooks/useChatSupport";
import { useMutation } from "react-query";
import { sendMessages } from "../../../../../../Api/ChatSupport";
import useUserInfoStore from "../../../../../../Store/Store";
import chatStore from "../../../../../../Store/ChatStore";
import noMsgs from "@assets/images/noMsgs.png";
import SkeltonLoader from "@components/SkeltonLoader";
import { rows } from "@components/Table/TableData";
function ChatWindow({ className }) {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const [value, setValue] = useState("");
  const { currentChatId, setCurrentChatId } = chatStore();
  const messagesEndRef = useRef("");

  console.log("currrrrrrrrr90", currentChatId);

  const { User } = useUserInfoStore();

  const {
    data: chatAllMsgs,
    isLoading,
    // isError: isErrorSuggestions,
    // error: errorSuggestions,
  } = useChatAllMessages(currentChatId);

  const bottomRef = React.useRef(null);

  // const handleSendMessage = () => {
  //   if (!value.trim()) return;
  //   setValue(""); // Simulate message sent
  // };

  // emitNewMessage

  const [messagees, setMessages] = useState([]);
  const {
    chatSingleId,
    setChatSingleId,
    setCurrentChatUserId,
    currentChatUserId,
  } = chatStore();

  console.log("699999999BBBBBB",currentChatUserId)

  useEffect(() => {
    setMessages(chatAllMsgs);
  }, [chatAllMsgs]);
  const mutation = useMutation({
    mutationFn: sendMessages, // 👈 this is your POST API
    onSuccess: (data) => {
      console.log("✅ Message sent successfully:", data);
      // Optionally update UI or refetch chat messages
    },
    onError: (error) => {
      console.error("❌ Error sending message:", error);
    },
  });

  const handleSendMessage = () => {
    const formData = new FormData();
    // formData.append("content", "123456");
    formData.append("content", value);
    formData.append("userIds[]", currentChatUserId);

    mutation.mutate(formData);

    const message = {
      content: value,
      sentAt: new Date(),
      deleted: false,
      created_at: new Date(),
      updated_at: new Date(),
      sender_id: User?.id,
      sender: {
        first_name: User?.first_name,
        last_name: User?.last_name,
        email: User?.email,
      },
      attachments: [],
    };

    setMessages((prev) => [...prev, message]);
    setValue("");
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // useEffect(() => {
  //   socket.on("emitNewMessage", (message) => {
  //     setMessages((prev) => [...prev, message]);
  //   });
  // }, []);

  useEffect(() => {
    socket.on("emitNewMessage", (message) => {
      console.log("New message received via socket:", message);
      setMessages((prev) => [...prev, message]);
    });
  }, []);

  useEffect(() => {
    if (!chatSingleId) return;

    // Optional: Add a condition if you want to send something specific
    const formData = new FormData();
    formData.append("content", "");
    formData.append("userIds[]", chatSingleId);

    mutation.mutate(formData);
  }, [chatSingleId]);

  useEffect(() => {
    if (messagees && messagees.length > 0) {
      scrollToBottom();
    }
  }, [messagees]); // Or [messages] if you're tracking messages separately

  const customLoader = (
    <div className="p-4 flex w-[100%]  justify-center bg-[#F8F9FA] ">
      {[...Array(1)].map((_, i) => (
        <div key={i} className="mb-3 ">
          <SkeltonLoader
            columns={[100, 100, 100]}
            rows={5}
            skeltonHeaderHeight={10}
          />
        </div>
      ))}
    </div>
  );

  return (
    <main className={`flex-1 flex flex-col ${className}`}>
      {/* <div
        className="flex-1 overflow-y-auto  px-6 py-4 space-y-6"
      >
        {isLoading ? customLoader : "aaaa"}
        {messagees?.length > 0 ? (
          messagees?.map((msg) => (
            <div
              className={`${
                User?.id == msg?.sender_id
                  ? `flex items-end justify-end flex-col ${
                      msg?.sender?.id == User?.id ? "" : ""
                    } `
                  : ""
              }`}
              key={msg.id}
            >
              <div className="flex items-center gap-2 ">
                <p className="font-normal text-[12px] text-[#535862] leading-[18px] tracking-normal font-segoe">
                  {new Date(msg.sentAt).toLocaleDateString([], {
                    weekday: "long",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
              <div
                className={` ${
                  User?.id == msg?.sender_id ? "!bg-[#003CA6] text-white" : ""
                } max-w-xs px-4 py-2 rounded-lg bg-gray-100 text-black`}
              >
                <p className="text-sm">{msg.content}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="w-full h-full flex items-center justify-center">
            <img src={noMsgs} className="w-20 h-20" />
          </p>
        )}
        <div ref={messagesEndRef} />

        <div ref={bottomRef} />
      </div> */}

      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
        {isLoading ? (
          customLoader
        ) : messagees?.length > 0 ? (
          messagees.map((msg) => (
            <div
              key={msg.id}
              className={`${
                User?.id == msg?.sender_id
                  ? "flex items-end justify-end flex-col"
                  : ""
              }`}
            >
              <div className="flex items-center gap-2">
                <p className="font-normal text-[12px] text-[#535862] leading-[18px] tracking-normal font-segoe">
                  {new Date(msg.sentAt).toLocaleDateString([], {
                    weekday: "long",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
              <div
                className={`${
                  User?.id == msg?.sender_id ? "!bg-[#003CA6] text-white" : ""
                } max-w-xs px-4 py-2 rounded-lg bg-gray-100 text-black`}
              >
                <p className="text-sm">{msg.content}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="w-full h-full flex items-center justify-center">
            <img src={noMsgs} className="w-20 h-20" />
          </p>
        )}

        {/* Auto-scroll target */}
        <div ref={messagesEndRef} />
      </div>

      <footer className="px-8 py-5">
        <div className="relative">
          <textarea
            className="w-full border border-[#D5D7DA] bg-white rounded-lg p-2 shadow-xs"
            placeholder="Send a message..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onResize={false}
          />

          <div className="flex items-center gap-4 mt-2">
            <button
              onClick={handleSendMessage}
              disabled={!value.trim()}
              className="text-sm cursor-pointer text-white font-semibold bg-[var(--primary-color)] px-7 py-3 rounded-sm disabled:opacity-50"
            >
              Send Message
            </button>

            <button
              className="text-2xl cursor-pointer"
              onClick={() => setShowEmojiPicker((prev) => !prev)}
            >
              <img src={emojiIcon} alt="Emoji" />
              {/* <Smile/> */}
            </button>
            <div>
              <Ellipsis />
            </div>
          </div>

          {showEmojiPicker && (
            <div className="absolute bottom-10 left-5 z-50">
              {/* Replace with actual emoji picker when needed */}
              {/* <Picker onEmojiSelect={handleEmojiClick} /> */}
              <div className="p-2 bg-white border rounded shadow">
                Emoji Picker Placeholder
              </div>
            </div>
          )}
        </div>
      </footer>
    </main>
  );
}

export default ChatWindow;
