import fetch from 'isomorphic-fetch'

const latitude = 33.43363;
const longitude = -112.008113;
const radius = 100;

// Initial State
const initialState = {
  planes: [],
  receivedAt: null,
};


// Actions
export const FETCH_PLANES_REQUEST = 'FETCH_PLANES_REQUEST';
export const fetchPlanes = () => {

  return (dispatch) => {
    dispatch(requestPlanes());

    const url = '/api/planes';

    const fetchOptions = {
      method: 'GET',
      mode: 'cors',
      cache: 'default'
    };

    // const url = `https://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?lat=${latitude}8&lng=${longitude}&fDstL=0&fDstU=${radius}`;
    return fetch(url, fetchOptions)
      .then(
        response => {
          console.log(response);
          if ( !response.ok ) {
            throw Error('Could not fetch data');
          }
          return response.json()
        },
        error => console.log('Fetch Error occured:', error)
      )
      .then( json => dispatch(receivePlanes(json.acList)) );
  }

};

export const REQUEST_PLANES = 'REQUEST_PLANES';
export const requestPlanes = () => {
  return {
    type: REQUEST_PLANES
  }
};


export const RECEIVE_PLANES = 'RECEIVE_PLANES';
export const receivePlanes = (json) => {
  return {
    type: RECEIVE_PLANES,
    planes: json,
    receivedAt: Date.now()
  }
}

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLANES_REQUEST:
      return state;
    case REQUEST_PLANES:
      return state;
    case RECEIVE_PLANES:
      return state;
    default: return state

  }
}
