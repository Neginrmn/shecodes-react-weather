import React,{useState} from 'react';
import axios from 'axios';
import "./Weather.css";
import WeatherDetails from './WeatherDetails.js';
import TrueDate from './TrueDate';


export default function Weather(props) {
  const [ready,setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
 
  function handleResponse(res) {
    
    setWeatherData({
      temperature:res.data.main.temp,
             wind: res.data.wind.speed,
             city: res.data.name,
             humidity: res.data.main.humidity,
             date: new Date(res.data.dt*1000),
             description: res.data.weather[0].description,
             iconUrl:` http://openweathermap.org/img/wn/${res.data.weather[0].icon}.png`,
            
    });

setReady(true);
  }
  if(ready) {
   
   return(
<div className="Weather">    
         <form >
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
     <li><TrueDate date={weatherData.date} /></li>
     <li>description: {weatherData.description}</li>
   </ul>
   <div className='row'>
     <div className='col-6'>
      <img src={weatherData.iconUrl} alt={weatherData.description}/> 
       <span className='temp'>{Math.round(weatherData.temperature)}</span><span className='unit'>°C</span> 
     </div>
     <div className='col-6'>
       <ul>
        
         <li>humidity:  {weatherData.humidity}%</li>
         <li>wind: {Math.round(weatherData.wind)} km/h</li>
       </ul>
     </div>
   </div>
       </div>
   );
   }else {
    const APIkey = '458a27d0841c1139f24bbf7e6a49edc0';
    
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${APIkey}&units=metric`;
   axios.get(apiURL).then(handleResponse);
   };
  }
  
     

// export default function Weather(props) { 
  
//   const [weatherData, setWeatherData]= useState({ready:false});
//   const [city, setCity]= useState(props.defaultCity);
  
//   function handleResponse(res) {
   
//     setWeatherData({
//       ready: true,
//       temperature:res.data.main.temp,
//       wind: res.data.wind.speed,
//       city: res.data.name,
//       humidity: res.data.main.humidity,
//       description: res.data.weather[0].description,
//       iconURL:` http://openweathermap.org/img/wn/${res.data.weather[0].icon}.png`,
//       date: new Date(res.data.dt*1000),
      
//     });
//   }
//   function handleSubmit(e) {
//     e.preventDefault();
//     search();
//   }

//   function handleCityChange(e) {
//     console.log(e.target.value);
//     setCity(e.target.value);
//    }

//   function search() {
//     const APIkey = '458a27d0841c1139f24bbf7e6a49edc0';
//     const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`;
//     axios.get(apiURL).then(handleResponse);
   
//   }

//   if(weatherData.ready) {
//     return(
//       <div className="Weather">    
//         <form onSubmit={handleSubmit}>
//         <div className='row'>
//            <div className='col-9'>
//           <input type="search" placeholder='Find the weather for...' className='form-control' autoFocus='on' onChange={handleCityChange}/>
//           </div>
//           <div className='col-3'>
//          <input type='submit' value='search' className='btn btn-danger' />
//          </div>
//          </div>
         
//         </form>  
//         <WeatherDetails details={weatherData} />
//       </div>
//     );
//   } else {
//     search();
//     return 'Please Wait';
//   } 
// }


