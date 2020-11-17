import React from "react";


const Earthquake = (props) => {
    const quakesList = props.quakes.map((quakeObj) => {
      let time = Math.floor((Math.floor(new Date().getTime()) - quakeObj.properties.time)/3600000)
      if (time > 24) {time = `${Math.floor(time/24)} days and ${time - (24*Math.floor(time/24))} hours ago`}
      else {time = `${time} hours ago`}

      if (quakeObj.properties.place.includes('of ')) {
        const place = quakeObj.properties.place.split('of ').splice(1,1)
        return <p>{place} / {time}</p>
      } else {
        return <p>{quakeObj.properties.place} / {time}</p>
      }
    })

    return (
      <>
        <div id="info">
          {quakesList}
        </div>
      </>
    )
  }


export default Earthquake;