import React, { Component } from 'react';

export default class SearchBar extends Component {
  render(){
    return (
      <form className="input-group">
        <input placeholder="Search For A City...." />
      </form>
      );
  }
}
