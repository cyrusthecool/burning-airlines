import React, { PureComponent as Component } from 'react';

class ExistingRes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      res: this.props.res
    };
  }


  makeResList = ( ) => {
    // console.log('here');
    if ( this.props.res.reservations ) {
      console.log('not undefined');
      // debugger;
      const allResArray = [];
      for ( let i = 0; i < this.props.res.reservations.length; i++ ) {
        const str = this.props.res.reservations[i].flight.date + " " + this.props.res.reservations[i].flight.number + " " + this.props.res.reservations[i].flight.origin + " to " + this.props.res.reservations[i].flight.destination + " in Seat " + this.props.res.reservations[i].seat;
        allResArray.push(str);
      }
      console.log( allResArray );
      const list = allResArray.join(', ');
      return (
        <div>
          {/* <p>{ allResArray[0] }</p> */}
          {/* <p>{ allResArray[1] }</p> */}
          {/* {  setTimeout( function() { allResArray.forEach( function(elem) { <p>{ elem }</p> }) }, 500 )  } */}
          { list }
          {/* "<p>" + lines.join("</p><p>") + "</p>" */}
        </div>

              // <div>
              //   {this.props.flights_all.map (s=>
              //     <p key={s.id}>{s.origin} {s.destination} {s.id} {s.date} {s.name} {s.number}
              //     <button onClick = { () => { this._handleClick(s.id) } }>
              //       Book Flight
              //     </button></p>
              //   )}
              // </div>
      );
    }
  }


  render() {
    console.log( this.props.res.reservations );
    return (
        // { this.state.res === undefined ? null : <div>YAY FOR US</div> }
        <div>
          <p>Do you have existing bookings? If you do, a print-out of them appears below.</p>
          { this.makeResList() }
                         {/* <div>
                           { setTimeout( function() {

                             this.props.res.reservations.map (s=>
                             <p key={s.id}>{s.id}
                             </p>
                           )}, 1000)

                         }
                         </div> */}
        </div>
    );
  }
}

export default ExistingRes;
