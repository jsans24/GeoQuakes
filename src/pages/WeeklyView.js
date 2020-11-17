import React from 'react';
import WeeklyQuakes from '../models/weeklyQuakes';
import GoogleAPIWrapper from '../components/Map';
import Earthquake from '../components/Earthquake';

class WeeklyView extends React.Component {
  constructor() {
    super();
    this.state = {
      quakes: [],
      loading: true,
    };
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    WeeklyQuakes.all().then((res) => {
      this.setState({
        quakes: res.data.features,
        loading: false,
      })
    })
  }

  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          <GoogleAPIWrapper quakes={this.state.quakes}/>
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week:</h1>
          <Earthquake quakes={this.state.quakes}/>
        </div>
      </div>
    )
  }
}

export default WeeklyView;