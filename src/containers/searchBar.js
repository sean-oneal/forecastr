import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.setState({
      searchInput: e.target.value
    });
  }

  onFormSubmit(e) {
    e.preventDefault();
  }

  render(){
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get the five-day weather forecast in your favorite cities"
          className="form-control"
          value={this.state.searchInput}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    );
  }
}
