import React from 'react'
import WeatherData from './WeatherData'
import './Card.css'

export default function Card(props) {
    const information = [
    {
    name: "תל-אביב",
    wavesHeight: "2ft",
    wind: "10",
    windDirection: "מערב"
    },
    {
    name: "חיפה",
    wavesHeight: "1.6ft",
    wind: "10",
    windDirection: "מערב"
    },
    {
    name: "אשדוד",
    wavesHeight: "1.3ft",
    wind: "10",
    windDirection: "מערב"
    }

    ]
    return (
        <div className="cards-cont">
        {information.map(i => {
        return (
            <React.Fragment>
            <div className="card">
              <div className="location">
                 <div className="location-style">
                    <h1>{i.name}</h1> 
                 </div>
              </div>
              <WeatherData height={i.wavesHeight} wind={i.wind} windDirection={i.windDirection}/>
            </div>
            </React.Fragment>
          )})
        }
        </div>
    )
}
