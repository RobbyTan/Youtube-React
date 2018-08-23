import _ from 'lodash';
import React,{Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCaGGxSXGaHYujEHmS1YcgPftE_Tpk0QEw';
// Create a new component that produce HTML

// Const final value
class App extends Component{
	constructor(props){
		super(props);

		this.state={
			videos : [],
			selectedVideo: null
		};
			//sama dengan this.setState({videos : videos})}
		this.videoSearch('Studio c');	
	}
	
	videoSearch (term) {
		YTSearch({key: API_KEY, term : term}, (videos)=>{
			this.setState({
				videos: videos,
				selectedVideo : videos[0]
			})
		});
	}
	render(){
		// membuat function menunggu 300ms untuk dapat berjalan
		// you can only trigger this function once every 300 ms
		const videoSearch = _.debounce((term)=>{this.videoSearch(term)},1000);
		return (
			<div>
				<SearchBar onSearchTermChange = {videoSearch}/>
				{/* untuk mempassing data ke component */}
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList 
				onVideoSelect ={selectedVideo =>this.setState({selectedVideo})}
				videos={this.state.videos}/>
			</div>
		);
	}
}

// and generated component into the page/DOM
// React DOM untuk langsung berhubungan dengan DOM
// React DOM menerima instance
// Cara membuat instance dari class
// ReactDom memerlukan 2 parameter : instance dan juga dicomponent html mana code akan dirender
ReactDom.render(<App></App>, document.querySelector('.container'));

