import React, { Component } from "react";
import { render } from "react-dom";
import logo from '../img/weather-icons/mostlycloudy.svg';
import image from '../img/weather-icons/clear.svg';
import "./Hours.css";
import HoursComponent from "./HoursComponent";
import "../fakeWeatherData.json"

export default function Hours(props) {
  return (
    <div
      className="container extend"
      style={{ backgroundColor: props.backgroundPicker(props.nbID) }}>
      <div className="hourly-title"></div>
      <div style={{display:"flex" ,flexDirection:"row", justifyContent:"space-between",paddingLeft:"155px",paddingRight:"155px"}}>
        {props.list.map(list => (
          <HoursComponent
            time={list.dt_txt.split(" ")[1]}
            temp={list.main.temp}
            nbId={list.weather[0].id}
            icon={props.icon}
          />  
        ))}
      </div>
    </div>
  );
}