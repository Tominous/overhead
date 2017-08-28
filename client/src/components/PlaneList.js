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

  let planesList = '';
  // planesList = planes.map((p) => {
  //   return (
  //     <div>
  //       <h2>Planes:</h2>
  //       <PlaneCard plane={p} />
  //     </div>
  //   )
  // });

  return (
    <div className="plane-list">
      {planesList}
    </div>
  )
}

PlaneList.propTypes = propTypes;

export default PlaneList
