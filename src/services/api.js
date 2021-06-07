import * as axios from 'axios';

import {CURRENCIES} from '../const';

const BASE_URL = `http://api.exchangeratesapi.io/v1/`;
const REQUEST_TIMEOUT = 5000;

const SYMBOLS_CURRENCYS = CURRENCIES.join(`,`);

export const createAPI = () => {
  const api = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": `application/json`,
    },
    params: {
      "access_key": `a9e898c998acc26560acb1731e23f2d1`,
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
