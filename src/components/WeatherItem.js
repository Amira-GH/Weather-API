import React, { Component } from "react";
import { render } from "react-dom";
import logo from '../img/weather-icons/mostlycloudy.svg';
import "./WeatherItem.css";

export default class WeatherItem extends Component {
  render() {
    return <div className="body">
    <img src={logo} className="imglogo"></img>
    <div className="grid-container">
       <div className="grid-item1">overcast clouds </div><br></br>
       <div className="grid-item2">Temperature</div>
       <div className="grid-item3">10&deg; to 11&deg; C</div><br></br>
       <div className="grid-item4">Humidity</div>
       <div className="grid-item5">78% </div>
       <div className="grid-item6">Pressure</div>
       <div className="grid-item7">1008.48</div>
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
