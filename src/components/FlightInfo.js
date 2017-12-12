import React, { PureComponent as Component } from 'react';

function FlightInfo (props) {
  return (
    <div>
      Flight Number: { props.flightNumber }
    </div>
  );
}

export default FlightInfo;
