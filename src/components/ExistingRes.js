import React, { PureComponent as Component } from 'react';
import axios from 'axios';

class ExistingRes extends Component {

  _handleClick = (res_id,array_res) => {
    console.log( res_id );
    console.log(array_res);

    axios.delete(`http://burningairlinesdb.herokuapp.com/reservations/${res_id.id}`).then((res)=>{console.log(res)})



  }


  render() {

    if (Object.keys(this.props.res).length!== 0){

      let fio= this.props.res.reservations;
      // console.log(fio);
      return (
        <div>
          <p>Do you have existing bookings? If you do, a list of them will appear below.</p>
          {fio.map (s=> <p key={s.id}>{s.flight.date} Flight {s.flight.number} - {s.flight.origin} to {s.flight.destination}, Seat {s.seat}    <button className="res-button book" onClick = { () => { this._handleClick(s,fio) } }>
              Cancel Reservation
            </button></p>

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
