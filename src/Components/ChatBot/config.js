import { createChatBotMessage } from "react-chatbot-kit";

const botName = "asistente de boda";

const config = {
  initialMessages: [createChatBotMessage(`Hola soy el ${botName}`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#fff",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
};

export default config;
