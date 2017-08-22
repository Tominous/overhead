import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  plane: PropTypes.object.required,
}

const PlaneCard = (props) => {
  const {
    icao24,
    img,
    flightNo
  } = props.plane;

  return (
    <div>
      <h1>{icao24}</h1>
      <p>Flight No: {flightNo}</p>
      <img src={img} alt={icao24} />
    </div>
  )
}

PlaneCard.propTypes = propTypes;

export default PlaneCard
