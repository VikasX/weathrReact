import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import Pricing from './components/pricing';
import Footer from './components/header_footer/Footer';

import { fetchArticle } from "./actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import WeatherList from "./containers/weather_list";
import SearchBar from "./containers/search_bar";

class App extends Component {

       constructor(props) {
      super(props);

      this.state = {  loading: true };


    }

     componentDidMount() {

     // this.props.fetchArticle();

   //this.setState({loading: false});

  setTimeout(() => this.setState({ loading: false }), 1700); // simulates an async action, and hides the spinner
 }


  render() {

      const { loading } = this.state;

console.log(loading);


  if(loading) { // if your component doesn't have to wait for an async action, remove this block


    return (       <div>
    <div className="loader"></div>
          </div> );// render null when app is not ready)

  }


    
    
    return (

      <div className="App" style={{ height:"1500px",background:'#f7f6fe'}}>
        <Header/>
s        <Element name="featured">
          <Featured/>
        </Element>

        
        <div className="container">
        <Element name="venuenfo">

        <SearchBar />
        <WeatherList />
        </Element>
        </div>
   
        
        <Element name="pricing">
          <Pricing/>
        </Element>


        <Footer/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchArticle }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
