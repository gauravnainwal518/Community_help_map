import React, { useState, useRef, useEffect } from "react";
import Message from "./Message";
import MessageInput from "./MessageInput";

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can we help you?", sender: "other" },
    { id: 2, text: "I need help with medicines.", sender: "me" },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (text) => {
    if (!text.trim()) return;
    const newMessage = {
      id: Date.now(),
      text,
      sender: "me",
    };
    setMessages((prev) => [...prev, newMessage]);
    setIsTyping(false);
  };

  const handleTyping = (typing) => {
    setIsTyping(typing);
  };

  return (
    <div className="w-full max-w-md mx-auto border rounded-lg shadow-md bg-white">
      <div className="bg-blue-600 text-white p-4 rounded-t-lg">
        <h2 className="text-lg font-semibold">Community Chat</h2>
      </div>

      <div className="p-4 h-64 overflow-y-auto flex flex-col gap-2">
        {messages.map((msg) => (
          <Message key={msg.id} text={msg.text} sender={msg.sender} />
        ))}

        {isTyping && (
          <div className="text-sm text-gray-500 italic px-2">
            Other user is typing...
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <MessageInput onSend={handleSend} onTyping={handleTyping} />
    </div>
  );
};

export default ChatBox;
