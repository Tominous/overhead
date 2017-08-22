import React, { Component } from 'react';
import FakeFetch from './components/FakeFetch';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <FakeFetch />
      </div>
    );
  }
}

export default App;
