import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount() {
    axios.get('https://netboxqa.xcade.net/api/dcim/racks/', {
      headers: {
        'Authorization': 'Token 467c528e78698047e8af1557597712c7e5073ad6'
      }
    })
    .then(response => console.log(response.data))
    .catch(err => console.log(err))
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );

  }
}

export default App;
