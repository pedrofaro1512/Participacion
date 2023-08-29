import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";

import "./Reproductor.css";

const Reproductor = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="Repo">
      <ReactAudioPlayer
        src={require("../../asstes/Music/Lo que me hace feliz.mp3")}
        autoPlay={isPlaying}
        controls
      />
    </div>
  );
};

export default Reproductor;
