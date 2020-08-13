
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.js';

require('dotenv').config();

// attach component to the DOM
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
