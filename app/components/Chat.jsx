"use client"
import React from 'react';
import axios from "axios"
import Arrow from '../../public/assests/arrow.png'
import Arrow1 from '../../public/assests/arrow1.png'
import Arrow2 from '../../public/assests/arrow2.png'
import Image from 'next/image'
import { useState } from 'react';


const  ChatMessage=({ message })=> {
  const userClass = message.sender === 'user' ? ' mb-4 p-2 bg-[#c1001f] text-white text-xs  rounded-lg max-w-md self-end shadow-lg border border-zinc-400' : 'mb-4 p-2 bg-[#424242] rounded-lg max-w-md shadow-lg border border-zinc-400' ;
 

  return (
    <div className={`${userClass}`}>
     <p className="text-white text-xs">{message.text}</p> 
    </div>
  );
}

const ChatInterface = () => {

  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const handleSubmit = async () => {

    console.log('in handle submit');


    
      const userMessage = { text: prompt, sender: 'user' };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
   

    try {
  
      const response = await fetch('http://127.0.0.1:5000/predict',  {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message:prompt }),
      }
      );

      const {answer}=await response.json()
      console.log(answer.answer)
      const botMessage = { text: answer.answer, sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
     
    } catch (error) {
      console.error('Error:', error);
    }
    setPrompt('');
  }

  return (
    <div className="bg-black bg-opacity-20 h-[600px] w-[350px] flex flex-col justify-between shadow-lg">
      {/* <div className="bg-[#c1001f] text-white p-4 shadow-lg">
        <h1 className="text-xl font-semibold">AI DOCTOR</h1>
      </div> */}
      <div className="p-4 flex-1 overflow-y-auto">
        {/* Chat messages go here */}
        <div className="mb-4 p-2 bg-[#424242] rounded-lg max-w-md shadow-lg border border-zinc-400 ">
          <p className="text-white text-xs">Hey! I am your AI doctor at clinica san miguel, ask me anything?</p>
        </div>
        <div className="mb-4 p-2 bg-[#c1001f] text-white text-xs  rounded-lg max-w-md self-end shadow-lg border border-zinc-400  ">
          <p>I have a question about your products.</p>
        </div>
        {/* Add more messages here */}
        <div className="chat-window">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
      </div>
      </div>
      <div className="p-4">
        <div className="flex p-1  bg-[#424242] rounded-lg shadow-md border  h-[40px]">
          <input
            type="text"
            placeholder="What you want to ask?"
            className="flex-1  p-2 rounded-l-lg text-white outline-none text-xs  bg-[#424242]  placeholder-opacity-100 placeholder-white::placeholder "
            value={prompt}
            onChange={(e) => {
              setPrompt(e.target.value)
            }}
          />
          <button className="bg-[#c1001f] text-white p-2 text-xs rounded-lg shadow-md  items-center flex justify-center cursor-pointer "
            onClick={() => { handleSubmit() }}
          >
            <Image src={Arrow2} height={20} width={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
