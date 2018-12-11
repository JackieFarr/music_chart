import React from 'react';
import SongList from '../components/SongList.js'

class MusicContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      music: []
    }
  }

componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({music: data.feed.entry});
    })
    request.send();
  }

  render(){
    return (
      <div className="music-container">
          <h1>UK Top 20 Songs</h1>
          <SongList music={this.state.music}/>
      </div>
    )
  }
}

  export default MusicContainer;
