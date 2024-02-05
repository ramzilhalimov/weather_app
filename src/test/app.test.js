import { getCurrentWeather, getWeatherData } from "../api";

test("fetch weather data for a city", async () => {
  const city = "New York";
  const weatherData = await getWeatherData(city);
  expect(weatherData).toBeDefined();
  expect(weatherData.city.name).toBe("New York");
  expect(weatherData.list.length).toBeGreaterThan(0);
});

test("fetch current weather for a city", async () => {
  const city = "Paris";
  const currentWeatherData = await getCurrentWeather(city);
  expect(currentWeatherData).toBeDefined();
  expect(currentWeatherData.name).toBe("Paris");
  expect(currentWeatherData.main).toBeDefined();
});

// test("format daily weather data into cards", () => {
//   const mockDailyData = [
//     {
//       dt_txt: "2024-02-01 12:00:00",
//       main: { temp: 10 },
//       weather: [{ description: "Cloudy" }],
//     },
//     {
//       dt_txt: "2024-02-02 12:00:00",
//       main: { temp: 15 },
//       weather: [{ description: "Sunny" }],
//     },
//   ];
//   const formattedCards = formatCards(mockDailyData);
//   expect(formattedCards).toHaveLength(2);
//   expect(formattedCards[0]).toHaveProperty("day");
//   expect(formattedCards[0]).toHaveProperty("weatherDescription");
// });
