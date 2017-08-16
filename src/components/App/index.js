// Dependencies
import React, { Component } from 'react';
// Externals
import InfoPanel from '../InfoPanel';
import Earthquakes from '../Earthquakes';
// Internals
import './styles.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
          <div className="my-header">
            Earthquakes!
          </div>
          <InfoPanel />
          <Earthquakes />
        </div>
      </div>

    );
  }
}

export default App;
