import React from "react";
import "./Card.css";

export const Card = ({ day }) => {
  const ms = day.dt * 1000;
  const weekdayName = new Date(ms).toLocaleString("ru", { weekday: "long" });

  const weatherIconCode = day.weather[0].icon;
  const iconURL = `https://openweathermap.org/img/wn/${weatherIconCode}.png`;

  return (
    <div className="col-auto">
      <div className="card bg-light">
        <h3 className="card-title">{weekdayName}</h3>
        <img className="card-image" alt="weather" src={iconURL} />
        <h2>{Math.round(day.main.temp)} °C</h2>
        <p>Скорость ветра: {day.wind.speed} м/c</p>
        <p>Влажность: {day.main.humidity}%</p>
        <p> {day.weather[0].description}</p>
      </div>
    </div>
  );
};
