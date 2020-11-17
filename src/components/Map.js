import React from 'react';
import red from '../images/red.png'
import orange from '../images/orange.png'
import yellow from '../images/yellow.png'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

export const MapContainer = (props) => {

    const quakesList = props.quakes.map((quakeObj) => {
      let image = ''
      if (quakeObj.properties.mag < 5) image = yellow;
      else if (quakeObj.properties.mag < 6) image = orange;
      else image = red;
      
      return (
      <Marker
        icon = {{
          url: image,
          scaledSize: new props.google.maps.Size(37, 37)
        }}
        title={quakeObj.properties.title}
        position={{lat:quakeObj.geometry.coordinates[1], lng:quakeObj.geometry.coordinates[0]}}
        
      />
    )})

    console.log();

    return (
      <div className="map">
        <Map
          google={props.google}
          zoom={5}
          initialCenter={
            {
              lat: 33.770050,
              lng: -118.193741
            }
          }
        >
          {quakesList}
        </Map>
      </div>
    );
  }


export default GoogleApiWrapper({
  apiKey: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg'
})(MapContainer);