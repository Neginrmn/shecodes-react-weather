import React from "react";
import WeatherIcon from './WeatherIcon';

export default function WeatherForecastDay(props) {
  return (
<div>
      <div className='WeatherForecast-day'>{props.data[0].dt}</div>
           <WeatherIcon code={props.data[0].weather[0].icon} size={36} />
            <div className='Weatherforecast-temperature'><span className='WeatherForecast-temperature-max'>{props.data[0].temp.max}°</span><span className='WeatherForecast-temperature-min'>{props.data[0].temp.min}°</span>
      </div>
</div>
);
}