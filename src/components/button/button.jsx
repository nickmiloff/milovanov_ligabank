import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  children = ``,
  additionalClass = ``,
  onClick = () => {},
  disabled = false
}) => (
  <button
    className={`button ${additionalClass}`}
    onClick={onClick}
    type="button"
    disabled={disabled}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string,
  additionalClass: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

export default React.memo(Button);
