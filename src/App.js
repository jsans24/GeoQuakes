import React from 'react';

import './App.css';
import Earthquake from './components/Earthquake';
import GoogleAPIWrapper, { MapContainer } from './components/Map';

function App() {
  return (
    <div className="app">
      <div className="mapContainer">
        <GoogleAPIWrapper />
      </div>
      <div className="quakeContainer">
        <h1>Earthquakes from the past week:</h1>
        <Earthquake />
      </div>
    </div>
  );
}

export default App;
