// import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/App';
// import registerServiceWorker from './registerServiceWorker';
import Routes from './Routes';

import { unregister } from './registerServiceWorker';
unregister();

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(Routes, document.getElementById('root'));
// registerServiceWorker();
