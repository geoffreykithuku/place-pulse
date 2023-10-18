import React from "react";
import { Link } from "react-router-dom"; // Use React Router or your preferred routing library
import { User } from "lucide-react";

import conversations from "data/conversations";

const Conversation = () => {
  return (
    <div>
      <p className="text-[#8f8f8f] text-2xl  font-semibold mb-3">
        My Latest Conversations
      </p>
      <div className="bg-[#8f8f8f] bg-opacity-5 p-5 rounded-md flex flex-col gap-5">
        {conversations.map((conversation) => {
          const { id, caretaker, messages } = conversation;
          const lastMessage = messages[messages.length - 1];

          return (
            <Link to={`/chat/${id}`} className="">
              <div className="border-2 rounded-md py-2">
                <div className="flex justify-between flex-wrap">
                  <span className="flex">
                    <User color="#575050" />
                    <p className="font-semibold text-[#575050]">
                      {caretaker.name}
                    </p>
                  </span>
                  <span className="pr-5">
                    <p className="text-xs font-light text-[#575050]">
                      2023-09-26
                    </p>
                  </span>
                </div>
                <div className="conversation-details">
                  <p className="text-[#8f8f8f] text-sm px-5">
                    {lastMessage.text}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Conversation;
