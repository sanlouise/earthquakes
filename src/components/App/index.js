// Dependencies
import React, { Component } from 'react';
// Externals
import InfoPanel from '../InfoPanel';
import Earthquakes from '../Earthquakes';
// Internals
import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      earthquakes: {},
    };
  }

  //Needed to fetch data before app renders
  componentWillMount() {
    this.fetchEarthquakes();
  }

  fetchEarthquakes() {
    fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson')
    	.then((res) => {
    		return res.json();
    	})
      .then((earthquakes) => {
        this.setState({ earthquakes });
      })
  }

  render() {
    return (
      <div className="App">
        <div className="title">
          <div className="my-header">
            Earthquakes!
          </div>
          <InfoPanel earthquakes={this.state.earthquakes}/>
          <Earthquakes earthquakes={this.state.earthquakes}/>
        </div>
      </div>

    );
  }
}

export default App;
