import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from './logomeet.svg';
import './App.css';
import ApiCalendar from 'react-google-calendar-api';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to <code> Meet Your Professor </code>
          </p>
          <button className = "button" id="login"> <code> Login </code> </button>
        </header>
      </div>
    );
  }
}

export default App;


{/*<a className="App-link" href="https://meetyourprofessor.berkeley.edu" target="_blank" rel="noopener noreferrer">
      Learn React </a> */}
