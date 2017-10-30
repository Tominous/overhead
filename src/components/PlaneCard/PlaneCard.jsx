import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardMedia, CardTitle, CardText } from 'react-toolbox/lib/card';
import ProgressBar from 'react-toolbox/lib/progress_bar';

import classes from './PlaneCard.css';

const PlaneCard = (props) => {
  const {
    icao24,
    img,
    operator,
    flightNo,
    flightProgress,
    airportFrom,
    airportTo,
  } = props.plane;

  return (
    <Card>
      <CardMedia aspectRatio='wide' image={img} />
      <CardTitle title={icao24} subtitle={`${operator} ${flightNo}`} />
      <CardText>
        <h4 className={classes.subtitle}>Flight Information</h4>
        <ProgressBar type='linear' mode='determinate' value={flightProgress} />

        <div className={classes.flightInfo}>
          <div className={classes.airportFrom}>
            From:<br />
            <span className={classes.code}>{airportFrom}</span>
          </div>
          <div className={classes.airportTo}>
            To:<br />
            <span className={classes.code}>{airportTo}</span>
          </div>
        </div>

        <h4 className={classes.subtitle}>Extras</h4>
        <ul>
          <li>Altitude</li>
          <li>Speed</li>
          <li>Heading</li>
          <li>Vertical Speed</li>
          <li>Latitude</li>
          <li>Longitude</li>
        </ul>
      </CardText>
    </Card>
  );
};

PlaneCard.propTypes = {
  plane: PropTypes.shape({}).isRequired,
};

export default PlaneCard;
