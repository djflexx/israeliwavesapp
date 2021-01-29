import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './App.css';
import Background from './Components/Background';
import Card from './Components/Card';
import Temp from './Components/Temp';
import { Fade, CircularProgress } from '@material-ui/core';
import Footer from './Components/Footer';

function App() {
const [weather, setWeather] = useState({})
const [isOpen, setIsOpen] = useState(false)


useEffect(() => {
   axios(`https://api.openweathermap.org/data/2.5/weather?q=Tel-Aviv&units=metric&lang=he&appid=` + process.env.REACT_APP_API_KEY)
  .then(request => setWeather(request));
  setIsOpen(true)
  return (() => {
    setIsOpen(false)
  })
},[])

  return (
      <React.Fragment>
      <div className="App">
      {weather.data !== undefined ? (
             <>
             <div>
             </div>
              <Background temp={weather.data.main.temp}/>
              <Fade in={isOpen} timeout={9000}>
               <img src="https://www.dropbox.com/s/g01onhui9w0j46p/Logo.png?raw=1" alt="logo" id="logo"/>  
              </Fade>  
             <Temp temp={weather.data.main.temp}/>
             <Card/>    
             </>
             ) : <CircularProgress size={"200px"}/>
      }
      </div>
      <Footer />
      </React.Fragment>
  )
}

export default App;
