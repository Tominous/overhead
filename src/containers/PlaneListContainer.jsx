import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { connectToAPI } from '../ducks/planeList';
import PlaneList from '../components/PlaneList';

const mapStateToProps = ({ planeList }) => {
  const { planes, receivedAt } = planeList;
  return {
    planes,
    receivedAt,
  };
};

class PlaneListContainer extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(connectToAPI());
  }

  render() {
    const {
      planes,
      receivedAt,
    } = this.props;

    return (
      <PlaneList planes={planes} receivedAt={receivedAt} />
    );
  }
}

PlaneListContainer.propTypes = {
  planes: PropTypes.shape({}).isRequired,
};

export default connect(mapStateToProps)(PlaneListContainer);
