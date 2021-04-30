import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/button';

const History = ({additionalClass = ``}) => {
  return (
    <div className={`history ${additionalClass}`}>
      <h3 className="history__title">История конвертация</h3>
      <ul className="history__list">
        <li className="history__item">
          <time className="history__date" dateTime="2020-11-25">25.11.2020</time>
          <span className="history__from">1000 RUB</span>
          <span className="history__to">13,1234 USD</span>
        </li>
        <li className="history__item">
          <time className="history__date" dateTime="25.11.2020">25.11.2020</time>
          <span className="history__from">1000 RUB</span>
          <span className="history__to">13,1234 USD</span>
        </li>
        <li className="history__item">
          <time className="history__date" dateTime="25.11.2020">25.11.2020</time>
          <span className="history__from">1000 RUB</span>
          <span className="history__to">13,1234 USD</span>
        </li>
        <li className="history__item">
          <time className="history__date" dateTime="25.11.2020">25.11.2020</time>
          <span className="history__from">1000 RUB</span>
          <span className="history__to">13,1234 USD</span>
        </li>
        <li className="history__item">
          <time className="history__date" dateTime="25.11.2020">25.11.2020</time>
          <span className="history__from">1000 RUB</span>
          <span className="history__to">13,1234 USD</span>
        </li>
        <li className="history__item">
          <time className="history__date" dateTime="25.11.2020">25.11.2020</time>
          <span className="history__from">1000 RUB</span>
          <span className="history__to">13,1234 USD</span>
        </li>
        <li className="history__item">
          <time className="history__date" dateTime="25.11.2020">25.11.2020</time>
          <span className="history__from">1000 RUB</span>
          <span className="history__to">13,1234 USD</span>
        </li>
        <li className="history__item">
          <time className="history__date" dateTime="25.11.2020">25.11.2020</time>
          <span className="history__from">1000 RUB</span>
          <span className="history__to">13,1234 USD</span>
        </li>
        <li className="history__item">
          <time className="history__date" dateTime="25.11.2020">25.11.2020</time>
          <span className="history__from">1000 RUB</span>
          <span className="history__to">13,1234 USD</span>
        </li>
        <li className="history__item">
          <time className="history__date" dateTime="25.11.2020">25.11.2020</time>
          <span className="history__from">1000 RUB</span>
          <span className="history__to">13,1234 USD</span>
        </li>
      </ul>
      <Button additionalClass="history__button">Очистить историю</Button>
    </div>
  );
};

History.propTypes = {
  additionalClass: PropTypes.string
};

export default History;
