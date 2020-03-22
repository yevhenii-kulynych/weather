import React, {Component} from "react";
import './OneDayWeater.css';
import Item from "../Item/Item";


class OneDayWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oneDayWeather: []
    };
    this.openWeatherApiKey = 'c792484ade42380886f51003cfcaf04d';
  }

  componentDidMount() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kharkiv,ua&units=metric&mode=json&appid=${this.openWeatherApiKey}`)
      .then(result => result.json())
      .then((data) => {
          this.setState({oneDayWeather: [data]})
        },
        // error handler
        (error) => {
          throw new Error(error);
        })
  }

  render() {
    return (
      <div className="one-day-weather">
        <h1 className="title">Weather right now in Kharkiv</h1>
        {
          this.state.oneDayWeather.map(i => {
            return (
              <Item
              key={i.id}
              name={i.name}
              country={i.sys.country}
              temp={i.main.temp}
              feelsLike={i.main.feels_like}
              weather={i.weather[0].main}
              description={i.weather[0].description}
              minTemp={i.main.temp_min}
              maxTemp={i.main.temp_max}
              pressure={i.main.pressure}
              humidity={i.main.humidity}
              windSpeed={i.wind.speed}
              state={false}
              />
            )
          })
        }
      </div>
    )
  }
}

export default OneDayWeather;