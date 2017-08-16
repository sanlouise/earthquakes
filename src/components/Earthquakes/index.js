import React, { Component } from 'react';
import moment from 'moment';
import map from 'lodash/map';

class Earthquakes extends Component {
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
    console.log('this.state.earthquakes', this.state.earthquakes);
    return (
      <div className="quake-list">
        <div className="row">
          {map(this.state.earthquakes.features, (earthquake) => (
            <div className="col-sm-6" key={earthquake.properties.ids}>
              <div className="card" >
                <div className="card-block">
                  <h4 className="card-title">{earthquake.properties.place}</h4>
                  <h6 className="card-subtitle mb-2 text-muted">Magnitude: {earthquake.properties.mag}</h6>
                  <h6 className="card-subtitle mb-2 text-muted">Time: {moment(earthquake.properties.time).format('llll')}</h6>
                  <p className="card-text">Coordinates: {earthquake.geometry.coordinates}</p>
                  <a href={earthquake.properties.url} className="card-link">USGS Event Link</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Earthquakes;
