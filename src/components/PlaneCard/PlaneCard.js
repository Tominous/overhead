import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  icao24: PropTypes.string.required,
  planeImage: PropTypes.string,
  flightNo: PropTypes.string.required,
}

const PlaneCard = (props) => {
  const {
    icao24,
    planeImage,
    flightNo
  } = props;

  return (
    <div>
      <h1>{icao24}</h1>
      <p>Flight No: {flightNo}</p>
      <img src={planeImage} alt="{icao24}" />
    </div>
  )
}

PlaneCard.propTypes = propTypes;

export default PlaneCard
