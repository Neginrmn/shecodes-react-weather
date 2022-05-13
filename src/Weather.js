import React,{useState} from 'react';
import WeatherDetails from './WeatherDetails.js';
import WeatherForecast from './WeatherForecast.js';
import axios from 'axios';
import "./Weather.css";

export default function Weather(props) {  
  const [weatherData, setWeatherData]= useState({ready:false});
  const [city, setCity]= useState(props.defaultCity);
  
  function handleResponse(res) {  
    setWeatherData({
      ready: true,
      temperature:res.data.main.temp,
      wind: res.data.wind.speed,
      city: res.data.name,
      humidity: res.data.main.humidity,
      description: res.data.weather[0].description,
      icon:res.data.weather[0].icon,
      date: new Date(res.data.dt*1000),  
    });
  }
  function search() {
    const APIkey = '1362dc5f45de045dab893a3af8adf6e4';
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`;
    axios.get(apiURL).then(handleResponse); 
  }
  function handleSubmit(e) {
    e.preventDefault();
    search();
  }

  function handleCityChange(e) {
    setCity(e.target.value);
   }

  if(weatherData.ready) {
    return(
      <div className="Weather">    
        <form onSubmit={handleSubmit}>
        <div className='row'>
           <div className='col-9'>
          <input type="search" placeholder='Find the weather for...' className='form-control' autoFocus='on' onChange={handleCityChange}/>
          </div>
          <div className='col-3'>
         <input type='submit' value='search' className='btn btn-danger' />
         </div>
         </div> 
        </form>  
        <WeatherDetails data={weatherData} />
        <WeatherForecast />
      </div>
    );
  } else {
    search();
    return 'Please Wait';
  };
}