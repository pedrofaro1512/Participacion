import React from "react";
import imagen01 from "../../asstes/img/imagen01.jpg";
import imagen02 from "../../asstes/img/imagen02.jpg";
import imagen03 from "../../asstes/img/imagen03.jpg";
import imagen04 from "../../asstes/img/imagen04.jpg";
import imagen05 from "../../asstes/img/imagen05.jpg";
import imagen06 from "../../asstes/img/imagen06.jpg";
import "./Home.css";

import { Carousel } from "antd";

const Home = () => {
  const images = [
    { src: imagen01, alt: "imagen01" },
    { src: imagen02, alt: "imagen02" },
    { src: imagen03, alt: "imagen03" },
    { src: imagen04, alt: "imagen04" },
    { src: imagen05, alt: "imagen05" },
    { src: imagen06, alt: "imagen06" },
  ];

  return (
    <div className="carousel-container">
      <Carousel autoplay>
        {images.map((image, index) => (
          <div className="carousel-item" key={index}>
            <div className="image-container">
              <img src={image.src} alt={image.alt} />
              <div className="image-overlay">Nata y Pipe</div>
              <div className="image-overlay-bottom">Se casan</div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
