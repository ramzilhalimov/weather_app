import axios from "axios";

const apiKey = "f4ed7d4b0f6b64da809a93b6850cb852";

export const getWeatherData = async (city) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ru&units=metric&appid=${apiKey}`
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Error with response data:", error.response.data);
    } else if (error.request) {
      console.error("Error with request:", error.request);
    } else {
      console.error("Error:", error.message);
    }
    throw new Error("Failed to fetch weather data");
  }
};

export const getCurrentWeather = async (city) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Error with response data:", error.response.data);
    } else if (error.request) {
      console.error("Error with request:", error.request);
    } else {
      console.error("Error:", error.message);
    }
    throw new Error("Failed to fetch current weather data");
  }
};
