import React from 'react';

const CurrentConditions = (props) => {
   return (
       <div>
           {props.currentWeather.cod === '200' ?
           <div id="current-conditions-container">
               <div id="current-conditions-card">
                    <h3>{props.currentWeather.city.name}</h3>
                    <p>
                        <i className={`owf owf-${props.currentWeather.list[0].weather[0].id} owf-5x`}></i>
                        <br />
                        {/*<img src ={`http://openweathermap.org/img/w/${props.currentWeather.list[0].weather[0].icon}.png`} alt="wthr img" />*/}
                    </p>
                    <p>
                        It's currently {Math.round(props.currentWeather.list[0].main.temp)} degrees with  
                        &nbsp;{props.currentWeather.list[0].weather[0].description} in {props.currentWeather.city.name}.
                    </p>
                    <p>
                        {props.currentWeather.timezone}
                    </p>
               </div>
            </div>
       : null
           }
       </div>
   )
}

export default CurrentConditions;