import React from "react";
import './Content.css';
import WeatherList from "../WeatherList/WeatherList";
import useFetch from "../useFetch";
import useFetchForecast from "../useFetchForecast";

const openWeatherApiKey = 'c792484ade42380886f51003cfcaf04d';

export default function Content(props) {
  const oneDayWeather = useFetch(`https://api.openweathermap.org/data/2.5/weather?q=Kharkiv,ua&units=metric&mode=json&appid=${openWeatherApiKey}`);
  const fiveDaysWeather = useFetchForecast(`https://api.openweathermap.org/data/2.5/forecast?q=Kharkiv,ua&units=metric&mode=json&appid=${openWeatherApiKey}`);

  return (
    <div className="widgets">
      <div className="one_day">
        <h2 className="title">Today weather</h2>
        <WeatherList weather={oneDayWeather} parseDate={parseDate} />
      </div>
      <div className="five_days">
        <h2 className="title">Weather for 5 days</h2>
        <WeatherList weather={fiveDaysWeather} parseDate={parseDate}/>
      </div>
    </div>
  );
}

const parseDate = (string) => {
  let date = new Date(string).toUTCString();
  return date.slice(0, -3);
};