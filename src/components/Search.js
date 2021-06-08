import React from "react";

import clear from "../img/weather-icons/clear.svg";
import "./Search.css";
class Search extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (
      <div className="header">
        {this.state.input}
        <input className="inputWeather" type="text" id="name" placeholder="Type in a City name" />
        <button
          onClick={event => {
            this.props.handleInput(this.state.input);
          }}
          className="buttonWeather" type="button" id="submitWeather">
            FIND WEATHER
        </button>
      </div>
    );
  }
}
export default Search;
