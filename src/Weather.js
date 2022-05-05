import React,{useState} from 'react';
import axios from 'axios';
import WeatherDetails from './WeatherDetails';


export default function Weather(props) { 
  
  const [weatherData, setWeatherData]= useState({ready:false});
  let [city, setCity]= useState(props.defaultCity);
  //const [temperature, setTemperature]= useState(null);
  function handleResponse(res) {
    setWeatherData({
      ready: true,
      temperature:res.data.main.temp,
      wind: res.data.wind.speed,
      city: res.data.name,
      humidity: res.data.main.humidity,
      description: res.data.weather[0].description,
      date: new Date(res.data.dt*1000),
    })


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
        <WeatherDetails details={weatherData}/>  
      </div>
    );
  } else {
search();
    return 'Please Wait';
  } 
}
