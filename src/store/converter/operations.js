import * as actions from './actions';

import {Statuses} from '../../services/load-statuses';

export const loadRates = (date) => (dispatch, getState, api) => {
  const dateObj = new Date(date);
  dispatch(actions.setLoaded(Statuses.LOAD));

  return api
    .get(`/`, {
      params: {
        "date": dateObj.toISOString().slice(0, 10)
      }
    })
    .then(({data}) => {
      dispatch(actions.setDate(dateObj.getTime()));
      dispatch(actions.setRates(data.response.rates));
      dispatch(actions.setHaveValue(getState().converter.have.value));
      dispatch(actions.setLoaded(Statuses.LOADED));
    })
    .catch(() => {
      dispatch(actions.setLoaded(Statuses.ERROR));
    });
};
