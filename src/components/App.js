import React, { Component } from 'react';
import Container from './Container';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.location.pathname.substring(1)
    }
  }
  render() {
    return (
      <div className="App">
        <div className="header header-flights flex-header">
          <div className="flex-1">
            <h1 className="logo">BURNING AIRLINES</h1>
          </div>
          <div className="flex-1">
            <img src="https://i.imgur.com/HGpVOhb.png" alt="Flames and Death"/>
          </div>
        </div>
        {/* <p>Search for a flight right here</p> */}
        <Container user_id={this.props.user_id} username={this.state.username} />
      </div>
    );
  }
}

export default App;
