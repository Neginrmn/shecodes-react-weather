import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';


export default function WeatherIcon(props) {
 const codeMapping= {
  "01d": "CLEAR_DAY",
  "01n": "CLEAR_DAY",
  "02d": "PARTLY_CLOUDY_DAY",
  "02n": "PARTLY_CLOUDY_NIGHT",
  "03d": "PARTLY_CLOUDY_DAY",
  "03n": "PARTLY_CLOUDY_NIGHT",
  "04d": "CLOUDY",
  "04n": "CLOUDY",
  "09d": "RAIN",
  "09n": "RAIN",
  "10d": "RAIN",
  "10n": "RAIN",
  "11d": "CLEAR_NIGHT",
  "11n": "CLEAR_NIGHT",
  "13d": "SNOW",
  "13n": "SNOW",
  "50d": "FOG",
  "50n": "FOG"
  };
  if(typeof(icon) !== "undefined") {
  return(
<ReactAnimatedWeather
    icon={codeMapping[props.code]}
    color= '#09394c'
    size= {64}
    animate={true}
/>); 
  } else {
return "Says the icon is undefined"
  };
  
}
