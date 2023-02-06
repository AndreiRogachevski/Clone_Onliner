import { useEffect, useState } from 'react';
import { exchangeRateApi } from '../../API/exchangeRateAPI';

export default function ExchangeRate() {
  const [rate, setRate] = useState();
  useEffect(() => {
    exchangeRateApi.getRate().then((res) => setRate(res.data));
  }, []);
  // console.log(rate);
  return <div>$ {rate && Math.round(rate.byn*10000)/10000}</div>;
}
