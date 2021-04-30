import React from 'react';
import PropTypes from 'prop-types';

const Button = ({children = ``, additionalClass = ``, onClick = () => {}}) => {
  return (
    <button
      className={`button ${additionalClass}`}
      onClick={onClick}
      type="button">
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  additionalClass: PropTypes.string,
  onClick: PropTypes.string
};

export default Button;
