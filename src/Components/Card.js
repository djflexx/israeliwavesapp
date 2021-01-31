import React, {useState} from 'react'
import WeatherData from './WeatherData'
import './Card.css'
import {Locations} from '../Location'

export default function Card() {
    const [clicked, isClicked] = useState(false)
    const [clickedItem, isClickedItem] = useState('')
    const handleClick = (event) => {
    isClicked(true)
    if(clickedItem !== event.target.innerText){
      isClicked(true)
    }else if (clickedItem === event.target.innerText && !clicked){
      isClicked(true)
    }
    else {
      isClicked(prevState => !prevState)
    }
    isClickedItem(event.target.innerText)
    }

    return (
        <div className="cards-cont">
            <React.Fragment>
            {Locations.map((a, index) => {
                 return (
            <div className={clicked && clickedItem === Locations[index].area ? "card": "card-closed"} key={index}>
                 <div className="location" onClick={handleClick}>
                   <div className="location-style">
                     <h1>{a.area}</h1>
                   </div>
                 </div>
              {a.area === clickedItem && clicked ? (       
                <div key={index}>
                  <WeatherData lat={a.lat} lng={a.lng}/>
                </div>
              ): null
              }
            </div>
            )})
            }
            </React.Fragment>
        </div>
    )
}
