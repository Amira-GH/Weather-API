import React, { Component } from "react";
import Search from "./components/Search";
import WeatherItem from "./components/WeatherItem"
import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json"
import logo from './img/weather-icons/mostlycloudy.svg';
import clear from './img/weather-icons/clear.svg';
import partlycloudy from './img/weather-icons/partlycloudy.svg';
import mostlycloudy from './img/weather-icons/mostlycloudy.svg'
import rain from './img/weather-icons/rain.svg'
import Clouds from './img/weather-icons/cloudy.svg'
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
      city: "london",
      weather:null,
      pressure:"",
      temp_min:"",
      temp_max:"",
      humidity:"",
      description:"",
      imageSrc:"",
      time:"",
      temp:"",
      list: [],
      today: {}
    };
  }

  async componentDidMount() {
    try{
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&cnt=8&units=metric&appid=377f50d0d6c1009ec3998e0400c5cffb`;
    const response = await fetch(url);
    const data = await response.json();

  
    this.setState({
      list: data.list,
      today: {
        description: data.list[1].weather[0].description,
        temp: data.list[1].main.temp,
        tempMax: data.list[1].main.temp_max,
        tempMin: data.list[1].main.temp_min,
        humidity: data.list[1].main.humidity,
        pressure: data.list[1].main.pressure,
        nbId: data.list[1].weather[0].id
      }
    });
  }catch(err){
    console.log(err);
  }
  }

  handleClick = async () => {
    this.setState({ city: "" });
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&cnt=8&units=metric&appid=377f50d0d6c1009ec3998e0400c5cffb`
    );
    const result = await response.json();
    
    this.setState({
      list: result.list,
      today: {
        description: result.list[1].weather[0].description,
        temp: result.list[1].main.temp,
        tempMax: result.list[1].main.temp_max,
        tempMin: result.list[1].main.temp_min,
        humidity: result.list[1].main.humidity,
        pressure: result.list[1].main.pressure,
        nbId: result.list[1].weather[0].id
      }
    });

    this.setState({ weather: result });
    this.setState({temp_min:result.list[0].main.temp_min})   
    this.setState({temp_max:result.list[0].main.temp_max}) 
    this.setState({pressure:result.list[0].main.pressure})
    this.setState({humidity:result.list[0].main.humidity})
    this.setState({description:result.list[0].weather[0].description})
    this.setState({imageSrc:result.list[0].weather[0].main})
    this.setState({nbId: 890})
    console.log("nbid",this.state.nbId)
  };

  changeHandler = e => {
    this.setState({ city: e.target.value });
  };

  backgroundPicker = nb => {
    if (nb >= 300 && nb < 800) {
      return "#9EBAD5";
    } else {
      return "#2490E1";
    }
  };

  icon = nb => {
    if (nb < 300) {
      return storm;
    } else if (nb >= 300 && nb < 500) {
      return drizzle;
    } else if (nb >= 500 && nb < 600) {
      return rain;
    } else if (nb >= 600 && nb < 700) {
      return snow;
    } else if (nb >= 700 && nb < 800) {
      return fog;
    } else if (nb === 800) {
      return clear;
    } else if (nb === 801) {
      return fog;
    } else if (nb >= 801 && nb < 805) {
      return mostlycloudy;
    }
  };

  render() {
    return (
      <div className="app">

        <Search
          click={this.handleClick}
          change={this.changeHandler}
          value={this.state.searchInput}
        />
          <WeatherItem
            status={this.state.description}
            source={this.state.imageSrc}
            temp_min={this.state.temp_min}
            temp_max={this.state.temp_max}
            humidity={this.state.humidity}
            pressure={this.state.pressure}
          />
        <Hours
          list={this.state.list}
          icon={this.icon}
          nbID={this.state.today.nbId}
          backgroundPicker={this.backgroundPicker}
        />
      </div>
    );
  }
}

export default App;