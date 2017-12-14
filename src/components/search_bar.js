import React, {Component} from 'react';
import jsonp from 'jsonp-es6';
import axios from 'axios';

const PlaneURL = 'https://burningairlinesdb.herokuapp.com/flights.json';

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

    axios.get(PlaneURL).then(function (results){
      this.data
      debugger;

    }.bind(this));

  }



}


class FlightsSearch extends Component{

  constructor(props){
    super(props);

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

    axios.get(PlaneURL).then(function (results){
      this.data
      debugger;

    }.bind(this));

  }

  render(){  /// render is a method or a function
    return (
      <form onSubmit={ this.handleSubmit }>
        <label> Origin:
          <input type="search" placeholder="Origin" onInput={ this.handleChange1 }/>
        </label><br />

        <label> Destination:
        <input type="search" placeholder="Destination" onInput={ this.handleChange2 }/>
        </label><br />

        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default SearchBar;
