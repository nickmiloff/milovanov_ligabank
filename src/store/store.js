import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from '../services/api';

import converterReducer from './converter/reducer';

const api = createAPI();

const store = configureStore({
  reducer: {
    converter: converterReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      }
    })
});

export default store;
