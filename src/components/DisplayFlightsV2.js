// maddi says hi

import React, { PureComponent as Component } from 'react';

class DisplayFlightsV2 extends Component {
  constructor(props) {
    super(props);
    this.state = {flight_id: ""};
    this._update = this._update.bind(this);
  }
  _update(flight_id)
  {
    console.log(flight_id);
      this.setState({flight_id});
  }

  _handleClick = (flight_id) => {
    this.props.passFlightId( flight_id );
  }

  render() {
    console.log( this.props.flights_all );
    return (
      <div>
        {this.props.flights_all.map (s=>
          <p key={s.id}>{s.origin} {s.destination} {s.id} {s.date} {s.name} {s.number}
          <button onClick = { () => { this._handleClick(s.id) } }>
            {s.id}
          </button></p>
        )}
      </div>
    );
  }
}

export default DisplayFlightsV2;
