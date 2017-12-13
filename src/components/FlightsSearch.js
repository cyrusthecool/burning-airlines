import React, { PureComponent as Component } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import DisplayFlightsV2 from './DisplayFlightsV2';


const PlaneURL = 'http://burningairlinesdb.herokuapp.com/flights.json';

// ****** Child ***************************************************************

class SearchForm extends Component{

  constructor(){

    super();
    this.state = {
      origin: '',
      destination: ''
    };

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange1(e) {
    this.setState({origin: e.target.value});
  }

  handleChange2(e) {
    this.setState( { destination: e.target.value } );
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.origin,this.state.destination);
  }

  render(){
    return (
      <form onSubmit={ this.handleSubmit }>
        <label className="search"> Origin: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <input type="search" placeholder="Origin" onInput={ this.handleChange1 }/>
        </label><br />
        <label className="search"> Destination:&nbsp; &nbsp;
          <input type="search" placeholder="Destination" onInput={ this.handleChange2 }/>
        </label><br />

        <input type="submit" value="Search" className="res-button" />
      </form>
    );
  }
}


// flight id
// user id

//
// class DisplayFlights extends Component{
//
//     debugger;
//     constructor(props){
//       super(props);
//       this.state = {flight: -1,
//                     user: ""};
//     }
//
//
//     render(){
//       return(
//        <h1>{this.props.flights}</h1>
//       );
//
//     }
// }


// ************ PARENT: FLIGHT SEARCH ******************************************

class FlightsSearch extends Component{

    constructor(props){
      super(props);
      this.state = {
        flights: [],
        flight_id: ""
        // flights_maddi: {}
      };
      this.fetchPlanes = this.fetchPlanes.bind(this);
    }

    saveFlightId = (s) => {
      this.setState({
        flight_id: s
      });
      this.props.storeFlightId(s);
    }



    fetchPlanes(q1,q2){

      axios.get(PlaneURL).then(function (results){
        let array_flights = [];
        for (let i =0;i<results.data.length;i++)
          if (results.data[i].origin === q1 && results.data[i].destination === q2)
            array_flights.push(results.data[i]);
        this.setState({flights : array_flights});

      // axios.get(PlaneURL).then( results => this.setState({
      //   flights_maddi: results.data
      // }));

      }.bind(this));

    }

    render() {
      // console.log(typeof(this.state.flights));
        // console.log(this.state.flights);
      return (
        <div>
          <SearchForm onSubmit = {this.fetchPlanes}/>
          <DisplayFlightsV2 flights_all={ this.state.flights } passFlightId={ this.saveFlightId } />
        </div>
      );
  }

}


export default FlightsSearch;
