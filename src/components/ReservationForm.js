import React, { PureComponent as Component } from 'react';
import SeatMap from './SeatMap';

import axios from 'axios';


// PARENT

class ReservationForm extends Component {
  constructor() {
    super();
    this.state = {
      flight: {},
      takenSeats: []
    };
    const fetchFlight = () => {
      axios.get(`http://burningairlinesdb.herokuapp.com/flights/${ 1 }.json`)   // TODO replace 1 with flight number coming from parent
        .then( results => this.setState({ flight: results.data }) )
        .then( () => {
          const reservations = this.state.flight.reservations.slice();
          const takenSeats = reservations.map(r => r.seat);
          console.log('Taken seats on this flight: ', takenSeats);
          this.setState({ takenSeats });
        });
      setTimeout( fetchFlight, 4000 );
    }
    fetchFlight();
  }

  render() {
    return (
      <div>
        <h1>Make a reservation</h1>
        <SeatMap rows={ this.state.flight.rows } cols={ this.state.flight.cols } takenSeats={ this.state.takenSeats } />
      </div>
    );
  }
}


export default ReservationForm;
