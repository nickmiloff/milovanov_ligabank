import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store/store';
import {loadRates} from './store/converter/operations';

import App from './components/app/app';

import './sass/style.scss';

store.dispatch(loadRates(Date.now()));

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById(`root`)
);
