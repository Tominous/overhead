import { combineReducers } from 'redux';

import planeListReducer from './ducks/planeList';

const rootReducer = combineReducers({
  planes: planeListReducer
});

export default rootReducer;
