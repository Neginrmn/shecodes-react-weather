import React, { useState } from 'react';
import './WeatherForecast.css';
import axios from 'axios';
import WeatherForecastDay from './WeatherForecastDay';

export default function WeatherForcast(props) {
  let[loaded,setLoaded]=useState(false);
  let[forecast,setForecast]=useState(null);
  function handleResponse(res) {
    setForecast(res.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return(
      <div className='WeatherForecast'>
        <div className='row'>
          <div className='col'>
             <WeatherForecastDay data={forecast[0]} />
         </div>
        </div>
      </div>
      );
  } else {
    let APIKey='1362dc5f45de045dab893a3af8adf6e4';
     let longitude=props.coordinates.lon;
      let latitude=props.coordinates.lat;
      let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${APIKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
       return null;
  }
}

