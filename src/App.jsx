import { useState, useEffect } from "react";
import Weather from "./Components/Weather";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);

  async function getGeolocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  async function getWeather(location) {
    const url = "https://api.open-meteo.com/v1/forecast";
    const params = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      daily: ["weather_code", "temperature_2m_max", "temperature_2m_min", "precipitation_probability_max"],
      timezone: "America/Los_Angeles",
      temperature_unit: "fahrenheit",
      wind_speed_unit: "mph",
      precipitation_unit: "inch",
    };

    const response = await fetch(`${url}?${new URLSearchParams(params)}`);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();

    // console.log(data);

    const week = [];

    (function populateWeek() {
      for (let i = 0; i < 7; i++) {
        const date = data.daily.time[i];
        const weatherCode = data.daily.weather_code[i];
        const temperatureMax = data.daily.temperature_2m_max[i].toFixed(0);
        const temperatureMin = data.daily.temperature_2m_min[i].toFixed(0);
        const precipitation = data.daily.precipitation_probability_max[i].toFixed(0);

        function weatherMap(weatherCode) {
          if (weatherCode === 0) {
            return "sunny";
          }

          if ([1, 2].includes(weatherCode)) {
            return "partly-cloudy";
          }

          if (weatherCode === 3) {
            return "cloudy";
          }

          if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(weatherCode)) {
            return "rainy";
          }

          if ([71, 73, 75, 77, 85, 86].includes(weatherCode)) {
            return "snowy";
          }

          if ([95, 96, 99].includes(weatherCode)) {
            return "stormy";
          }

          return null;
        }

        function getDayName(date) {
          const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
          const day = new Date(date).getDay();

          return dayNames[day];
        }

        function getDayNum(date) {
          return new Date(date).getDate();
        }

        const day = {
          date: getDayNum(date),
          dayName: getDayName(date),
          weatherCode: weatherCode,
          weather: weatherMap(weatherCode),
          temperatureMax: temperatureMax,
          temperatureMin: temperatureMin,
          precipitation: precipitation,
        };

        week.push(day);
      }
    })();

    console.log(week);

    setWeather(week);
  }

  useEffect(() => {
    getGeolocation().then((location) => {
      getWeather(location);
    });
  }, []);

  return (
    <>
      {weather?.map((day) => (
        <Weather key={day.date} data={day} />
      ))}
    </>
  );
}

export default App;
