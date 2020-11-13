import React from 'react';

import './App.css';
import Earthquake from './components/Earthquake';

function App() {
  return (
    <div className="app">
      <div className="mapContainer">
        ...put Map Component here...
      </div>
      <div className="quakeContainer">
        <h1>Earthquakes from the past week:</h1>
        <Earthquake />
      </div>
    </div>
  );
}

export default App;
