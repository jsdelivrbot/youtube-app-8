import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar';
//Create a new component. THis component should produce some html

const API_KEY = 'AIzaSyA7dLuVrpqvDLP-9YmGyGd1Gc83vZ6q2bE';

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
		);
};
//Put generated HTML into the DOM
//
ReactDOM.render(<App />, document.querySelector('.container'));