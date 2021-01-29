import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './WeatherData.css'
import {  CircularProgress } from '@material-ui/core';
import MoreData from './MoreData';



export default function WeatherData(props) {
   const [waveHeight, setWaveHeight] = useState([])
   const [hour, setHour] = useState(0)
   const date = new Date();
   const UTC = date.getHours();
   const [isClicked, setIsClicked] = useState(false)
   const params = "waveHeight,swellPeriod,windSpeed,windDirection,waterTemperature,currentSpeed"
   useEffect(()=> {
         axios(`https://api.stormglass.io/v2/weather/point?lat=${props.lat}&lng=${props.lng}&params=${params}`, 
         {
         headers:{
           'Authorization': process.env.REACT_APP_WAVES_KEY
         }
         }).then(res => setWaveHeight(res.data));     
   }, [])

   useEffect(() => {
   setHour(UTC - 2) 
   }, [date])
   
   const handleClick = () => {
      setIsClicked(prevState => !prevState)
   }
    return (
        <div className="card-content">
         <div className="data-cont">
              <div className={!isClicked ? "beach" : "beach-open"} onClick={handleClick}>
              <div className="name-and-waveheight">
              <h2>{props.name}</h2>
              { waveHeight.length !== 0 ? (
                 <>
                    <p>{waveHeight.hours[hour].waveHeight.meteo}.mt</p>
                 </> ) : <CircularProgress /> }
              </div>
               {isClicked && <MoreData data={waveHeight} hour={hour}/>}
              </div>
           </div>
        </div>
    )
}
