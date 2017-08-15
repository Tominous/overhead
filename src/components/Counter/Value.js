import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  value: PropTypes.number.isRequired,
};;

const Value = (props) => {
  const {value} = props;
  return (
    <div>{value}</div>
  )
}

Value.propTypes = propTypes;

export default Value;
