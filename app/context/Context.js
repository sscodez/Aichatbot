"use client";
import { createContext, useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
export const BotContext = createContext();

export default function BotProvider({ children }) {
  const [initalModal, setInitalModal] = useState(true);
  const [modal, setModal] = useState("");
  const [prompt, setPrompt] = useState("");
  const [username, setUsername] = useState("");
  const [_message, setMessage] = useState("");
  const [language, setLanguage] = useState("");
  const [messages, setMessages] = useState([]);
  const [open, setOpen] = useState(false);
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true });

  const stopListening = async () => {
    await SpeechRecognition.stopListening();
    resetTranscript();
    await handleVoice();
  };
  const handleVoice = async () => {
    console.log("in handle submit");

    if (!transcript) {
      return;
    }
    console.log(transcript);
    const userMessage = { text: transcript, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const response = await fetch("http://172.190.105.59:8080/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: transcript }),
      });

      const { answer } = await response.json();
      console.log(answer.answer);
      const botMessage = { text: answer.answer, sender: "bot" };

      let speech = new SpeechSynthesisUtterance();
      speech.text = answer.answer;
      window.speechSynthesis.speak(speech);

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error:", error);
    }
    setPrompt("");
  };

  const handlePrompt = async () => {
    console.log("in handle submit");

    if (!prompt) {
      return;
    }
    console.log(_message);
    const userMessage = { text: prompt, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: prompt }),
      });

      const { answer } = await response.json();
      console.log(answer.answer);
      const botMessage = { text: answer.answer, sender: "bot" };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error:", error);
    }
    setPrompt("");
  };
  return (
    <BotContext.Provider
      value={{
        initalModal,
        setInitalModal,
        startListening,
        transcript,
        messages,
        setMessages,
        setPrompt,
        prompt,
        stopListening,
        listening,
        username,
        setUsername,
        modal,
        setModal,
        open,
        setOpen,
        language,
        setLanguage,
        handlePrompt,
      }}
    >
      {children}
    </BotContext.Provider>
  );
}
