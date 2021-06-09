import React, { Component } from "react";
import Search from "./components/Search";
import WeatherItem from "./components/WeatherItem"
import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json"
import logo from './img/weather-icons/mostlycloudy.svg';
import image from './img/weather-icons/clear.svg';
import partlycloudy from './img/weather-icons/partlycloudy.svg'
import rain from './img/weather-icons/rain.svg'
import cloudy from './img/weather-icons/cloudy.svg'
import drizzle from './img/weather-icons/drizzle.svg'
import fog from './img/weather-icons/fog.svg'
import snow from './img/weather-icons/snow.svg'
import storm from './img/weather-icons/storm.svg'
import unknown from './img/weather-icons/unknown.svg'


import "./App.css";
import Hours from "./components/Hours";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "Amira"
    };
  }

  render() {
    return (
      <div className="app">

        <Search/>
          <WeatherItem
            status={fakeWeatherData.list[4].weather[0].description}
            src={cloudy}
            temp_min={fakeWeatherData.list[4].main.temp_min}
            temp_max={fakeWeatherData.list[4].main.temp_max}
            humidity={fakeWeatherData.list[4].main.humidity}
            pressure={fakeWeatherData.list[4].main.pressure}
          />
        <Hours
        status={fakeWeatherData.list[5].weather[0].description}
            src3={rain}
            temp={fakeWeatherData.list[5].main.temp}
        status={fakeWeatherData.list[6].weather[0].description}
            src4={rain}
            temp={fakeWeatherData.list[6].main.temp}
        status={fakeWeatherData.list[7].weather[0].description}
            src5={rain}
            temp={fakeWeatherData.list[7].main.temp}
        status={fakeWeatherData.list[8].weather[0].description}
            src6={rain}
            temp={fakeWeatherData.list[8].main.temp}
        status={fakeWeatherData.list[9].weather[0].description}
            src7={rain}
            temp={fakeWeatherData.list[9].main.temp}
        status={fakeWeatherData.list[10].weather[0].description}
            src8={rain}
            temp={fakeWeatherData.list[10].main.temp}
        status={fakeWeatherData.list[11].weather[0].description}
            src9={rain}
            temp={fakeWeatherData.list[11].main.temp}
        />

      </div>
    );
  }
}

export default App;