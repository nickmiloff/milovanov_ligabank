import React from 'react';
import PropTypes from 'prop-types';
import {orderPropTypes} from '../../prop-types.prop';

import HistoryItem from '../history-item/history-item';

const HistoryList = ({
  orders
}) => (
  <ul className="history__list">
    {orders.map((order) => <HistoryItem {...order} key={order.key} />)}
  </ul>
);

HistoryList.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.shape(orderPropTypes)).isRequired
};

export default HistoryList;
