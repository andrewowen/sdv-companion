import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './App';

import './index.css';
import './css/App.css';

render(<App/>, document.getElementById('root'));
registerServiceWorker();