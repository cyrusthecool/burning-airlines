import React, { PureComponent as Component } from 'react';
import axios from 'axios';

class ExistingRes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: ""
    }
  }

  _handleClick = (res_id,array_res) => {
    axios.delete(`https://burningairlinesdb.herokuapp.com/reservations/${res_id.id}`).then(
        this.setState({
          status: "Reservation successfully cancelled."
        })
    );



  }


  render() {

    if (Object.keys(this.props.res).length!== 0){

      let fio= this.props.res.reservations;
      if (fio.length > 0){
        return (
          <div>
            <p>MY RESERVATIONS</p>
            {fio.map (s=>
              <div key={s.id} className="flex-container">
                <div className="flight-details">{s.flight.date} Flight {s.flight.number} - {s.flight.origin} to {s.flight.destination}, Seat {s.seat}    </div>
                <button className="res-button book cancel flex-1" onClick = { () => { this._handleClick(s,fio) } }>Cancel Reservation</button>
              </div>

            )}
            <p className="res-status">{this.state.status}</p>
          </div>
        );
      }
      else {
        return(
          <div>No current reservations</div>
        );
      }
    }
    else {

      return (
        <div>No current reservations</div>
      )
    }
  }
}

export default ExistingRes;
