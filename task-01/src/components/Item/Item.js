import React from "react";
import './Item.css';
import Region from "./Region/Region";
import Weather from "./Weather/Weather";
import Properties from "./Properties/Properties";

const Item = (props) => {

  return (
    <div className="item" key={props.i}>
      <Region name={props.name} country={props.country} date={props.date} parseDate={props.parseDate} />
      <Weather temp={props.temp} feelsLike={props.feelsLike} weather={props.weather} description={props.description} />
      <Properties minTemp={props.minTemp} maxTemp={props.maxTemp} pressure={props.pressure} humidity={props.humidity} windSpeed={props.windSpeed} />
    </div>
  )
};

export default Item;