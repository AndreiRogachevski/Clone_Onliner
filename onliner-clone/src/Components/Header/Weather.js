import { useEffect, useState } from 'react';
import { weatherApi } from '../../API/WeatherAPI';
import '../../Style/weather.css';

export default function Weather() {
  const [weather, setWeather] = useState({});
  // const successCallback = (position) => {
  //   console.log(position);
  // };

  // const errorCallback = (error) => {
  //   console.log(error);
  // };
  // console.log(
  //   window.navigator.geolocation.getCurrentPosition(
  //     successCallback,
  //     errorCallback
  //   )
  // );
  useEffect(() => {
    weatherApi.getWeather().then((res) => setWeather(res.data));
  }, []);
  // console.log(weather);
  return (
    <div className='weather'>
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
