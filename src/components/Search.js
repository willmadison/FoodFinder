import React from 'react';
import searchbutton from '../icons/search.png';
import { Route } from 'react-router-dom'
import './Search.css';

export class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      searchExecuted: false
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  onSubmit = (event) => {
    this.setState({ searchExecuted: true });
  }

  render() {
    const { value, searchExecuted } = this.state;
    const errorStyle = {
      display: !value && searchExecuted ? 'block' : 'none',
      color: 'red'
    }

    return (
      <Route render={({ history }) => (
        <div className="App">
          <label id="location-label">
            Enter Location<br />
            <input
              id="location-search"
              type="text"
              placeholder="Enter City"
              value={this.state.value}
              onChange={this.handleChange}>
            </input>
            
            <img id='search-icon' alt='Search' src={searchbutton} onClick={() => {
              this.setState({ searchExecuted: true });
              if (value) {
                history.push('/results');
              }}} />
            <div id="error-handling" style={errorStyle}>
              Please enter a location.
            </div>
          </label>
        </div>)}
      />
    );
  }
}
