import React, { PureComponent as Component } from 'react';

class ExistingRes extends Component {

  render() {

    if (Object.keys(this.props.res).length!== 0){

      let fio= this.props.res.reservations;
      // console.log(fio);
      return (
        <div>
          <p>Do you have existing bookings? If you do, a list of them will appear below.</p>
          {fio.map (s=> <p key={s.id}>{s.flight.date} Flight {s.flight.number} - {s.flight.origin} to {s.flight.destination}, Seat {s.seat}</p>
          )}
        </div>
    );
    }
    else {

      // console.log(this);
      return (
        <div></div>
      )
    }
  }
}

export default ExistingRes;
