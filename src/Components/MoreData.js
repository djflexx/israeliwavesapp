import React, {useEffect} from 'react'
import './MoreData.css'
import {  CircularProgress } from '@material-ui/core';

export default function MoreData(props) {
  useEffect(() => {
    console.log(props.data)
  },[])
    return (
        <div className="more-data">
        {props.data  !== undefined ? (
           <ul>
              <li>גובה הגל - {props.data.hours[props.hour].waveHeight.dwd} מטר</li>
              <li>מחזור - {props.data.hours[props.hour].swellPeriod.meteo}  שניות</li>
              <li>מהירות הרוח - {props.data.hours[props.hour].windSpeed.icon} מטר בשנייה</li>
              <li>{props.data.hours[props.hour].windDirection.icon} - כיוון הרוח </li>
              <li>טמפרטורה במים -  {props.data.hours[props.hour].waterTemperature.meto} מעלות</li>
              <li>סחף - {props.data.hours[props.hour].currentSpeed.meto} מטר בשנייה</li>
           </ul>
           /* <> 
           <div className="header-and-data">
              <h3 style={{"display": "inline"}}> גובה הגל - {props.data.hours[props.hour].waveHeight.dwd} מטר</h3>
           </div>
           <div className="header-and-data">
              <h3 style={{"display": "inline"}}> מחזור - {props.data.hours[props.hour].swellPeriod.meteo}  שניות</h3>
           </div>
           <div className="header-and-data">
              <h3 style={{"display": "inline"}}>מהירות הרוח - {props.data.hours[props.hour].windSpeed.icon} מטר בשנייה</h3>
           </div>
           <div className="header-and-data">
              <h3 style={{"display": "inline"}}>{props.data.hours[props.hour].windDirection.icon} - כיוון הרוח </h3>
           </div>
           <div className="header-and-data">
              <h3 style={{"display": "inline"}}>טמפרטורה במים -  {props.data.hours[props.hour].waterTemperature.meto} מעלות</h3>
           </div>
           <div className="header-and-data">
              <h3 style={{"display": "inline"}}>סחף - {props.data.hours[props.hour].currentSpeed.meto} מטר בשנייה</h3>
           </div> 
        </>       */
        ): <CircularProgress /> }
        </div>
    )
}
