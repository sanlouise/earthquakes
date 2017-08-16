import React, { Component } from 'react';
import './styles.css';
import moment from 'moment';

class InfoPanel extends Component {
  render () {
    return (
      <div className='earthquake-title'>
        {this.props.earthquakes.features && (
          <p>There are currently {this.props.earthquakes.features.length} earthquakes occurring in the USA.</p>
        )}
      </div>
    );
  }
}

export default InfoPanel;
