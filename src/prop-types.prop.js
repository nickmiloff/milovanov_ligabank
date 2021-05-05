import PropTypes from 'prop-types';

import {CURRENCIES} from './const';

const currencyInputPropTypes = {
  currency: PropTypes.oneOf(CURRENCIES).isRequired,
  value: PropTypes.number.isRequired
};

export const orderPropTypes = {
  date: PropTypes.number.isRequired,
  have: PropTypes.shape(currencyInputPropTypes).isRequired,
  want: PropTypes.shape(currencyInputPropTypes).isRequired,
  key: PropTypes.string.isRequired
};
