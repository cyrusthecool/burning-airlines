import React, { PureComponent as Component } from 'react';


// Child SEAT

class Seat extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="seat">
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

  render() {
    return (
      <div>
        <h2>Seat Map</h2>
        {/* <p>{ this.props.takenSeats[0] }</p> */}
        <div className="grid-container" >
          {/* make a row for number of rows */}
          { [...Array(this.props.rows)].map((e, i) =>
            <div className="grid-row" key={i}>
              {/*  make seat re num of cols */}
              { [...Array(this.props.cols)].map((e, i) =>
                <Seat />
              ) }
            </div>
          ) }
        </div>
      </div>
    );
  }
}

export default SeatMap;
