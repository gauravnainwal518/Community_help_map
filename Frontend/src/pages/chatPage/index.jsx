import React from "react";
import ChatBox from "../../components/chat/ChatBox";
import MessageInput from "../../components/chat/MessageInput";
import Loader from "../../components/common/Loader";

const ChatPage = () => {
  const isLoading = false; // change this when adding data fetching
  const chatMessages = []; // replace this with real message state

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="max-w-4xl mx-auto shadow-lg rounded-lg bg-white dark:bg-gray-800">
        <ChatBox messages={chatMessages} />
        <MessageInput />
      </div>
      {isLoading && <Loader />}
    </div>
  );
};

export default ChatPage;
