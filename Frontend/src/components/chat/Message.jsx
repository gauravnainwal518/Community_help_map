import React from "react";

const Message = ({ text, sender }) => {
  const isUser = sender === "me";
  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`px-4 py-2 rounded-lg max-w-xs relative ${
          isUser
            ? "bg-blue-500 text-white rounded-br-none"
            : "bg-gray-200 text-gray-800 rounded-bl-none"
        }`}
      >
        <p>{text}</p>
        <div className="text-[10px] text-right mt-1 opacity-60">
          {time}
          {isUser && (
            <span className="ml-2 text-blue-200 font-bold text-xs">✔✔</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
