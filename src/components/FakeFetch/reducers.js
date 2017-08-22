import { FETCH_DATA } from './actions';

const initialState = {
  planes: []
};

let fakePlanes = [
  { iaco24: 'A1234' },
  { iaco24: 'B5678' },
  { iaco24: 'C9876' },
];

function fakeFetch(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      const newPlane = fakePlanes.splice(0, 1);
      return Object.assign({}, state, {
        planes: [newPlane]
      });

    default: return state
  }
}

export default fakeFetch;
