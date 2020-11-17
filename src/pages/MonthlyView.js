import React from 'react';
import MonthlyQuakes from '../models/monthlyQuakes';
import GoogleAPIWrapper from '../components/Map';
import Earthquake from '../components/Earthquake';

class MonthlyView extends React.Component {
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
    MonthlyQuakes.all().then((res) => {
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

export default MonthlyView;