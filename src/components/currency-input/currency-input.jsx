import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CURRENCIES = [`RUB`, `USD`, `EUR`, `GBP`, `CNY`];

const CurrencyInput = ({additionalClass = ``, title = `Выбор валюты`, value, currency}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`currency-input ${additionalClass}`}>
      <label className="currency-input__label">
        {title}
        <input className="currency-input__value" type="text" value={value}/>
      </label>
      <button
        className={`currency-input__button${isMenuOpen ? ` currency-input__button--active` : ``}`}
        type="button"
        aria-label="Открыть меню выбора валюты"
        onClick={() => {
          setIsMenuOpen((current) => !current);
        }}>
        {currency}
      </button>
      <ul className={`currency-input__list${isMenuOpen ? ` currency-input__list--active` : ``}`}>
        {
          CURRENCIES.map((option, index) => (
            <li className="currency-input__item" key={`option-${index}`}>
              <button type="button">
                {option}
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
  currency: PropTypes.string.isRequired
};

export default CurrencyInput;
