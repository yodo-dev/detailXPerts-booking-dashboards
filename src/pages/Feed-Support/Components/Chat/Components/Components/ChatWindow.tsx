import React, { useState, useRef } from "react";
import Picker from "@emoji-mart/react";
// import emojiIcon from "../../../../assets/svgs/dashboard-svgs/face-smile.svg";
import { Ellipsis, Smile } from "lucide-react";
import emojiIcon from "@assets/svgs/face-smile.svg";
import { useChatAllMessages } from "../../../../../../Hooks/useChatSupport";

function ChatWindow({ className }) {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const [value, setValue] = useState("");

  const {
    data: chatAllMsgs,
    // isLoading: isLoadingSuggestions,
    // isError: isErrorSuggestions,
    // error: errorSuggestions,
  } = useChatAllMessages(12);

  const dummyMessages = [
    { id: 1, content: "Hello! 👋", sentAt: new Date().toISOString() },
    { id: 2, content: "How's it going?", sentAt: new Date().toISOString() },
    { id: 3, content: "Are You Fine", sentAt: new Date().toISOString() },
  ];

  const bottomRef = React.useRef(null);

  const handleSendMessage = () => {
    if (!value.trim()) return;
    console.log("Sending message:", value);
    setValue(""); // Simulate message sent
  };

  const handleEmojiClick = (emoji) => {
    setValue((prev) => prev + emoji.native);
    setShowEmojiPicker(false);
  };

  return (
    <main className={`flex-1 flex flex-col ${className}`}>
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
        {chatAllMsgs?.map((msg) => (
          <div key={msg.id}>
            <div className="flex items-center gap-2">
              <p className="font-normal text-[12px] text-[#535862] leading-[18px] tracking-normal font-segoe">
                {new Date(msg.sentAt).toLocaleDateString([], {
                  weekday: "long",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
            {/* Display Message */}
            <div className="max-w-xs px-4 py-2 rounded-lg bg-gray-100 text-black">
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
          />

          <div className="flex items-center gap-4 mt-2">
            <button
              onClick={handleSendMessage}
              disabled={!value.trim()}
              className="text-sm text-white font-semibold bg-[var(--primary-color)] px-7 py-3 rounded-sm disabled:opacity-50"
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
