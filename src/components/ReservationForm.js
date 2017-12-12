import React, { PureComponent as Component } from 'react';
import SeatMap from './SeatMap';
import FlightInfo from './FlightInfo';
import UserInfo from './UserInfo';

import axios from 'axios';


// PARENT

class ReservationForm extends Component {
  constructor() {
    super();
    this.state = {
      flight: {},
      user: {},
      takenSeats: []
    };
    const fetchFlight = () => {
      axios.get(`http://burningairlinesdb.herokuapp.com/flights/${ 1 }.json`)   // TODO update when component is integrated
        .then( results => this.setState({ flight: results.data }) )
        .then( () => {
          const reservations = this.state.flight.reservations.slice();
          const takenSeats = reservations.map(r => r.seat);
          // console.log('Taken seats on this flight: ', takenSeats);
          this.setState({ takenSeats });
        });
      setTimeout( fetchFlight, 4000 );
    }
    const fetchUser = () => {
      axios.get(`http://burningairlinesdb.herokuapp.com/users/${ 1 }.json`)   // TODO update when component is integrated
        .then( results => this.setState({ user: results.data }) );
      setTimeout( fetchUser, 4000 );
    }
    fetchFlight();
    fetchUser();
  }

  render() {
    return (
      <div>
        <h1>Make a reservation</h1>
        <UserInfo userName={ this.state.user.name } />
        <FlightInfo flightNumber={ this.state.flight.number } flightId={ this.state.flight.id } />
        <SeatMap rows={ this.state.flight.rows } cols={ this.state.flight.cols } takenSeats={ this.state.takenSeats } />
      </div>
    );
  }
}


export default ReservationForm;
