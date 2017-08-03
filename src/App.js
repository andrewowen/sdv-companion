import React, { Component } from 'react';


// Components
import Header from './components/Header';
import Search from './components/Search';

class App extends Component {
	render() {
		return(
			<div>			
				<Header title="Stardew Valley Companion!"/>
				<Search/>
			</div>
		)
	}
}

export default App;