import React from 'react'
import './Temp.css'

export default function Temp(props) {
    return (
           <div className="temprature">
           <h3>{props.temp}</h3>
           <img src="https://img.icons8.com/windows/32/000000/temperature-low.png" alt="icon"/>
           </div>
    )
}
