import React from "react";
import './WeatherList.css';
import Item from "../Item/Item";

const WeatherList = (props) => {
  return (
    <div className='weather_list'>
      {
        props.weather.map((item, i) => {
          return (
            <Item
              key={i}
              name={item.name}
              country={item.sys.country}
              temp={item.main.temp}
              feelsLike={item.main.feels_like}
              weather={item.weather[0].main}
              description={item.weather[0].description}
              minTemp={item.main.temp_min}
              maxTemp={item.main.temp_max}
              pressure={item.main.pressure}
              humidity={item.main.humidity}
              windSpeed={item.wind.speed}
              date={item.dt_txt}
              parseDate={props.parseDate}
            />
          )
        })
      }
    </div>
  )
};

export default WeatherList;