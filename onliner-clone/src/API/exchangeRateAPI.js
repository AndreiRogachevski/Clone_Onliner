import axios from 'axios';

export const exchangeRateApi = {
  getRate: (city) =>
    axios.get(
      'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/byn.json'
    ),
};
