import React, { useState, useEffect } from "react";
import { Typography } from "antd";
import "./Contador.css";
import "../../Fonts/fonts.css";

const { Title } = Typography;

const Contador = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Establece la fecha del evento en milisegundos (timestamp)
  const eventDate = new Date("2023-11-27T23:59:59").getTime();

  useEffect(() => {
    // Calcula el tiempo restante hasta la fecha del evento
    const now = new Date().getTime();
    const timeRemaining = eventDate - now;

    // Calcula los días, horas, minutos y segundos restantes
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Actualiza el estado con el tiempo restante en formato de objeto
    setTimeLeft({ days, hours, minutes, seconds });

    // Actualiza el contador cada segundo
    const interval = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft.seconds > 0) {
          return { ...prevTimeLeft, seconds: prevTimeLeft.seconds - 1 };
        } else if (prevTimeLeft.minutes > 0) {
          return {
            ...prevTimeLeft,
            minutes: prevTimeLeft.minutes - 1,
            seconds: 59,
          };
        } else if (prevTimeLeft.hours > 0) {
          return {
            ...prevTimeLeft,
            hours: prevTimeLeft.hours - 1,
            minutes: 59,
            seconds: 59,
          };
        } else if (prevTimeLeft.days > 0) {
          return {
            ...prevTimeLeft,
            days: prevTimeLeft.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        } else {
          clearInterval(interval);
          return prevTimeLeft;
        }
      });
    }, 1000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-container">
      <div className="title-contador">
        <span>Cuánto falta?</span>
      </div>
      <div className="countdown-timer-horizontal">
        <div className="countdown-item">
          <div className="pizarra">
            <Title level={4}>{timeLeft.days}</Title>
          </div>
          <span>Días</span>
        </div>
        <div className="countdown-item">
          <div className="rosado">
            <Title level={4}>{timeLeft.hours}</Title>
          </div>
          <span>Horas</span>
        </div>
        <div className="countdown-item">
          <div className="pizarra">
            <Title level={4}>{timeLeft.minutes}</Title>
          </div>
          <span>Minutos</span>
        </div>
        <div className="countdown-item">
          <div className="rosado">
            <Title level={4}>{timeLeft.seconds}</Title>
          </div>
          <span>Segundos</span>
        </div>
      </div>
    </div>
  );
};

export default Contador;
