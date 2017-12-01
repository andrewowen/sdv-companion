import React, { Component } from 'react';

import SearchResults from './SearchResults';

import '../css/SearchBar.css'

class Search extends Component {


	searchDB = (event) => {
		event.preventDefault();
		console.log("Submit!");
		// first grab the text from the box
		console.log(this.searchField);
		// return items
	}

	render() {
		return (
			<div>			
				<form className="sdv-search" onSubmit={this.searchDB}>
					<h3>Search for things!</h3>
					<input ref={(input) => {this.searchField = input}} type="text" placeholder="Crops, tools, etc..." required/>
					<button type="submit">Go! →</button>
				</form>
				<SearchResults/>
			</div>
		)
	}
}

export default Search;