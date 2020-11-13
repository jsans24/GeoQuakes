import React from "react";
import axios from "axios";

class Earthquake extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quakes: [],
    }
  }
  
  componentDidMount() {
    axios.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson')
      .then((response) => this.setState({quakes: response.data.features}))
      .catch((err) => console.log(err))
  }

  
  render() {

    const quakesList = this.state.quakes.map((quakeObj) => (
      <p>{quakeObj.properties.title}</p>
    ))
    
    return (
      <>
        <div id="info">
          {quakesList}
        </div>
      </>
    )
  }
}

export default Earthquake;