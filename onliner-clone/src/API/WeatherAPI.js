import axios from 'axios';

export const weatherApi = {
  getWeather: (city) =>
    axios.get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Brest?iconSet=icons1&lang=ru&unitGroup=metric&key=CKJC8MJ6KGY6K7VQ3RMW3NTR3`
    ),
};
