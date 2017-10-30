import React from 'react';
import ApplicationBar from './components/ApplicationBar';
import PlaneListContainer from './containers/PlaneListContainer';

const App = styles => (
  <div className={styles.app}>
    <ApplicationBar />
    <PlaneListContainer />
  </div>
);

export default App;
