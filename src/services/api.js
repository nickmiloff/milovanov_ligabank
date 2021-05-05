import * as axios from 'axios';

import {CURRENCIES} from '../const';

const BASE_URL = `https://api.ratesapi.io/api/`;
const REQUEST_TIMEOUT = 5000;

const BASE_CURRENCY = CURRENCIES[0];
const SYMBOLS_CURRENCYS = CURRENCIES.join(`,`);

export const createAPI = () => {
  const api = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": `application/json`,
    },
    params: {
      "base": BASE_CURRENCY,
      "symbols": SYMBOLS_CURRENCYS
    },
    timeout: REQUEST_TIMEOUT,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
