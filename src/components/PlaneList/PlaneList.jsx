import React from 'react';
import PropTypes from 'prop-types';

import PlaneCard from '../PlaneCard';
import classes from './PlaneList.css';

const propTypes = {
  planes: PropTypes.shape({}).isRequired,
  receivedAt: PropTypes.string.isRequired,
};

const PlaneList = (props) => {
  const {
    planes,
    receivedAt,
  } = props;

  const listPlanes = Object.keys(planes).map(key => (
    <div className={classes.card}>
      <PlaneCard
        key={planes[key].Id}
        plane={planes[key]}
      />
    </div>
  ));

  return (
    <div className={classes.root}>
      {listPlanes}
      <blockquote>
        Planes: {planes.length} <br />
        ReceivedAt: {receivedAt}
      </blockquote>
    </div>
  );
};

PlaneList.propTypes = propTypes;

export default PlaneList;
