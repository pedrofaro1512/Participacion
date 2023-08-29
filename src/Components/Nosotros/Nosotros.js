import React from "react";
import "./Nosotros.css";

const Nosotros = () => {
  return (
    <div className="container">
      <div className="title-nosotros">
        <span>Nosotros</span>
      </div>
      <div className="nosotros-container">
        <div className="nosotros-text">
          <p>
            En medio del turbulento escenario de la pandemia del Covid-19,
            floreció un lazo excepcional que trascendió las pantallas, uniendo
            nuestras almas virtualmente. Ese destello inicial, surgido mientras
            el mundo enfrentaba la distancia física, nos instó a explorarnos
            mutuamente en un nivel profundo y conmovedor.
          </p>
          <p>
            Sin embargo, el destino nos concedió una oportunidad y durante dos
            meses, logramos elevar nuestra relación más allá del ámbito virtual,
            compartiendo un espacio presencial donde los encuentros
            enriquecieron nuestro vínculo. Estos momentos no solo nos
            permitieron valorar las voces y risas compartidas en línea, sino
            también descubrir los gestos y miradas que solo se despliegan en los
            encuentros cara a cara.
          </p>
          <p>
            En este contexto, nuestra historia personifica la esencia de
            mantener el amor vivo en medio de la adversidad, demostrando que
            incluso en tiempos desafiantes, el amor tiene el poder de florecer y
            crecer en formas inesperadas y profundamente emotivas.
          </p>
        </div>
        <div className="nosotros-body">
          <ul>
            <li className="item1">
              <div className="bg"></div>
            </li>
            <li className="item2">
              <div className="bg"></div>
            </li>
            <li className="item3">
              <div className="bg"></div>
            </li>
            <li className="item4">
              <div className="bg"></div>
            </li>
            <li className="item5">
              <div className="bg"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
