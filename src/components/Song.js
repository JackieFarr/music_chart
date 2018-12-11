import React from 'react';

const Song = (props) => {
  if(!props) return null;

  return (
    <div className="song">
      <a className="position-box"><h4 className='position'>{props.position}</h4></a>
      <h2 className='song-icon'>{props.index}</h2>
      <a className="song-link" href={props.songRef}><img className="image" src={props.image} alt={props.title}/></a>
      <a className="song-link" href={props.songRef}><h3 className="artist-name">{props.artist}</h3></a>
      <h4 className="song-title">{props.title}</h4>
    </div>
  )
}

export default Song;
