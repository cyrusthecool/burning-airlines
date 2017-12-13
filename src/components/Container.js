import React, { PureComponent as Component } from 'react';
import FlightsSearch from './FlightsSearch';
import ReservationForm from './ReservationForm';

class Container extends Component {
  storeFlightId = (flight_id) => {
    this.setState({ flight_id });
  }
  constructor() {
    super();
    this.state = {
      flight_id: ''
    }
  }
  render() {
    return (
      <div>
        <FlightsSearch storeFlightId={ this.storeFlightId } />
        <ReservationForm />
      </div>
    );
  }
}

export default Container;
