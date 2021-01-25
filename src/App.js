import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './App.css';
import Background from './Components/Background';
import Card from './Components/Card';
import Temp from './Components/Temp';
import { Fade, CircularProgress } from '@material-ui/core';

function App() {
const [weather, setWeather] = useState({})
const [isOpen, setIsOpen] = useState(false)

useEffect(() => {
   axios(`https://api.openweathermap.org/data/2.5/weather?q=Tel-Aviv&units=metric&lang=he&appid=` + process.env.REACT_APP_API_KEY)
  .then(request => setWeather(request));
  setIsOpen(true)
  console.log(process.env.REACT_APP_WAVES_KEY)
  return (() => {
    setIsOpen(false)
  })
},[])
// useEffect(() => {
//   axios('https://api.stormglass.io/v2/weather/point?lat=58.7984&lng=17.8081&params=waveHeight', 
//   {
//   headers:{
//     'Authorization': process.env.REACT_APP_WAVES_KEY
//   }
//   }).then(res => console.log(res))
// })
const redirectSeaweed = () => {
  window.location.href = "http://magicseaweed.com";
}
  return (
      <div className="App">
      {weather.data !== undefined ? (
             <>
              <Background temp={weather.data.main.temp}/>
              <Fade in={isOpen} timeout={9000}>
               <img src="https://www.dropbox.com/s/g01onhui9w0j46p/Logo.png?raw=1" alt="logo" id="logo"/>  
              </Fade>  
             <Temp temp={weather.data.main.temp}/>
             <Card weather={weather.data}/> 
             <img src="https://im-1-uk.msw.ms/msw_powered_by.png" alt="seaweed" onClick={redirectSeaweed} className="seaweed-image"/>       
             </>
             ) : <CircularProgress size={"200px"}/>
      }
      </div>
  )
}

export default App;
