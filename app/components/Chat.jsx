"use client";
import React from "react";
import axios from "axios";
import Arrow from "../../public/assests/arrow.png";
import Aibot from "../../public/assests/Aibot.png";
import Arrow2 from "../../public/assests/rightArrow.png";
import User from "../../public/assests/user.png";
import Microphone from "../../public/assests/Microphone.png";
import aiProfile from "../../public/assests/aiProfile.png";
import Image from "next/image";
import { useState } from "react";
import ChatMessage from "./ChatMessage";
import { BotContext } from "../context/Context";
import { useContext } from "react";
const ChatInterface = () => {
  const {
    startListening,
    transcript,
    messages,
    setPrompt,
    prompt,
    stopListening,
    listening,
    modal,
    username,
    handlePrompt,
  } = useContext(BotContext);

  return (
    <div
      className={`bg-white h-[530px] w-[361px] rounded-lg flex flex-col justify-between font-poppinsRegular shadow-lg animate__animated 
        animate__fadeInUp
        `}
    >
      <div className="flex items-center bg-[#D01717] rounded-tl-lg rounded-tr-lg text-white p-4 shadow-lg">
        <Image src={Aibot} className="mr-1 w-[50px] h-[50px] " />{" "}
        <h1 className="text-xl ">Clinica San Miguel AI bot</h1>
      </div>
      <div className="p-4 flex-1 overflow-y-auto bg-[#fff]">
        <div className="flex ">
          <div className="flex items-center w-[15%] flex-col ">
            {" "}
            <Image src={aiProfile} className="h-[35px] w-[35px] mr-1 " />
            <p className="text-[10px]">AI Bot</p>
          </div>
          <div className="mb-4 w-[85%]  p-2 bg-[#EBF0F4] rounded-br-[8px] rounded-tr-[8px] rounded-bl-[8px] max-w-md  text-[14px]  ">
            <p className="text-[#475560] ">
              Hey {username} ! I am your AI doctor at clinica san miguel, ask me
              anything?
            </p>
          </div>
        </div>
        <div className="chat-window">
          {messages.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
        </div>
      </div>

      {modal === "message" && (
        <div className=" bg-[#fff]  ">
          <div className="flex items-center p-1 border-black border bg-[#fff] rounded-[4px] shadow-md  w-[100%]  h-[40px]">
            <input
              type="text"
              placeholder="Type Message"
              className="flex-1  p-2 rounded-l-lg text-[#475560] outline-none text-xs  bg-[#fff] text-[14px]  placeholder-opacity-100 placeholder-white::placeholder "
              value={prompt}
              onChange={(e) => {
                setPrompt(e.target.value);
              }}
            />
            <button
              className=" "
              onClick={() => {
                handlePrompt();
              }}
            >
              <Image src={Arrow2} height={40} width={40} />
            </button>
          </div>
        </div>
      )}
      {modal === "voice" && (
        <div className="bg-white flex flex-col items-center justify-center">
          <button
            className=" text-white p-2  text-xs rounded-lg  items-center flex justify-center cursor-pointer "
            onTouchStart={startListening}
            onMouseDown={startListening}
            onTouchEnd={stopListening}
            onMouseUp={stopListening}
          >
            <Image src={Microphone} height={50} width={50} />
          </button>
          <p>{listening ? "Stop Listening" : "Start Listening"}</p>
        </div>
      )}
      {modal === "voice" && (
        <p className="text-black text-xs bg-white text-center"> {transcript}</p>
      )}
      <div className="flex items-center justify-center rounded-bl-lg rounded-br-lg py-1 font-bold text-black  bg-[#EBF0F4] text-[11px] ">
        Powered by MyclinicMD
      </div>
    </div>
  );
};

export default ChatInterface;
