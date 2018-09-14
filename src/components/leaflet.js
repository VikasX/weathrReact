import React, { Component } from "react";




class Leaflet extends Component {
  componentDidMount() {
   var mymap = L.map('mapid').setView([51.505, -0.09], 13);
  }

  render() {
    return  <div id="mapid"></div>
;
  }
}

export default Leaflet;
