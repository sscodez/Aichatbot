"use client";
import Image from "next/image";
import { useState } from "react";
import ChatInterface from "./components/Chat";
import InitialChat from "./components/InitalChat";
import Head from "next/head";
import "animate.css";
import { BotContext } from "./context/Context";
import { useContext } from "react";
export default function Home() {
  const { initalModal, open, setOpen } = useContext(BotContext);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="relative flex items-center justify-center  overflow-hidden   h-[100vh] bg-black bg-opacity-20 backdrop-blur-sm w-[100%] ">
      <div className="   flex flex-col items-center justify-center absolute bottom-1 right-4 ">
        {open && [initalModal ? <InitialChat /> : <ChatInterface />]}
        <div className="w-[351px] flex items-center  my-2 justify-end">
          <div
            className="flex items-center  cursor-pointer justify-center bg-black p-3 rounded-[50px]"
            onClick={handleClick}
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAuUlEQVR4nOWWQQ6DIBBFMZ7BpAcvB6pH0EXvUhfPmLCoBK0D0/yFf8vwH5nA8EO4rYAeeAIL8AIGB88heS3Juy8VRfaaW+AJunl8K+ZFHfDJiqrhB1ASo8uLR8oywU+gm8ajDRNlvYHHRajdgwZ488GpMPDoltnIDWoxdIdevKHzj7W2AcQ5/D/QCrgf1AD3h8rAKFqN4nKheE4oBgiKkYnik0DxLaIKAiiiD+KwFz2gpngrDfThLloBGzm/KKM0Dq8AAAAASUVORK5CYII="
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
