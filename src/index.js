import React from 'react';
import ReactDOM from 'react-dom';
// Inject global styles
import './globalStyles.css';
// Attach top-level (parent-most) component to the DOM.
import App from './components/App/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
