import React, { useState, useEffect } from "react";
import { Card } from "../Card/Card";
import "./WeekContainer.css";
import { getCurrentWeather, getWeatherData } from "../../api";

export const WeekContainer = () => {
  const [days, setDays] = useState([]);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [city, setCity] = useState("Ufa");
  const [inputCity, setInputCity] = useState("");

  const fetchData = async () => {
    try {
      const [weatherData, currentWeatherData] = await Promise.all([
        getWeatherData(city),
        getCurrentWeather(city),
      ]);

      if (weatherData && weatherData.list) {
        const dailyData = weatherData.list.filter((reading) =>
          reading.dt_txt.includes("12:00:00")
        );
        setDays(dailyData);
      } else {
        throw new Error("Failed to fetch weather data");
      }

      if (currentWeatherData) {
        setCurrentWeather(currentWeatherData);
      }
    } catch (error) {
      console.error("Произошла ошибка при получении данных о погоде", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [city]);

  const handleGetWeather = () => {
    setCity(inputCity);
  };

  const formatCards = () => {
    return days.map((day, index) => <Card day={day} key={index} />);
  };
  const weatherIconCode = currentWeather?.weather[0].icon;
  const iconURL = `https://openweathermap.org/img/wn/${weatherIconCode}.png`;

  const handleCityChange = (event) => {
    setInputCity(event.target.value);
  };

  return (
    <div className="header center">
      <input
        className="header-input"
        type="text"
        value={inputCity}
        onChange={handleCityChange}
      />
      <button className="header-button" onClick={handleGetWeather}>
        Получить прогноз
      </button>

      {currentWeather && (
        <div className="current-section center">
          <h2 className="current-section-name">Текущая погода:</h2>
          <div className="current-section-card">
            <img className="card-image" alt="weather" src={iconURL} />
            <h2> {Math.round(currentWeather.main?.temp)} °C</h2>
            <p>Скорость ветра: {currentWeather.wind.speed} м/c</p>
            <p>Влажность: {currentWeather.main.humidity}%</p>
            <p> {currentWeather.weather[0].description}</p>
          </div>
        </div>
      )}

      <div className="content-section center">
        <h2 className="content-section-name">Прогноз погоды на 5 дней</h2>
        <div className="justify-content">{formatCards()}</div>
      </div>
    </div>
  );
};
