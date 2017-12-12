import React, { PureComponent as Component } from 'react';


// Child SEAT

class Seat extends Component {
  checkIfTaken = () => {
    if ( this.props.takenSeats.indexOf( this.props.seatId ) !== -1 ) { // if this seat is taken
      this.setState({
        isTaken: true
      });
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      isTaken: false
    };
  }

  componentDidUpdate() {
    this.checkIfTaken();
  }

  render() {
    return (
      <div className={ this.state.isTaken ? "seat taken" : "seat free" }>
      </div>
    );
  }
}



// Parent SEAT MAP


class SeatMap extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  // parseTakenSeats = ( seats ) => {
  //   seats.forEach( (s) => {
  //     const row = s.charCodeAt(0)-64;
  //     const col = s.substring(1);
  //   });
  // }

  render() {
    // this.parseTakenSeats( this.props.takenSeats );
    return (
      <div>
        <h2>Seat Map</h2>
        {/* <p>{ this.props.takenSeats[0] }</p> */}
        <div className="grid-container" >
          {/* make a row for number of rows */}
          { [...Array(this.props.rows)].map((e, i) =>
            <div className="grid-row" key={i}>
              {/*  make seat re num of cols */}
              { [...Array(this.props.cols)].map((e, j) =>
                <Seat key={`${String.fromCharCode(i+65)}${j+1}`} seatId={`${String.fromCharCode(i+65)}${j+1}`} takenSeats={ this.props.takenSeats } />
              ) }
            </div>
          ) }
        </div>
      </div>
    );
  }
}

export default SeatMap;
