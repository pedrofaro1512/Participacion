import React from "react";
import compromiso from "../../asstes/img/compromiso.jpg";
import cita from "../../asstes/img/cita.jpg";
import viaje from "../../asstes/img/viaje.jpg";
import imagen03 from "../../asstes/img/imagen03.jpg";
import imagen05 from "../../asstes/img/imagen05.jpg";

import "./Rueda.css";

const Rueda = () => {
  return (
    <div className="body-moments">
      <div className="title-momentos">
        <span>Nuestros momentos</span>
      </div>
      <div className="container-moments">
        <div>
          <div className="title-card">
            <h1>Primera cita</h1>
          </div>
          <div className="card">
            <div className="box">
              <div className="imgMoments">
                <img src={cita} alt="cita"></img>
              </div>
              <div className="content">
                <div>
                  {/* <h2>Nuestra primera cita</h2> */}
                  <p>
                    Nuestro primer encuentro superó todas las expectativas al
                    compartir un café de origen, que reflejaba tu singularidad
                    de manera perfecta. En aquel rincón acogedor, el aroma del
                    café recién hecho presagiaba momentos especiales. Entre
                    risas y sorbos, la conversación fluía sin esfuerzo, tejiendo
                    su propia narrativa. Más que una simple bebida, esa taza de
                    café se convirtió en un lienzo en el que descubrir gestos y
                    melodías
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="title-card">
            <h1>Primer beso</h1>
          </div>
          <div className="card">
            <div className="box">
              <div className="imgMoments">
                <img src={imagen05} alt="imagen02"></img>
              </div>
              <div className="content">
                <div>
                  {/* <h2>Nuestro primer beso</h2> */}
                  <p>
                    Nuestro primer beso transcurrió en una gélida noche de la
                    ciudad, después de caminar juntos un tiempo. Bajo el cielo
                    estrellado, el ambiente cargado de complicidad hizo que el
                    frío se desvaneciera. Fue un beso que destiló la emoción de
                    cada paso y palabra compartida, sellando el recuerdo de una
                    noche que transformó nuestras historias en una.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="title-card">
            <h1>Nos hicimos novios</h1>
          </div>
          <div className="card">
            <div className="box">
              <div className="imgMoments">
                <img src={imagen03} alt="imagen03"></img>
              </div>
              <div className="content">
                <div>
                  {/* <h2>Nos hicimos novios</h2> */}
                  <p>
                    Nuestro camino hacia el noviazgo fue una danza emocional que
                    nos unió de manera inesperada. A través de risas y
                    confidencias, descubrimos que compartíamos sueños y anhelos.
                    Los momentos juntos se tejieron con hilos de complicidad y
                    cariño, y poco a poco, nuestras miradas se volvieron
                    cómplices de un sentimiento que no podíamos ignorar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="title-card">
            <h1>Primer viaje</h1>
          </div>
          <div className="card">
            <div className="box">
              <div className="imgMoments">
                <img src={viaje} alt="viaje"></img>
              </div>
              <div className="content">
                <div>
                  {/* <h2>Nuestro primer viaje juntos</h2> */}
                  <p>
                    Guatavita, un lugar empapado de historia y misticismo, nos
                    acogió con sus paisajes imponentes. Sin embargo, fueron sus
                    sonrisas y risas las que se convirtieron en la melodía que
                    embelleció cada paso de nuestro recorrido. En medio de esta
                    majestuosidad, descubrimos que fueron los gestos cariñosos y
                    la autenticidad compartida los elementos que verdaderamente
                    transformaron este viaje en un tesoro dentro de nuestra
                    historia, escapando de lo convencional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="title-card">
            <h1>Compromiso</h1>
          </div>
          <div className="card">
            <div className="box">
              <div className="imgMoments">
                <img src={compromiso} alt="compromiso"></img>
              </div>
              <div className="content">
                <div>
                  {/* <h2>Nuestro compromiso</h2> */}
                  <p>
                    Nuestro compromiso representó un capítulo inolvidable,
                    tejido con sorpresas y un cúmulo de sentimientos. En un
                    espacio diseñado con calidez y bajo la mirada del cielo
                    estrellado. Acompañando ese momento único, unas palabras
                    escritas con profundo cariño se convirtió en el enlace que
                    unió nuestras palabras con los sentimientos más profundos;
                    plasmé mi promesa de amor eterno.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rueda;
