import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {CURRENCIES} from '../../const';

const CurrencyInput = ({
  additionalClass = ``,
  title = `Выбор валюты`,
  value,
  onValueChange,
  currency,
  onCurrencyChange,
  disabled = false
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`currency-input ${additionalClass}`}>
      <label className="currency-input__label">
        {title}
        <input
          className="currency-input__value"
          type="number"
          value={value || ``}
          onChange={(evt) => {
            onValueChange(+evt.target.value);
          }}
          placeholder="Введите значение"
          disabled={disabled}
        />
      </label>
      <button
        className={`currency-input__button${isMenuOpen ? ` currency-input__button--active` : ``}`}
        type="button"
        aria-label="Открыть меню выбора валюты"
        onClick={() => {
          setIsMenuOpen((current) => !current);
        }}
        disabled={disabled}
      >
        {currency}
      </button>
      <ul className={`currency-input__list${isMenuOpen ? ` currency-input__list--active` : ``}`}>
        {
          CURRENCIES.map((item, index) => (
            <li className="currency-input__item" key={`currency-${index}`}>
              <button
                type="button"
                onClick={() => {
                  onCurrencyChange(item);
                  setIsMenuOpen((current) => !current);
                }}
              >
                {item}
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

CurrencyInput.propTypes = {
  additionalClass: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.number.isRequired,
  onValueChange: PropTypes.func.isRequired,
  currency: PropTypes.string.isRequired,
  onCurrencyChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

export default CurrencyInput;
