import React, {useState} from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const Calendar = ({additionalClass = ``}) => {
  const [startDate, setStartDate] = useState(new Date());
  const maxDate = new Date();
  const minDate = new Date().setDate(maxDate.getDate() - 7);

  return (
    <DatePicker
      wrapperClassName={`calendar__input ${additionalClass}`}
      selected={startDate}
      onChange={(date) => {
        setStartDate(date);
      }}
      dateFormat="d.MM.yyyy"
      minDate={minDate}
      maxDate={maxDate}
    />
  );
};

Calendar.propTypes = {
  additionalClass: PropTypes.string
};

export default Calendar;
