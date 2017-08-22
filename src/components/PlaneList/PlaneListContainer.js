import { connect } from 'react-redux';

import PlaneList from './PlaneList';

const mapStateToProps = (state) => {
  return { planes: state.planes }
}

const PlaneListContainer = connect(
  mapStateToProps
)(PlaneList);

export default PlaneListContainer;
