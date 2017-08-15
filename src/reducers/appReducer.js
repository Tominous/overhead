import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './actions';

const initialState = {
  counter: 0
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return Object.assign({}, state, {
        counter: state.counter + 1
      });

    case DECREMENT_COUNTER:
      if (state.counter > 0) {
        return Object.assign({}, state, {
          counter: state.counter - 1
        });
      }
      return {
        counter: state.counter
      }
    default: return state
  }
}

export default appReducer;
