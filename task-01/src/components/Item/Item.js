import React from "react";
import './Item.css';


const Item = (props) => {

  function ShowDate(props) {
    const state = props.state;
    const date = props.date;
    if (state) {
      return (
        <p className="date"> {date} </p>
      )
    } else {
      return (
        <p className="date"> Today </p>
      )
    }
  }

  return (
    <div className="item" key={props.id}>
      <div className="region">
        <p className="city">City: {props.name ? props.name : 'Kharkiv'} {props.country ? props.country : 'UA'}</p>
        <ShowDate state={props.state} date={parseDate(props.date)} />
      </div>
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
      <div className="other_wrap">
        <p className="temp_min">Min temp: {props.minTemp} &#8451;</p>
        <p className="temp_max">Max temp: {props.maxTemp} &#8451;</p>
        <p className="pressure">Pressure: {props.pressure} in</p>
        <p className="humidity">Humidity: {props.humidity} %</p>
        <p className="wind_speed">Wind speed: {props.windSpeed} mph</p>
      </div>
    </div>
  )
};

const parseDate= (string) => {
  let date = new Date(string).toUTCString();
  return date.slice(0, -3);
};


export default Item;