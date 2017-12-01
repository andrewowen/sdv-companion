import React, { Component } from 'react';

import {
	ApolloClient,
	gql,
	graphql,
	ApolloProvider,
} from 'react-apollo';

// Components
import Header from './components/Header';
import Search from './components/Search';

const client = new ApolloClient();

const channelsListQuery = gql`
	query ChannelsListQuery {
		channels {
			id
			name
		}
	}
`;

const ChannelsList = ({ data: {loading, error, channels }}) => {
	if(loading) {
		return <p>Loading...</p>;
	}
	if(error) {
		return <p>{error.message}</p>;
	}

	return <ul>
		{ channels.map(ch => <li key={ch.id}>{ch.name}</li>)}
	</ul>
};

const ChannelsListWithData = graphql(channelsListQuery)(ChannelsList);


class App extends Component {
	render() {
		return(
			<ApolloProvider client={client}>
				<div>			
					<Header title="Stardew Valley Companion!"/>
					<Search/>
				</div>
			</ApolloProvider>
		)
	}
}

export default App;