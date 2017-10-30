/* eslint-env browser */

import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';

import App from './App';
import appStyles from './App.css';

import './index.css';

// import registerServiceWorker from './registerServiceWorker';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const appStore = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunkMiddleware),
  ),
);

ReactDOM.render(
  <Provider store={appStore}>
    <App styles={appStyles} />
  </Provider>,
  document.getElementById('root'),
);
// registerServiceWorker();
