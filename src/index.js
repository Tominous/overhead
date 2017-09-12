import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers';

import App from './App';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let appStore = createStore(
  rootReducer,
  composeEnhancers
    applyMiddleware(thunkMiddleware)
  )
);

ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
