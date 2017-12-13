import React, { Component } from 'react';
import Container from './Container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>BURNING AIRLINES</h1>
        <p>Search flights:</p>
        <Container />
      </div>
    );
  }
}

export default App;
