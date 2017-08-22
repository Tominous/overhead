import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import fakeFetchReducers from './components/FakeFetch/reducers';

import App from './App';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

let appStore = createStore(
  fakeFetchReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
