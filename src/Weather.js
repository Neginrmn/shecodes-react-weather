import React from 'react';

export default function Weather() {
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
      <h1>Shiraz</h1>
      <ul>
        <li>Monday 7:00</li>
        <li>Motly cloudy</li>
      </ul>
      <div className='row'>
        <div className='col-6'>
          <img src='https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png' alt='clouds'/><span className='temp'>19</span><span className='unit'>°C</span> 
        </div>
        <div className='col-6'>
          <ul>
            <li>preciptation</li>
            <li>humidity</li>
            <li>wind</li>
          </ul>
        </div>
      </div>
    </div>
  )
}