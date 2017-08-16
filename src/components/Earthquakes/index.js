import React, { Component } from 'react';
import moment from 'moment';
import map from 'lodash/map';
import './styles.css';

class Earthquakes extends Component {
  render() {
    return (
      <div className="quake-list">
        <div className="row">
          {map(this.props.earthquakes.features, (earthquake) => (
            <div className="col-sm-4" key={earthquake.id}>
              <div className="card" >
                <div className="card-block">
                  <h4 className="card-title">{earthquake.properties.place}</h4>
                  <h6 className="card-subtitle mb-2 text-muted">Magnitude: {earthquake.properties.mag}</h6>
                  <h6 className="card-subtitle mb-2 text-muted">Time: {moment(earthquake.properties.time).format('llll')}</h6>
                  <p className="card-text">Coordinates: {earthquake.geometry.coordinates}</p>
                <button className="card-link"><a href={earthquake.properties.url}>USGS Event Link</a></button>
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
