import React from 'react';
import PropTypes from 'prop-types';
import {orderPropTypes} from '../../prop-types.prop';

const DATE_OPTIONS = {
  day: `numeric`,
  month: `numeric`,
  year: `numeric`
};

const HistoryItem = ({
  date,
  have,
  want
}) => {
  const dateObj = new Date(date);

  return (
    <li className="history__item">
      <time
        className="history__date"
        dateTime={dateObj.toISOString()}
      >
        {dateObj.toLocaleString(`ru-RU`, DATE_OPTIONS)}
      </time>
      <span className="history__from">{have.value} {have.currency}</span>
      <span className="history__to">{want.value} {want.currency}</span>
    </li>
  );
};

HistoryItem.propTypes = PropTypes.shape(orderPropTypes).isRequired;

export default React.memo(HistoryItem);
