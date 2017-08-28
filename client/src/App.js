import React, { Component } from 'react';
import PlaneList from './containers/PlaneListContainer';

import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <PlaneList />
      </div>
    );
  }
}

export default App;
