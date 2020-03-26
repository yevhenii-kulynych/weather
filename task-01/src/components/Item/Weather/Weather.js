import React from "react";


const Weather = (props) => {

  return (
    <div className="main_wrap">
      <div className="temp_wrap">
        <p className="temp"> Temperature: {props.temp} &#8451;</p>
        <p className="temp_feels-like"> Feels like: {props.feelsLike} &#8451;</p>
      </div>
      <div className="weather_wrap">
        <p className="weather"> {props.weather} </p>
        <p className="description"> {props.description} </p>
      </div>
    </div>
  )
};

export default Weather;