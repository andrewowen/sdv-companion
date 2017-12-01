import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import NoMatch from './components/NoMatch';

import './index.css';
import './css/App.css';

const Root = () => {
	return (
		<BrowserRouter>
			<Switch>	 		
				<Route exact path='/' component={App}/>
				<Route component={NoMatch} />
			</Switch>
		</BrowserRouter>
	)
}

render(<Root/>, document.getElementById('root'));
registerServiceWorker();
