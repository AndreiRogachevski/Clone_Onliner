import { useEffect, useState } from 'react';
import { weatherApi } from '../../API/WeatherAPI';
import '../../Style/weather.css';

export default function Weather() {
  const [weather, setWeather] = useState({});
  useEffect(() => {
    weatherApi.getWeather().then((res) => setWeather(res.data));
  }, []);
  return (
    <div className="weather">
      {weather.address && (
        <>
          <span
            className={`weather__icon ${weather.currentConditions.icon}`}
          ></span>
          <span>{weather.currentConditions.temp} ℃</span>
        </>
      )}
    </div>
  );
}
