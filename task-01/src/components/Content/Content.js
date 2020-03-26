import React, { Component } from "react";
import './Content.css';
import WeatherList from "../WeatherList/WeatherList";
import * as axios from 'axios';

const openWeatherApiKey = 'c792484ade42380886f51003cfcaf04d';

class Content extends Component {

  state = {
    weather: [],
    weatherFiveDays: [],
  };

  componentDidMount() {
    this.fetchDataWeatherOneDay();
    this.fetchDataWeatherFiveDays();
  }

  fetchDataWeatherOneDay() {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=Kharkiv,ua&units=metric&mode=json&appid=${openWeatherApiKey}`)
      .then(response => {
        this.setState({ weather:  [response.data] })
      })
      .catch(error => error);
  }

  fetchDataWeatherFiveDays() {
    axios
      .get(`https://api.openweathermap.org/data/2.5/forecast?q=Kharkiv,ua&units=metric&mode=json&appid=${openWeatherApiKey}`)
      .then(response => {
        this.setState({ weatherFiveDays:  [...response.data.list] })
      })
      .catch(error => error);
  }

  parseDate= (string) => {
    let date = new Date(string).toUTCString();
    return date.slice(0, -3);
  };

  render() {
    return (
      <div className="widgets">
        <div className="one_day">
          <h2 className="title">Today weather</h2>
          <WeatherList weather={this.state.weather} parseDate={this.parseDate}/>
        </div>
        <div className="five_days">
          <h2 className="title">Weather for 5 days</h2>
          <WeatherList weather={this.state.weatherFiveDays} parseDate={this.parseDate}/>
        </div>
      </div>
      );
  }
}

export default Content;