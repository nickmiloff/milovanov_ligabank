import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {Statuses} from '../../services/load-statuses';

import {getHaveValue, getHaveCurrency, getWantValue, getWantCurrency, getDate, getHistory, getLoaded} from '../../store/converter/selectors';
import {setHaveCurrency, setHaveValue, setWantCurrency, setWantValue, addOrder, clearHistory} from '../../store/converter/actions';
import {loadRates} from '../../store/converter/operations';

import CurrencyInput from '../currency-input/currency-input';
import Calendar from '../calendar/calendar';
import Button from '../button/button';
import History from '../history/history';

const Converter = ({
  haveValue,
  onHaveValueChange,
  haveCurrency,
  onHaveCurrencyChange,
  wantValue,
  onWantValueChange,
  wantCurrency,
  onWantCurrencyChange,
  date,
  onDateChange,
  history,
  onSaveButtonClick,
  onClearButtonClick,
  loaded
}) => {
  const isLoadedCorrectly = loaded !== Statuses.LOADED;

  return (
    <section className="converter">
      <div className="container">
        <h2 className="converter__title">Конвертер валют</h2>
        <form className="converter__form" action="#" method="get">
          <CurrencyInput
            additionalClass="converter__currency-input"
            title="У меня есть"
            value={haveValue}
            onValueChange={onHaveValueChange}
            currency={haveCurrency}
            onCurrencyChange={onHaveCurrencyChange}
            disabled={isLoadedCorrectly}
          />
          <CurrencyInput
            additionalClass="converter__currency-input"
            title="Хочу приобрести"
            value={wantValue}
            onValueChange={onWantValueChange}
            currency={wantCurrency}
            onCurrencyChange={onWantCurrencyChange}
            disabled={isLoadedCorrectly}
          />
          <Calendar
            additionalClass="converter__calendar"
            date={date}
            onDateChange={onDateChange}
            disabled={isLoadedCorrectly}
          />
          <Button
            additionalClass="converter__button"
            onClick={onSaveButtonClick}
            disabled={isLoadedCorrectly}
          >
            Сохранить результат
          </Button>
        </form>
        <History
          additionalClass="converter__history"
          history={history}
          onClearButtonClick={onClearButtonClick}
        />
      </div>
    </section>
  );
};

Converter.propTypes = {
  haveValue: PropTypes.number.isRequired,
  onHaveValueChange: PropTypes.func.isRequired,
  haveCurrency: PropTypes.string.isRequired,
  onHaveCurrencyChange: PropTypes.func.isRequired,
  wantValue: PropTypes.number.isRequired,
  onWantValueChange: PropTypes.func.isRequired,
  wantCurrency: PropTypes.string.isRequired,
  onWantCurrencyChange: PropTypes.func.isRequired,
  date: PropTypes.number.isRequired,
  onDateChange: PropTypes.func.isRequired,
  history: PropTypes.array.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  onClearButtonClick: PropTypes.func.isRequired,
  loaded: PropTypes.oneOf(Object.values(Statuses)).isRequired
};

const mapStateToProps = (state) => ({
  haveValue: getHaveValue(state),
  haveCurrency: getHaveCurrency(state),
  wantValue: getWantValue(state),
  wantCurrency: getWantCurrency(state),
  date: getDate(state),
  history: getHistory(state),
  loaded: getLoaded(state)
});

const mapDispatchToProps = {
  onDateChange: loadRates,
  onHaveValueChange: setHaveValue,
  onHaveCurrencyChange: setHaveCurrency,
  onWantValueChange: setWantValue,
  onWantCurrencyChange: setWantCurrency,
  onSaveButtonClick: addOrder,
  onClearButtonClick: clearHistory
};

export default connect(mapStateToProps, mapDispatchToProps)(Converter);
