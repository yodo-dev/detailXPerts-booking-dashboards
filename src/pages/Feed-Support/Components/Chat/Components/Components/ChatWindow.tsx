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

function ChatWindow({ className }) {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const [value, setValue] = useState("");
  const { currentChatId, setCurrentChatId } = chatStore();

  const { User } = useUserInfoStore();

  const {
    data: chatAllMsgs,
    // isLoading: isLoadingSuggestions,
    // isError: isErrorSuggestions,
    // error: errorSuggestions,
  } = useChatAllMessages(currentChatId);

  console.log(chatAllMsgs, "all message");
  const bottomRef = React.useRef(null);

  // const handleSendMessage = () => {
  //   if (!value.trim()) return;
  //   console.log("Sending message:", value);
  //   setValue(""); // Simulate message sent
  // };

  // emitNewMessage

  const [messagees, setMessages] = useState([]);

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
    formData.append("userIds[]", [2]);

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

  // useEffect(() => {
  //   socket.on("emitNewMessage", (message) => {
  //     setMessages((prev) => [...prev, message]);
  //     console.log("333333333")
  //   });
  // }, []);

  useEffect(() => {
    socket.on("emitNewMessage", (message) => {
      console.log("New message received via socket:", message);
      setMessages((prev) => [...prev, message]);
    });
  }, []);

  return (
    <main className={`flex-1 flex flex-col ${className}`}>
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
        {messagees?.map((msg) => (
          <div
            className={`${
              User?.id == msg?.sender_id
                ? "flex items-end justify-end flex-col "
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
            {/* Display Message */}
            <div
              className={` ${
                User?.id == msg?.sender_id ? "!bg-[#003CA6] text-white" : ""
              } max-w-xs px-4 py-2 rounded-lg bg-gray-100 text-black`}
            >
              <p className="text-sm">{msg.content}</p>
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
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
