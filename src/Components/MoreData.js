import React from 'react'
import './MoreData.css'
import {  CircularProgress } from '@material-ui/core';

export default function MoreData(props) {

    return (
        <div className="more-data">
        {props.data  !== undefined ? (
        <React.Fragment>
        <div className="header-and-data">
             <h3>מחזור</h3>
             <p>{props.data.hours[props.hour].swellPeriod.meteo} שניות</p>
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
        ): <CircularProgress /> }
        </div>
    )
}
