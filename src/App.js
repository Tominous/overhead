import React, { Component } from 'react';
import { Button } from 'react-toolbox/lib/button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button label="Overhead" raised primary />
      </div>
    );
  }
}

export default App;
