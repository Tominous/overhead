import React from 'react';
import PropTypes from 'prop-types';

import PlaneCard from './PlaneCard'

const propTypes = {
  planes: PropTypes.array.isRequired,
}

const PlaneList = (props) => {
  const {
    planes
  } = props;

  const planesList = planes.map((p) => {
    return (
      <PlaneCard plane={p} />
    )
  });

  return (
    <div className="plane-list">
      {planesList}
    </div>
  )
}

PlaneList.propTypes = propTypes;

export default PlaneList
