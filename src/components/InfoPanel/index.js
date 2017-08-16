import React, { Component } from 'react';
import { earthquakes } from '../../api/earthquakes';

class InfoPanel extends Component {
  render () {
    console.log('earthquakes', earthquakes);
    return (
      <div className='earthquake-title'>
        {earthquakes && earthquakes.features && (
          <p>This is a list of {earthquakes.features.length} Earthquakes occurring on the morning of July 14th across the United States.</p>
        )}
      </div>
    );
  }
}

export default InfoPanel;
