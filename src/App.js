import React, { Component } from 'react';
import FakeFetch from './components/FakeFetch';
import PlaneList from './components/PlaneList';

import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <FakeFetch />
        <PlaneList />
      </div>
    );
  }
}

export default App;
