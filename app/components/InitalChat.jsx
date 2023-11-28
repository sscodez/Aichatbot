"use client";
import React from "react";
import Arrow from "../../public/assests/arrow.png";
import Aibot from "../../public/assests/Aibot.png";
import Arrow2 from "../../public/assests/rightArrow.png";
import aiProfile from "../../public/assests/aiProfile.png";
import Image from "next/image";
import { BotContext } from "../context/Context";
import { useContext } from "react";
const ChatInterface = ({ open }) => {
  const {
    modal,
    setModal,
    username,
    setUsername,
    setInitalModal,
    language,
    setLanguage,
  } = useContext(BotContext);

  const handleChange = () => {
    if (!username || !modal) {
      return;
    }
    setInitalModal(false);
  };

  return (
    <div
      className={`bg-white h-[530px] w-[361px] rounded-lg flex flex-col justify-between font-poppinsRegular  animate__animated  animate__fadeInUp
      }    `}
    >
      <div className="flex items-center bg-[#D01717] rounded-tl-lg rounded-tr-lg text-white p-4 ">
        <Image src={Aibot} className="mr-1 w-[50px] h-[50px] " />{" "}
        <h1 className="text-xl ">Clinica San Miguel AI bot</h1>
      </div>
      <div className="p-4 flex-1 overflow-y-auto bg-[#fff]">
        <h1 className="text-[15px] mb-5  font-semibold">
          Answer these question to start
        </h1>

        <div className="flex flex-col mt-4 ">
          <div className="flex">
            <div className="flex items-center w-[15%] flex-col ">
              {" "}
              <Image src={aiProfile} className="h-[35px] w-[35px] mr-1 " />
              <p className="text-[10px]">AI Bot</p>
            </div>

            <div className="w-[85%]">
              <div className="mb-4 w-[100%]  p-2 bg-[#EBF0F4] rounded-br-[8px] rounded-tr-[8px] rounded-bl-[8px] max-w-md  text-[14px]  ">
                <p className="text-[#475560] ">
                  In which language want to intreact ?
                </p>
              </div>
              <div className="flex items-start w-[100%] justify-start my-2 ">
                <button
                  className={`border border-black rounded-[3px] p-2 mr-1 cursor-pointer ${
                    language === "english" ? "bg-black text-white" : " "
                  } `}
                  onClick={() => setLanguage("english")}
                >
                  <p className="text-xs font-semibold ">English</p>
                </button>
                <button
                  className={`border border-black rounded-[3px] p-2 mr-1 cursor-pointer ${
                    language === "spanish" ? "bg-black text-white" : " "
                  } `}
                  onClick={() => setLanguage("spanish")}
                >
                  <p className="text-xs font-semibold "> Spanish</p>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col my-2 ">
          <div className="flex">
            <div className="flex items-center w-[15%] flex-col ">
              {" "}
              <Image src={aiProfile} className="h-[35px] w-[35px] mr-1 " />
              <p className="text-[10px]">AI Bot</p>
            </div>

            <div className="w-[85%]">
              <div className="mb-4 w-[100%]  p-2 bg-[#EBF0F4] rounded-br-[8px] rounded-tr-[8px] rounded-bl-[8px] max-w-md  text-[14px]  ">
                <p className="text-[#475560] ">
                  In which you want to intreact ?
                </p>
              </div>
              <div className="flex items-start w-[100%] justify-start my-2 ">
                <button
                  className={`border border-black rounded-[3px] p-2 mr-1 cursor-pointer ${
                    modal === "message" ? "bg-black text-white" : " "
                  } `}
                  onClick={() => setModal("message")}
                >
                  <p className="text-xs font-semibold ">Chat</p>
                </button>
                <button
                  className={`border border-black rounded-[3px] p-2 mr-1 cursor-pointer ${
                    modal === "voice" ? "bg-black text-white" : " "
                  } `}
                  onClick={() => setModal("voice")}
                >
                  <p className="text-xs font-semibold ">Voice</p>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col my-2 ">
          <div className="flex">
            <div className="flex items-center w-[15%] flex-col ">
              {" "}
              <Image src={aiProfile} className="h-[35px] w-[35px] mr-1 " />
              <p className="text-[10px]">AI Bot</p>
            </div>

            <div className="w-[85%]">
              <div className="mb-4 w-[100%]  p-2 bg-[#EBF0F4] rounded-br-[8px] rounded-tr-[8px] rounded-bl-[8px] max-w-md  text-[14px]  ">
                <p className="text-[#475560] ">Whats your name ?</p>
              </div>
              <div className="flex items-start w-[100%] justify-start my-2 ">
                <input
                  className="flex outline-none border border-black rounded-[3px] px-1 py-2 m-1  text-[14px] "
                  placeholder="Enter your name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-[#fff]  ">
        <div className="flex items-center p-1 justify-end bg-[#fff] rounded-[4px]   w-[95%] my-2  h-[40px]">
          <button
            className=" "
            onClick={() => {
              handleChange(false);
            }}
          >
            <Image src={Arrow2} height={40} width={40} />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center rounded-bl-lg rounded-br-lg py-1 font-bold text-black  bg-[#EBF0F4] text-[11px] ">
        Powered by MyclinicMD
      </div>
    </div>
  );
};

export default ChatInterface;
