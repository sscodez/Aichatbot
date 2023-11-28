"use client";
import React from "react";
import User from "../../public/assests/user.png";
import aiProfile from "../../public/assests/aiProfile.png";
import Image from "next/image";
import { BotContext } from "../context/Context";
import { useContext } from "react";
const ChatMessage = ({ message }) => {
  const { username } = useContext(BotContext);
  const userClass =
    message.sender === "user"
      ? " mb-4  p-2 bg-[#FFB2B2] text-[#475560] text-[14px]  rounded-br-[8px] rounded-tl-[8px] rounded-bl-[8px]    self-end    "
      : "mb-4   p-2 bg-[#EBF0F4] rounded-br-[8px] rounded-tr-[8px] rounded-bl-[8px] max-w-md  text-[14px] ";

  return (
    <div
      className={`flex bg-white w-[100%] items-center ${
        message.sender === "user" && "justify-end"
      }

      ${message.sender === "bot" && "justify-start"}
      
      `}
    >
      <div
        className={`flex  animate__animated animate__fadeInUp w-[100%] ${
          message.sender === "user" && "justify-end"
        }
      ${message.sender === "bot" && "justify-start"}  "`}
      >
        {message.sender === "bot" && (
          <div className="flex items-center p-1 w-[20%]  flex-col ">
            <Image src={aiProfile} className="h-[35px] w-[35px]  mr-1 p-1 " />
            <p className="text-[10px] text-center">AI bot</p>
          </div>
        )}
        <div className="w-[80%]">
          <div className={`${userClass} `}>
            <p className="text-[#475560] text-justify ">{message.text}</p>
          </div>
        </div>
        {message.sender === "user" && (
          <div className="flex items-center p-1 w-[20%]  flex-col ">
            {" "}
            <Image src={User} className="h-[35px] w-[35px] mr-1 p-1 " />
            <p className="text-[10px]  text-center ">{username}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
