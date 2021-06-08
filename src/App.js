import React, { Component } from "react";
import Search from "./components/Search";
import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";
import logo from './img/weather-icons/mostlycloudy.svg';
import image from './img/weather-icons/clear.svg';

import "./App.css";

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

        <div className="header">
            <input className="inputWeather" type="text" id="name" placeholder="Type in a City name" />
            <input className="buttonWeather" type="button" id="submitWeather" defaultValue="FIND WEATHER" />
        </div>

        <div className="body">
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
        </div>
        <div className="Content">
        <div className="content">
           <div style={{marginRight:"70%", marginTop:"3%"}}>
            <p style={{color:"black"}}>03:00</p>
            <div>
              <img src={logo} className="image2"/>
            </div>
            <p style={{}}>8 &deg;C</p>
           </div>
        </div>

        <div className="content1">
           <div style={{marginRight:"50%", marginTop:"-14.5%"}}>
            <p style={{color:"black"}}>06:00</p>
            <div>
              <img src={logo} className="image3"/>
            </div>
            <p style={{}}>9 &deg;C</p>
           </div>
        </div>

        <div className="content2">
           <div style={{marginRight:"30%", marginTop:"-10%"}}>
            <p style={{color:"black"}}>09:00</p>
            <div>
              <img src={image} className="image4"/>
            </div>
            <p style={{}}>14 &deg;C</p>
           </div>
        </div>

        <div className="content3">
           <div style={{marginRight:"10%", marginTop:"-10.5%"}}>
            <p style={{color:"black"}}>12:00</p>
            <div>
              <img src={image} className="image5"/>
            </div>
            <p style={{}}>17 &deg;C</p>
           </div>
        </div>

        <div className="content4">
           <div style={{marginLeft:"10%", marginTop:"-10%"}}>
            <p style={{color:"black"}}>15:00</p>
            <div>
              <img src={image} className="image6"/>
            </div>
            <p style={{}}>18 &deg;C</p>
           </div>
        </div>

        <div className="content5">
           <div style={{marginLeft:"30%", marginTop:"-10.25%"}}>
            <p style={{color:"black"}}>18:00</p>
            <div>
              <img src={image} className="image7"/>
            </div>
            <p style={{}}>16 &deg;C</p>
           </div>
        </div>

        <div className="content6">
           <div style={{marginLeft:"50%", marginTop:"-9.5%"}}>
            <p style={{color:"black"}}>06:00</p>
            <div>
              <img src={logo} className="image8"/>
            </div>
            <p style={{}}>9 &deg;C</p>
           </div>
        </div>
        </div>
        </div>
    );
  }
}

export default App;