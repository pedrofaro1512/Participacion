import React, { useState, useEffect } from "react";
import couple from "../../asstes/img/couple.png";

import "./Header.css";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  useEffect(() => {
    const horizontalMenu = document.querySelector(".horizontal-menu");

    if (menuVisible) {
      horizontalMenu.style.display = "block";
    } else {
      horizontalMenu.style.display = "none";
    }
  }, [menuVisible]);

  useEffect(() => {
    const horizontalMenu = document.querySelector(".horizontal-menu");
    horizontalMenu.style.display = window.innerWidth > 390 ? "flex" : "none";
  }, []);

  return (
    <div className="menu-container">
      <div className="letrasH">
        <img src={couple} alt="Letras"></img>
      </div>
      <div className="menu-items">
        <button className="hamburger-btn" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <ul className="horizontal-menu">
          <li>
            <a href="#nosotros">Nosotros</a>
          </li>
          <li>
            <a href="#cronometro">Cuánto falta</a>
          </li>
          <li>
            <a href="#momentos">Nuestros momentos</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
