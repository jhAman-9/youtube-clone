import React from "react";
import { IMG_LOGO } from "../util/helper";

const ChatMessages = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm text-white">
      <img className="h-8 w-8 p-1" src={IMG_LOGO} alt="img-logo" />
      <span className="font-bold p-1">{name}</span>
      <span className="text-white p-1">{message}</span>
    </div>
  );
};

export default ChatMessages;
