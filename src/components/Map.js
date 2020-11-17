import React from 'react';
import image from '../images/earthquake.png';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export const MapContainer = (props) => {

    const quakesList = props.quakes.map((quakeObj) => (
      <Marker
        icon = {{
          url: image,
          scaledSize: new props.google.maps.Size(37, 37),
        }}
        title={quakeObj.properties.title}
        position={{lat:quakeObj.geometry.coordinates[1], lng:quakeObj.geometry.coordinates[0]}}
        
      />
    ))

    console.log();

    return (
      <div className="map">
        <Map
          google={props.google}
          zoom={2}
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