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
   useEffect(()=> {
         axios(`https://api.stormglass.io/v2/weather/point?lat=${props.lat}&lng=${props.lng}&params=waveHeight`, 
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
              <div className="beach" onClick={handleClick}>
              <h2>{props.name}</h2>
              { waveHeight.length !== 0 ? (
                 <>
                    <p>{waveHeight.hours[hour].waveHeight.meteo}.mt</p>
                 </> ) : <CircularProgress /> }
               {isClicked && <MoreData lat={props.lat} lng={props.lng} hour={hour}/>}
              </div>
           </div>
        </div>
    )
}
