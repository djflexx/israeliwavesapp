import React,{ useEffect, useState } from 'react'
import './MoreData.css'
import axios from 'axios'
import {  CircularProgress } from '@material-ui/core';

export default function MoreData(props) {
    const params = "swellPeriod,windSpeed,windDirection,waterTemperature,currentSpeed"
    const [data, setData] = useState([])
    useEffect(() => {
        axios(`https://api.stormglass.io/v2/weather/point?lat=${props.lat}&lng=${props.lng}&params=${params}`, 
        {
        headers:{
          'Authorization': process.env.REACT_APP_WAVES_KEY
        }
        }).then(res => setData(res.data));
        console.log(data)
    }, [])
    return (
        <div className="more-data">
        {/* {data.hours.length > 0 ? ( */}
        <React.Fragment>
        <div className="header-and-data">
             <h3>מחזור</h3>
             {/* <p>{data.hours[props.hour].swellPeriod.meteo} שניות</p> */}
           </div>
           <div className="header-and-data">
             <h3></h3>
             <p></p>
           </div>
           <div className="header-and-data">
             <h3></h3>
             <p></p>
           </div>
           <div className="header-and-data">
             <h3></h3>
             <p></p>
           </div>
           <div className="header-and-data">
             <h3></h3>
             <p></p>
           </div> 
        </React.Fragment>      
        {/* ): <CircularProgress /> } */}
        </div>
    )
}
