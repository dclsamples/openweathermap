import React, {useEffect, useState, useRef} from 'react';
import ApiOutput from '../ApiOutput/ApiOutput';
import CurrentConditions from '../CurrentConditions/CurrentConditions';
import WeeklyOutlook from '../WeeklyOutlook/WeeklyOutlook';

//import * as D3 from 'd3';
//const axios = require('axios');

const Weather = () => {

    let [currentWeather, setCurrentWeather] = useState({});
    let [weeklyWeather, setWeeklyWeather] = useState({});
    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');
    let [apiError, setApiError] = useState(null);
    const uriEncodedCity = encodeURIComponent(city);
    const cityNameRef = useRef(null);

    useEffect(() => { cityNameRef.current.focus(); }, [cityNameRef]);

    function getCurrentWeather(e) {
        e.preventDefault();
        setApiError(null);
        setCurrentWeather([]);
        setWeeklyWeather([]);

        console.log("OpenWeather API Key: " + process.env.REACT_APP_OPENWEATHERMAP_API_KEY)
        let url = `https://api.openweathermap.org/data/2.5/forecast?cnt=1&units=${unit}&q=${uriEncodedCity}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`;
        console.log("GetCurrentWeatherUrl" + url);

        fetch(url)
        .then(response => response.json())
        .then(response => {
           setCurrentWeather(response);
           if(response.cod === '200') {
                getWeek(response.city.coord.lat, response.city.coord.lon);
            }
            else {
                setApiError(response.message + " - please try again");
                console.log(response.message);
            }
        })
        .catch((error) => {
            console.log("getCurrentWeather error: " + error);
        })
    }

    function getWeek(lat, lon) {
        console.log("GetWeek " + lat + ' ' + lon);
        let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&units=${unit}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`;
        console.log("GetWeekUrl: " + url);

        fetch(url)
        .then(response => response.json())
        .then(response => {
           setWeeklyWeather(response.daily)
        })
        .catch((error) => {
            console.log("getWeek error: " + error);
        })
    }     

    return(
        <div>
            <h2>Get the weather for your city</h2>
            
            <form onSubmit={getCurrentWeather}>
                <input
                    ref={cityNameRef}
                    type="text"
                    placeholder="City"
                    maxLength="50"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                    <br/>
                    <div id="api-error">{apiError}</div>
                <label>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Fahrenheit
                </label>
                <label>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Celcius
                </label>
                <br/>
                <button type="submit">Show Me the Weather!</button>
            </form>

            <div>
                <CurrentConditions 
                    currentWeather={currentWeather} 
                />
            </div>

            <div>
                <WeeklyOutlook 
                    weeklyWeather={weeklyWeather} 
                />
            </div>

            <div>
                <ApiOutput 
                    currentWeather={currentWeather} 
                    weeklyWeather={weeklyWeather} 
                />
            </div>
        </div>
    )
}

//sample api call: api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=6e689720d92627f3aded400dc32f2e1d

export default Weather;