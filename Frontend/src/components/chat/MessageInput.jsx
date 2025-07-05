import React, { useState } from "react";

const MessageInput = ({ onSend, onTyping }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    if (onTyping) {
      onTyping(true);
      clearTimeout(window.typingTimeout);
      window.typingTimeout = setTimeout(() => {
        onTyping(false);
      }, 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSend(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex border-t p-2">
      <input
        type="text"
        value={text}
        placeholder="Type a message..."
        onChange={handleChange}
        className="flex-1 px-4 py-2 border rounded-md focus:outline-none"
      />
      <button
        type="submit"
        className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Send
      </button>
    </form>
  );
};

export default MessageInput;
