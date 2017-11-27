import React from 'react';
import ReactDOM from 'react-dom';
//Create a new component. THis component should produce some html

const App = () => {
	return <div>Hi!</div>;
};
//Put generated HTML into the DOM
//
ReactDOM.render(<App />, document.querySelector('.container'));