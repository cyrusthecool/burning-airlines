import React, { PureComponent as Component } from 'react';
import FlightsSearch from './FlightsSearch';
import ReservationForm from './ReservationForm';

class Container extends Component {
  constructor() {
    super();
    this.state = {
      flight_id: ''
    }
  }

  resetFlightId = () => {
    this.setState({
      flight_id: ''
    });
  }

  storeFlightId = (flight_id) => {
    this.setState({ flight_id });
  }

  render() {
    return (
      <div>
        <FlightsSearch storeFlightId={ this.storeFlightId } resetFlightId={ this.resetFlightId } />

        { this.state.flight_id !== '' ? <ReservationForm flightId={ this.state.flight_id } /> : null }
        {/* { false ? <ReservationForm flightId={ this.state.flight_id } /> : null } */}

      </div>
    );
  }
}

export default Container;
