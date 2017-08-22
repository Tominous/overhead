import { connect } from 'react-redux';

import FakeFetch from './FakeFetch';
import { fetchData } from './actions';

const mapDispatchToProps = dispatch => {
  return {
    onFetchClick: () => {
      dispatch(fetchData());
    }
  }
}

const FakeFetchContainer = connect(
  null,
  mapDispatchToProps
)(FakeFetch);

export default FakeFetchContainer;
