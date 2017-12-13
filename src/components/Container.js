import React, { PureComponent as Component } from 'react';
import FlightsSearch from './FlightsSearch';
import ReservationForm from './ReservationForm';

class Container extends Component {
  constructor() {
    super();
    this.state = {
      flight_id: '',
      prev_flight_id: ''
    }
  }

  resetFlightId = () => {
    this.setState({
      flight_id: ''
    });
  }

  storeFlightId = (flight_id) => {
    this.setState({
      prev_flight_id: this.state.flight_id,
      flight_id: flight_id
    });
  }


  // componentWillReceiveProps() {
  //   // console.log('will receive props');
  //   // console.log( this.props.flightId );
  //   this.setState({
  //     flight_id: this.props.flightId
  //   });
  // }

  render() {


    // if ( this.state.flight_id === '' ) {
    //   console.log('Init');
    //   return (
    //     <div>
    //       <FlightsSearch storeFlightId={ this.storeFlightId } resetFlightId={ this.resetFlightId } />
    //       {/* { this.state.flight_id !== '' ? <ReservationForm user_id={this.props.user_id} flightId={ this.state.flight_id } /> : null } */}
    //     </div>
    //   );
    // } else if ( (this.state.flight_id !== '') && (this.state.flight_id !== this.state.prev_flight_id) ) {
    //   console.log('State present');
    //   return (
    //     <div>
    //       <FlightsSearch storeFlightId={ this.storeFlightId } resetFlightId={ this.resetFlightId } />
    //       { this.state.flight_id !== '' ? <ReservationForm user_id={this.props.user_id} flightId={ this.state.flight_id } /> : null }
    //     </div>
    //   );
    // } else {
        return (
          <div>
            <FlightsSearch storeFlightId={ this.storeFlightId } resetFlightId={ this.resetFlightId } />
            { this.state.flight_id !== '' ? <ReservationForm user_id={this.props.user_id} flightId={ this.state.flight_id } /> : null }
          </div>
        );
    // }


  }
}

export default Container;
