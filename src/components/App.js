import React, { Component } from 'react';
import Container from './Container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1 className="logo">BURNING AIRLINES</h1>
          <img src="https://i.imgur.com/HGpVOhb.png" />
        </div>
        <p>Search for a flight right here</p>
        <Container />
      </div>
    );
  }
}

export default App;
