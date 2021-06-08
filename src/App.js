import React, { Component } from "react";
import Search from "./components/Search";
import WeatherItem from "./components/WeatherItem"
import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";
import logo from './img/weather-icons/mostlycloudy.svg';
import image from './img/weather-icons/clear.svg';
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
        <WeatherItem/>
        <Hours/>
        </div>
    );
  }
}

export default App;