 import React from "react";
 import TrueDate from './TrueDate.js';
 import WeatherIcon from './WeatherIcon.js';
import WeatherTemperature from "./WeatherTemperature.js";


 export default function WeatherDetails(props) {
  return (
  <div className="WeatherDetails">
     <h1>{props.data.city}</h1>
   <ul>
     <li><TrueDate date={props.data.date} /></li>
     <li>description: {props.data.description}</li>
   </ul>
   <div className='row'>
     <div className='col-6'>
     <div className="clearfix">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={60} />
            </div>

            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
     </div>
     <div className='col-6'>
       <ul>
        
         <li>humidity:  {props.data.humidity}%</li>
         <li>wind: {Math.round(props.data.wind)} km/h</li>
       </ul>
     </div>
   </div>
  </div>
  );
}

