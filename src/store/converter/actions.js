import {createAction, nanoid} from '@reduxjs/toolkit';
import * as types from './types';

export const setLoaded = createAction(types.SET_LOADED, (loaded) => {
  return {
    payload: loaded
  };
});

export const setHaveCurrency = createAction(types.SET_HAVE_CURRENCY, (currency) => {
  return {
    payload: currency
  };
});

export const setHaveValue = createAction(types.SET_HAVE_VALUE, (value) => {
  return {
    payload: value
  };
});

export const setWantCurrency = createAction(types.SET_WANT_CURRENCY, (currency) => {
  return {
    payload: currency
  };
});

export const setWantValue = createAction(types.SET_WANT_VALUE, (value) => {
  return {
    payload: value
  };
});

export const setDate = createAction(types.SET_DATE, (date) => {
  return {
    payload: date
  };
});

export const addOrder = createAction(types.ADD_ORDER, () => {
  return {
    payload: nanoid()
  };
});

export const clearHistory = createAction(types.CLEAR_HISTORY, () => {
  return {
    payload: true
  };
});

export const setRates = createAction(types.SET_RATES, (rates) => {
  return {
    payload: rates
  };
});
