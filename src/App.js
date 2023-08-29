import React, { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import FooterM from "./Components/Footer/Footer";
import Nosotros from "./Components/Nosotros/Nosotros";
import Contador from "./Components/Contador/Contador";
import Comentarios from "./Components/Comentarios/Comentarios";
import Home from "./Components/Home/Home";
import Rueda from "./Components/Rueda/Rueda";
import Reproductor from "./Components/Reproductor/Reproductor";
//import ChatBot from "./Components/ChatBot/ChatBot";

import { QuestionCircleOutlined, UpOutlined } from "@ant-design/icons";
import { FloatButton, Button, BackTop } from "antd";

function App() {
  const [showBackTop, setShowBackTop] = useState(false);
  const [showChatBot, setShowChatBot] = useState(false);

  // Código para desabilitar el click derecho
  const disableRightClick = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    document.addEventListener("contextmenu", disableRightClick);
    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowBackTop(true);
    } else {
      setShowBackTop(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div>
      <Header />
      <Home />
      <div id="nosotros">
        <Nosotros />
      </div>
      <div id="cronometro">
        <Contador />
      </div>
      <div id="momentos">
        <Rueda />
      </div>
      <Comentarios />
      <FooterM />
      <>
        <BackTop
          visibilityHeight={200}
          style={{
            right: 24,
            bottom: 120,
          }}
        >
          <Button
            type="primary"
            shape="circle"
            icon={<UpOutlined />}
            style={{
              width: "40px",
              height: "40px",
            }}
          />
        </BackTop>
      </>

      {/* {showChatBot && <ChatBot isVisible={showChatBot} />} */}
      {/* <>
        <FloatButton
          icon={<QuestionCircleOutlined />}
          type="primary"
          style={{
            right: 24,
            bottom: 110,
          }}
          onClick={() => setShowChatBot(!showChatBot)}
        />
      </> */}
      <Reproductor />
    </div>
  );
}

export default App;
