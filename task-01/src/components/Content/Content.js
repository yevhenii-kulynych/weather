import React, { Component } from "react";
import './Content.css';
import OneDayWeather from "../OneDayWeather/OneDayWeather";
import FiveDaysWeather from "../FiveDaysWeather/FiveDaysWeather";


class Content extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="widgets">
        <OneDayWeather />
        <FiveDaysWeather />
      </div>
      );
  }
}

export default Content;