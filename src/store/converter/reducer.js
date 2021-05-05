import {createReducer} from '@reduxjs/toolkit';
import * as actions from './actions';

import {Statuses} from '../../services/load-statuses';
import {CURRENCIES} from '../../const';

const toFixedTwo = (number) => +(Math.round(number + `e+2`) + `e-2`);

const initialState = {
  rates: {
    RUB: 0,
    USD: 0,
    EUR: 0,
    GBP: 0,
    CNY: 0
  },
  have: {
    currency: CURRENCIES[0],
    value: 1
  },
  want: {
    currency: CURRENCIES[1],
    value: 1
  },
  date: Date.now(),
  history: [],
  loaded: Statuses.PENDING
};

const converterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.setLoaded, (state, {payload}) => {
      state.loaded = payload;
    })
    .addCase(actions.setHaveCurrency, (state, {payload}) => {
      const newWantValue = state.have.value / state.rates[payload] * state.rates[state.want.currency];

      state.have.currency = payload;
      state.want.value = toFixedTwo(newWantValue);
    })
    .addCase(actions.setHaveValue, (state, {payload}) => {
      const newWantValue = payload / state.rates[state.have.currency] * state.rates[state.want.currency];

      state.have.value = toFixedTwo(payload);
      state.want.value = toFixedTwo(newWantValue);
    })
    .addCase(actions.setWantCurrency, (state, {payload}) => {
      const newWantValue = state.have.value / state.rates[state.have.currency] * state.rates[payload];

      state.want.currency = payload;
      state.want.value = toFixedTwo(newWantValue);
    })
    .addCase(actions.setWantValue, (state, {payload}) => {
      const newHaveValue = payload / state.rates[state.want.currency] * state.rates[state.have.currency];

      state.want.value = toFixedTwo(payload);
      state.have.value = toFixedTwo(newHaveValue);
    })
    .addCase(actions.setDate, (state, {payload}) => {
      state.date = payload;
    })
    .addCase(actions.addOrder, (state, {payload}) => {
      const newHistory = [...state.history];
      const order = {
        date: state.date,
        have: {...state.have},
        want: {...state.want},
        key: payload
      };
      newHistory.unshift(order);
      state.history = newHistory.slice(0, 10);
    })
    .addCase(actions.clearHistory, (state) => {
      state.history = [];
    })
    .addCase(actions.setRates, (state, {payload}) => {
      for (const rate in payload) {
        if (payload.hasOwnProperty(rate)) {
          state.rates[rate] = payload[rate];
        }
      }
    });
});

export default converterReducer;
export {
  initialState
};
