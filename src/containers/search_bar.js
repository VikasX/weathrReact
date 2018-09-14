import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";
import { fetchArticle } from "../actions/index";

import { scroller } from 'react-scroll';

class SearchBar extends Component {



  constructor(props) {
    super(props);

    this.state = { term: "" };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

     componentDidMount() {

   //this.setState({loading: false});
 //this.props.fetchArticle();


  
 }
  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

 
                
    // We need to go and fetch weather data
    this.props.fetchWeather(this.state.term);

    this.setState({ term: "" });

  }

  render() {

     const scrollToElement = (element) => {
        scroller.scrollTo(element,{
            duration: 1500,
            delay: 200,
            smooth: true,
            offset: -103

        });
     
    }
    return (                
      <form onSubmit={this.onFormSubmit} 
 className="input-group">
        <input
          placeholder="ENTER CITY NAME FOR 5 DAYS FORECAST"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-primary" onClick={()=> scrollToElement('venuenfo')}>SEARCH</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather, fetchArticle }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
