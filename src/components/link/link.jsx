import React from 'react';
import PropTypes from 'prop-types';

const Link = ({
  children = ``,
  additionalClass = ``,
  href = `#`
}) => (
  <a
    className={`link ${additionalClass}`}
    href={href}>
    {children}
  </a>
);

Link.propTypes = {
  children: PropTypes.string,
  additionalClass: PropTypes.string,
  href: PropTypes.string
};

export default Link;
