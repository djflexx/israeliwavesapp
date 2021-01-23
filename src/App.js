import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './App.css';
import Background from './Components/Background';
import Card from './Components/Card';
import Temp from './Components/Temp';

function App() {
const [weather, setWeather] = useState({})
useEffect(() => {
   axios(`https://api.openweathermap.org/data/2.5/weather?q=Tel-Aviv&units=metric&lang=he&appid=60a3c2719fb9f06d4e2e283ad781f66e`)
  .then(request => setWeather(request));
},[])
const redirectSeaweed = () => {
  window.location.href = "http://magicseaweed.com";
}
  return (
      <div className="App">
      {weather.data !== undefined ? (
             <>
             <Background temp={weather.data.main.temp}/>
             <img src="https://www.dropbox.com/s/g01onhui9w0j46p/Logo.png?raw=1" alt="logo" id="logo"/>
             <Temp temp={weather.data.main.temp}/>
             <Card weather={weather.data}/>            
             <img src="https://im-1-uk.msw.ms/msw_powered_by.png" alt="seaweed" onClick={redirectSeaweed} className="seaweed-image"/>
             </>
             ) : <h1>Calculating The Surf</h1>
      }
      </div>
  )
}

export default App;
