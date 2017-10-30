import io from 'socket.io-client';

// YUL
const latitude = 45.4697;
const longitude = -73.7449;

// JFK
// const latitude = 40.6413;
// const longitude = -73.7781;

// INITIAL STATE
const initialState = {
  planes: {},
  receivedAt: '',
  connected: false,
  connectionInProgress: false,
  error: null,
};

// ACTION TYPES
export const types = {
  CONNECT_TO_API_START: 'planeList/CONNECT_TO_API_START',
  CONNECT_TO_API_SUCCESS: 'planeList/CONNECT_TO_API_SUCCESS',
  CONNECT_TO_API_ERROR: 'planeList/CONNECT_TO_API_ERROR',
  RECEIVE_PLANES: 'planeList/RECEIVE_PLANES',
};

// REDUCER
export default (state = initialState, action) => {
  switch (action.type) {
    case types.CONNECT_TO_API_START:
      return {
        ...state,
        connectionInProgress: true,
      };
    case types.CONNECT_TO_API_SUCCESS:
      return {
        ...state,
        connected: true,
        connectionInProgress: false,
      };
    case types.CONNECT_TO_API_ERROR:
      return {
        ...state,
        connectionInProgress: false,
        error: action.payload.error,
      };
    case types.RECEIVE_PLANES:
      return {
        ...state,
        planes: action.payload.planes,
        receivedAt: action.payload.receivedAt,
      };
    default: return state;

  }
};

// ACTION CREATORS
export const connectToApiStart = () => ({
  type: types.CONNECT_TO_API_START,
});

export const connectToApiSuccess = () => ({
  type: types.CONNECT_TO_API_SUCCESS,
});

export const connectToApiError = error => ({
  type: types.CONNECT_TO_API_ERROR,
  payload: {
    error,
  },
});

export const receivePlanes = ({ planes, receivedAt }) => ({
  type: types.RECEIVE_PLANES,
  payload: {
    planes,
    receivedAt,
  },
});

export const connectToAPI = () => (dispatch) => {
  dispatch(connectToApiStart());

  try {
    const socket = io('http://localhost:3001', {
      query: {
        latitude,
        longitude,
      },
    });

    socket.on('connect', () => {
      dispatch(connectToApiSuccess());
    });

    socket.on('planes.update', (data) => {
      const respPlanes = data.acList.reduce((memo, plane) => {
        // eslint-disable-next-line
        console.log(plane);
        const { Id, Icao, Call, Alt, Lat, Long, PosTime, Op, From, To } = plane;
        const posDate = new Date(PosTime);
        const planeObj = {
          Id,
          Icao,
          // eslint-disable-next-line
          img: 'http://www.airport-data.com/images/aircraft/small/001/175/001175394.jpg',
          flightNo: Call,
          Altitude: Alt,
          Latitude: Lat,
          Longitude: Long,
          Operator: Op,
          airportFrom: From,
          airportTo: To,
          flightProgress: 70,
          posTime: posDate.toUTCString(),
        };

        memo[Id] = planeObj; // eslint-disable-line no-param-reassign
        return memo;
      }, {});

      const receivedDate = new Date(data.stm);
      dispatch(receivePlanes({
        planes: respPlanes,
        receivedAt: receivedDate.toUTCString(),
      }));
    });
  } catch (e) {
    dispatch(connectToApiError(e));
  }
};
