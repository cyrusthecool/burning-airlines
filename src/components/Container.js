import React, { PureComponent as Component } from 'react';
import FlightsSearch from './FlightsSearch';
import ReservationForm from './ReservationForm';

class Container extends Component {
  render() {
    return (
      <div>
        <FlightsSearch />
        <ReservationForm />
      </div>
    );
  }
}

export default Container;
