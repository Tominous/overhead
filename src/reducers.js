import { combineReducers } from 'redux';

import planeListReducer from './ducks/planeList';

const rootReducer = combineReducers({
  planeList: planeListReducer,
});

export default rootReducer;
