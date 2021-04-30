import React from 'react';
import PropTypes from 'prop-types';
import CurrencyInput from '../currency-input/currency-input';
import Calendar from '../calendar/calendar';
import Button from '../button/button';
import History from '../history/history';

const Converter = ({haveValue, haveCurrency, wantValue, wantCurrency}) => {
  return (
    <section className="converter">
      <div className="container">
        <h2 className="converter__title">Конвертер валют</h2>
        <form className="converter__form" action="#" method="get">
          <CurrencyInput
            additionalClass="converter__currency-input"
            title="У меня есть"
            value={haveValue}
            currency={haveCurrency}
          />
          <CurrencyInput
            additionalClass="converter__currency-input"
            title="Хочу приобрести"
            value={wantValue}
            currency={wantCurrency}
          />
          <Calendar additionalClass="converter__calendar" />
          <Button additionalClass="converter__button">Сохранить результат</Button>
        </form>
        <History additionalClass="converter__history" />
      </div>
    </section>
  );
};

Converter.propTypes = {
  haveValue: PropTypes.number.isRequired,
  haveCurrency: PropTypes.string.isRequired,
  wantValue: PropTypes.number.isRequired,
  wantCurrency: PropTypes.string.isRequired
};

export default Converter;
