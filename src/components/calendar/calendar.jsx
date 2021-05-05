import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const DAYS_RANGE = 7;

const Calendar = ({
  additionalClass = ``,
  date,
  onDateChange,
  disabled = false
}) => {
  const maxDate = new Date();
  const minDate = new Date().setDate(maxDate.getDate() - DAYS_RANGE);

  return (
    <DatePicker
      wrapperClassName={`calendar__input ${additionalClass}`}
      selected={new Date(date)}
      onChange={onDateChange}
      dateFormat="dd.MM.yyyy"
      minDate={minDate}
      maxDate={maxDate}
      disabled={disabled}
    />
  );
};

Calendar.propTypes = {
  additionalClass: PropTypes.string,
  date: PropTypes.number.isRequired,
  onDateChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

export default Calendar;
