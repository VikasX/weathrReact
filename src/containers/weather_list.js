import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";
import Bar from "../components/bar";
import _ from "lodash";

import GoogleMap from "../components/google_map";

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => (weather.main.temp-273));
console.log(temps);


     //getting temp arr from inside data
    //const temps= _.map( cityData.list.map(weather => (weather.main.temp) (temp) => temp-273);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    
// const lon = cityData.city.coord.lon , so use es6 for 1 line
//        <td><GoogleMap lon={lon} lat={lat} /></td>
    const { lon, lat } = cityData.city.coord;

    return (
      <tr className="table-hover2" key={name}>
<td><GoogleMap lon={lon} lat={lat} /><h4 className="cityname">{name}</h4></td>
        <td><Chart data={temps} color="blue" units="&#8451;" /></td>
        <td><Bar data={pressures} color="grey" units="hPa" /></td>
        <td><Chart data={humidities} color="red" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr >
            <th>City</th>
            <th>Temperature (&#8451;)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

/*tradional way

function mapStateToProps({ state }) {
  return { weather : state.weather};
}



*/
//es6
function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
