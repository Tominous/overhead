import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchPlanes } from '../ducks/planeList';
import PlaneList from '../components/PlaneList';

const mapStateToProps = (state) => {
  return { ...state }
}

class PlaneListContainer extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPlanes());
  }

  render() {
    const {
      planes,
      receivedAt
    } = this.props;

    return (
      <PlaneList planes={planes} receivedAt={receivedAt} />
    )
  }
}

PlaneListContainer.propTypes = {
  planes: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(PlaneListContainer);
