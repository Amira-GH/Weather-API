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
          <img src={logo} className="imgLogo"/>        
          <p style={{color:"white", marginTop:"-20px", fontWeight:"bold"}}>overcast clouds</p>
          <p style={{color:"black", marginTop:"-620px", fontWeight:"bold", marginLeft:"-100px"}}>Temperature <p style={{fontWeight:"normal", marginTop:"-20px", marginLeft:"250px"}}>10&deg; to 11&deg;C</p></p>
          <p style={{color:"black ", marginTop:"-630px", fontWeight:"bold", marginLeft:"-150px",fontSize:"12px"}}>Humidity<p style={{fontWeight:"lighter", marginTop:"-14px", marginLeft:"115px", fontSize:"12px"}}>78%</p><p style={{color:"black ", marginTop:"-668px", fontWeight:"bold",fontSize:"12px" ,marginLeft:"230px"}}>Pressure <p style={{fontWeight:"lighter", marginTop:"-16px", marginLeft:"115px", fontSize:"12px"}}>1008.48</p></p></p>
        </div>

        <div style={{marginLeft:"-50px"}}>
            <p style={{marginTop:"-220px",marginLeft:"220px"}}>03:00</p>
            <div style={{marginTop:"-650px", marginLeft:"190px"}}>
              <img src={logo} style={{width:"100px",height:"100px"}}/>    
            </div>
            <p style={{marginLeft:"220px", marginTop:"-550px"}}>8 &deg;C</p>
        </div>

        <div style={{marginLeft:"110px",marginTop:"-657px"}}>
            <p style={{marginTop:"-220px",marginLeft:"220px"}}>06:00</p>
            <div style={{marginTop:"-650px", marginLeft:"190px"}}>
              <img src={logo} style={{width:"100px",height:"100px"}}/>    
            </div>
            <p style={{marginLeft:"220px", marginTop:"-550px"}}>9 &deg;C</p>
        </div>

        <div style={{marginLeft:"270px",marginTop:"-657px"}}>
            <p style={{marginTop:"-220px",marginLeft:"220px"}}>09:00</p>
            <div style={{marginTop:"-650px", marginLeft:"190px"}}>
              <img src={image} style={{width:"100px",height:"100px"}}/>    
            </div>
            <p style={{marginLeft:"220px", marginTop:"-550px"}}>14 &deg;C</p>
        </div>

        <div style={{marginLeft:"430px",marginTop:"-657px"}}>
            <p style={{marginTop:"-220px",marginLeft:"220px"}}>12:00</p>
            <div style={{marginTop:"-650px", marginLeft:"190px"}}>
              <img src={image} style={{width:"100px",height:"100px"}}/>    
            </div>
            <p style={{marginLeft:"220px", marginTop:"-550px"}}>17 &deg;C</p>
        </div>

        <div style={{marginLeft:"580px",marginTop:"-657px"}}>
            <p style={{marginTop:"-220px",marginLeft:"220px"}}>15:00</p>
            <div style={{marginTop:"-650px", marginLeft:"190px"}}>
              <img src={image} style={{width:"100px",height:"100px"}}/>    
            </div>
            <p style={{marginLeft:"220px", marginTop:"-550px"}}>18 &deg;C</p>
        </div>

        <div style={{marginLeft:"730px",marginTop:"-657px"}}>
            <p style={{marginTop:"-220px",marginLeft:"220px"}}>18:00</p>
            <div style={{marginTop:"-650px", marginLeft:"190px"}}>
              <img src={image} style={{width:"100px",height:"100px"}}/>    
            </div>
            <p style={{marginLeft:"220px", marginTop:"-550px"}}>16 &deg;C</p>
        </div>

        <div style={{marginLeft:"880px",marginTop:"-657px"}}>
            <p style={{marginTop:"-220px",marginLeft:"220px"}}>21:00</p>
            <div style={{marginTop:"-650px", marginLeft:"190px"}}>
              <img src={logo} style={{width:"100px",height:"100px"}}/>    
            </div>
            <p style={{marginLeft:"220px", marginTop:"-550px"}}>13 &deg;C</p>
        </div>
      </div>
    );
  }
}

export default App;