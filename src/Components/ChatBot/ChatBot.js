import { Chatbot } from "react-chatbot-kit";
import config from "./config.js";
import MessageParser from "./MessageParser.jsx";
import ActionProvider from "./ActionProvider.jsx";

import "./ChatBot.css";

const ChatBot = ({ isVisible }) => {
  return (
    <div className={`chatbot-container ${isVisible ? "visible" : "hidden"}`}>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default ChatBot;
