import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <label id="location-label">
          Enter Location<br/>
          <input id="location-search" type="text" placeholder="Enter City"></input>
        </label>
      </div>
    );
  }
}

export default App;
