import * as axios from 'axios';

import {CURRENCIES} from '../const';

const BASE_URL = `https://api.currencyscoop.com/v1/historical/`;
const REQUEST_TIMEOUT = 5000;

const SYMBOLS_CURRENCYS = CURRENCIES.join(`,`);

export const createAPI = () => {
  const api = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": `application/json`,
    },
    params: {
      "api_key": `a4d488335f5b33f28a6f1d2ce3cdee39`,
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
