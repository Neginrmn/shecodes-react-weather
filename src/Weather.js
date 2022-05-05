import React,{useState} from 'react';
import axios from 'axios';
import TrueDate from './TrueDate';


export default function Weather(props) { 
  const [ready,setReady] = useState(false);
  const [weatherData, setWeatherData]= useState({});
  const [temperature, setTemperature]= useState(null);
  function handleResponse(res) {
    setWeatherData({
      temperature:res.data.main.temp,
      wind: res.data.wind.speed,
      city: res.data.name,
      humidity: res.data.main.humidity,
      description: res.data.weather[0].description,
      date: new Date(res.data.dt*1000),
    })
setTemperature();
setReady(true);
  }
  if(ready) {
    return(
      <div className="Weather">    
        <form>
        <div className='row'>
           <div className='col-9'>
          <input type="search" placeholder='Find the weather for...' className='form-control' autoFocus='on' />
          </div>
          <div className='col-3'>
         <input type='submit' value='search' className='btn btn-danger' />
         </div>
         </div>
        </form>  
        <h1>{weatherData.city}</h1>
        <ul>
          <li><TrueDate date={weatherData.date}/></li>
          <li>description: {weatherData.description}</li>
        </ul>
        <div className='row'>
          <div className='col-6'>
            <img src='https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png' alt='clouds'/><span className='temp'>{Math.round(weatherData.temperature)}</span><span className='unit'>°C</span> 
          </div>
          <div className='col-6'>
            <ul>
              
              <li>humidity: {weatherData.humidity} %</li>
              <li>wind: {Math.round(weatherData.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {

    const APIkey = '1362dc5f45de045dab893a3af8adf6e4';
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${APIkey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
    return 'Please Wait';
  } 
}
