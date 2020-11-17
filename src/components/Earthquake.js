import React from "react";


const Earthquake = (props) => {
    const quakesList = props.quakes.map((quakeObj) => (
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


export default Earthquake;