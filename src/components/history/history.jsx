import React from 'react';
import PropTypes from 'prop-types';
import {orderPropTypes} from '../../prop-types.prop';

import Button from '../button/button';
import HistoryList from '../history-list/history-list';

const History = ({
  additionalClass = ``,
  history,
  onClearButtonClick
}) => {
  const isEmpty = history.length === 0;

  return (
    <div className={`history ${isEmpty ? `history--empty` : ``} ${additionalClass}`}>
      <h3 className="history__title">История конвертация</h3>
      {
        isEmpty ?
          <h4 className="history__empty-message">Похоже в истории конвертаций нет ни одной записи</h4> :
          <HistoryList orders={history} />
      }
      <Button
        additionalClass="history__button"
        onClick={onClearButtonClick}
        disabled={isEmpty}
      >
        Очистить историю
      </Button>
    </div>
  );
};

History.propTypes = {
  additionalClass: PropTypes.string,
  history: PropTypes.arrayOf(PropTypes.shape(orderPropTypes)).isRequired,
  onClearButtonClick: PropTypes.func.isRequired
};

export default History;
