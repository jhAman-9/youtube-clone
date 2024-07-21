import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChatMessages } from "../store/chatSlice";
import ChatMessages from "./ChatMessage";
import { generateRandomMessage, generateRandomName } from "../util/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const timer = setInterval(() => {
      // These are just function to generate random names and message
      const name = generateRandomName();
      const message = generateRandomMessage(20);

      dispatch(
        addChatMessages({
          name: name,
          message: message,
        })
      );
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full h-[500px] p-2 border border-white bg-black rounded-lg flex flex-col-reverse overflow-y-scroll ">
        <div>
          {messages.map((data, index) => (
            <ChatMessages key={index} name={data.name} message={data.message} />
          ))}
        </div>
      </div>

      <form
        className="w-full p-2 border border-black flex rounded-sm"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addChatMessages({
              name: "Aman Kumar",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-96 bg-gray-200"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
