import React, { Component } from "react";
import { render } from "react-dom";
import logo from '../img/weather-icons/mostlycloudy.svg';
import image from '../img/weather-icons/clear.svg';
import "./Hours.css";
import "../fakeWeatherData.json"

export default class Hours extends Component {
    render(){
        return <div className="Content">
        <div className="content">
           <div style={{marginRight:"70%", marginTop:"3%"}}>
            <p style={{color:"black"}}>03:00</p>
            <div>
              <img src={this.props.src3} className="image2"/>
            </div>
            <p style={{}}>{(this.props.temp-273.15).toFixed(0)}&deg;C</p>
           </div>
        </div>

        <div className="content1">
           <div style={{marginRight:"50%", marginTop:"-14.5%"}}>
            <p style={{color:"black"}}>06:00</p>
            <div>
              <img src={this.props.src4} className="image3"/>
            </div>
            <p style={{}}>{(this.props.temp-273.15).toFixed(0)}&deg;C</p>
           </div>
        </div>

        <div className="content2">
           <div style={{marginRight:"30%", marginTop:"-10%"}}>
            <p style={{color:"black"}}>09:00</p>
            <div>
              <img src={this.props.src5} className="image4"/>
            </div>
            <p style={{}}>{(this.props.temp-273.15).toFixed(0)}&deg;C</p>
           </div>
        </div>

        <div className="content3">
           <div style={{marginRight:"10%", marginTop:"-10.5%"}}>
            <p style={{color:"black"}}>12:00</p>
            <div>
              <img src={this.props.src6} className="image5"/>
            </div>
            <p style={{}}>{(this.props.temp-273.15).toFixed(0)} &deg;C</p>
           </div>
        </div>

        <div className="content4">
           <div style={{marginLeft:"10%", marginTop:"-10%"}}>
            <p style={{color:"black"}}>15:00</p>
            <div>
              <img src={this.props.src7} className="image6"/>
            </div>
            <p style={{}}>{(this.props.temp-273.15).toFixed(0)} &deg;C</p>
           </div>
        </div>

        <div className="content5">
           <div style={{marginLeft:"30%", marginTop:"-10.25%"}}>
            <p style={{color:"black"}}>18:00</p>
            <div>
              <img src={this.props.src8} className="image7"/>
            </div>
            <p style={{}}>{(this.props.temp-273.15).toFixed(0)} &deg;C</p>
           </div>
        </div>

        <div className="content6">
           <div style={{marginLeft:"50%", marginTop:"-9.5%"}}>
            <p style={{color:"black"}}>21:00</p>
            <div>
              <img src={this.props.src9} className="image8"/>
            </div>
            <p style={{}}>{(this.props.temp-273.15).toFixed(0)} &deg;C</p>
           </div>
        </div>
        </div>
    }
}