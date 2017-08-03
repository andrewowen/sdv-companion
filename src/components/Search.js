import React, { Component } from 'react';

import SearchResults from './SearchResults';

import '../css/SearchBar.css'

class Search extends Component {
	render() {
		return (
			<div>			
				<form className="sdv-search">
					<h3>Search for things!</h3>
					<input type="text" placeholder="Crops, tools, etc..." required/>
					<button type="submit">Go! →</button>
				</form>
				<SearchResults/>
			</div>
		)
	}
}

export default Search;