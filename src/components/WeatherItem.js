import React, { Component } from "react";
import { render } from "react-dom";
import logo from '../img/weather-icons/mostlycloudy.svg';
import "./WeatherItem.css";
import "../fakeWeatherData.json";


export default class WeatherItem extends Component {
  render() {
    return <div className="body">
    <img src={this.props.src} className="imglogo"></img>
    <div className="grid-container">
       <div className="grid-item1"> {this.props.status}</div><br></br>
       <div className="grid-item2">Temperature</div>
       <div className="grid-item3">{(this.props.temp_min-273.15).toFixed(0)} to {(this.props.temp_max-273.15).toFixed(0)} &deg;C</div><br></br>
       <div className="grid-item4">Humidity</div>
       <div className="grid-item5">{this.props.humidity}% </div>
       <div className="grid-item6">Pressure</div>
       <div className="grid-item7">{this.props.pressure}</div>
    </div>
  </div>;
  }
}
export class SayHello extends Component {
  render() {
    return (
      <div style={{ color: this.props.color, backgroundColor: "yellow" }}>
        Hello {this.props.name}
        
      </div>
    );
  }
}
