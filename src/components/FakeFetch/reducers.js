import { FETCH_DATA } from './actions';
import update from 'immutability-helper';

const initialState = {
  planes: []
};

function* planeMaker() {
  var index = 0;
  while (true) {
    const planeIndex = index++;
    yield {icao24: `A${planeIndex}`, flightNo: `F0${planeIndex}` };
  }
}

var planes = planeMaker();

function fakeFetch(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return update(state, {
        planes: { $push: [planes.next().value] }
      })

    default: return state
  }
}

export default fakeFetch;
