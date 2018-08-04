import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';


class WeatherList extends Component {
  renderWeather(cityData) {
    const {name} = cityData.city;
    const temps = cityData.list.map(weatherData => weatherData.main.temp);
    console.log('temps!!! => ', temps);
    return (
      <tr key={name}>
        <td>{name}</td>
      </tr>
    );
  }
  render(){
    return (
      <table className="table table-hover">
        <thead>
            <tr>
              <th>City</th>
              <th>Temperature</th>
              <th>Pressure</th>
              <th>Humidity</th>
            </tr>
        </thead>
        <tbody>
        {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList);
