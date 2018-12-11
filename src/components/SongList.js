import React from 'react';
import Song from './Song.js';

class SongList extends React.Component {

  render(){
   const songNodes = this.props.music.map((song, index) => {
    return (
        <Song
        title={song["im:name"]["label"]}
        position={index + 1}
        artist={song["im:artist"]["label"]}
        image={song["im:image"][0]["label"]}
        songRef={song["link"][1]["attributes"]["href"]}
        key={index}
        value={index}>
      </Song>
    )
  })

  return (
    <div className="song-link">
    {songNodes}
    <audio id="audio" hidden="true"></audio>
    </div>
  )
  }
}

export default SongList;
