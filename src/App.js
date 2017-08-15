import React, { Component } from 'react';
import Counter from './components/Counter';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Counter />
      </div>
    );
  }
}

export default App;
