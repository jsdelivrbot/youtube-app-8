import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/searchbar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
//Create a new component. THis component should produce some html

const API_KEY = 'AIzaSyA7dLuVrpqvDLP-9YmGyGd1Gc83vZ6q2bE';



class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		YTSearch({key: API_KEY, term: 'world of tanks'}, videos => {
			this.setState({ 
				videos: videos, 
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		console.log(this.state.videos[0]);
		return ( 
			<div>
				<SearchBar />
				<VideoDetail	video={this.state.selectedVideo} />
				<VideoList 
					videos={this.state.videos} 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
				/>
			</div>
			)
	}
}
//Put generated HTML into the DOM
//
ReactDOM.render(<App />, document.querySelector('.container'));