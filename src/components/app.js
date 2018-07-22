import React, { Component } from 'react';

import SearchBar from '../containers/searchBar';

export default class App extends Component {
  render() {
    console.log(process.env.API_KEY)
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}
