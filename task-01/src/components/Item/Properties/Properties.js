import React from "react";


const Properties = (props) => {

  return (
    <div className="other_wrap">
      <p className="temp_min">Min temp: {props.minTemp} &#8451;</p>
      <p className="temp_max">Max temp: {props.maxTemp} &#8451;</p>
      <p className="pressure">Pressure: {props.pressure} in</p>
      <p className="humidity">Humidity: {props.humidity} %</p>
      <p className="wind_speed">Wind speed: {props.windSpeed} mph</p>
    </div>
  )
};

export default Properties;