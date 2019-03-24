import React, { Component } from 'react';
import Navbar from './Navbar';
let MarkerClusterer = require('../markerclusterer'); 

const MY_POSITION = {
  lat: 32.110021,
  lng: 34.837997
};
const google = window.google;
let MAP = {setCenter: function(center){}};
class Map extends Component {
  constructor() {
    //@ts-ignore
    super()
    this.state = { map: {} }
  }
  componentDidMount() {
    MAP = new google.maps.Map(this.refs.map, {
      center: MY_POSITION,
      zoom: 4
    });
    this.addUserMarkers()
  }
  changeMapCenter=(center)=> {
    MAP.setCenter(center)
  }
  addUserMarkers=()=>{
    let markers = this.props.users.map((user)=>{
      let userPosition = {lat: Number(user.location.latitude), lng: Number(user.location.longitude)}
      let marker = new google.maps.Marker({position: userPosition, map: MAP})
  
      let markerCluster = new MarkerClusterer(MAP, markers,
        {imagePath: '../../cluster_images'});
    })
  }
  mapStyle = {
    width: '100vw',
    height: '90vh',
    border: '1px solid blue'
  }
  render() {
    return (
      <div>
        <Navbar changeMapCenter={this.changeMapCenter} />
        <div ref="map" style={this.mapStyle}></div>
        
      </div>
    );
  }

}
export default Map
