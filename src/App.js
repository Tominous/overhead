import React, { Component } from 'react';
import { Button } from 'react-toolbox/lib/button';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.appTest}>
        <Button label="Overhead" primary raised />
      </div>
    );
  }
}

export default App;
