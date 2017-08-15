import { connect } from 'react-redux';

import Counter from './Counter';
import { incrementCounter, decrementCounter } from '../../reducers/actions';

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onIncrementClick: () => {
      dispatch(incrementCounter());
    },
    onDecrementClick: () => {
      dispatch(decrementCounter());
    }
  }
}

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterContainer;
