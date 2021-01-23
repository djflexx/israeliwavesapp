import React from 'react'
import './WeatherData.css'

export default function WeatherData(props) {
    return (
        <div className="card-content">
           <div className="data-cont">
              <p>{props.height}</p><h2>גובה הגל</h2>
           </div>
           <div className="data-cont">
              <p>{props.wind}</p><h2>מהירות הרוח</h2>
           </div>
           <div className="data-cont">
              <p>{props.windDirection}</p><h2>כיוון הרוח</h2>
           </div>
        </div>
    )
}
