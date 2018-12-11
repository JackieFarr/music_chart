import React from 'react';

const Song = (props) => {
  if(!props) return null;

  return (
    <div className="song">
      <a className="song-link" href={props.songRef}><div className="position-box"><h4 className='position'>{props.position}</h4></div></a>
      <h3 className='song-icon'>{props.index}</h3>
      <a className="song-link" href={props.songRef}><img className="image" src={props.image} alt={props.title}/></a>
      <a className="song-link" href={props.songRef}><h3>{props.artist}</h3></a>
      <a className="song-link" href={props.songRef}><h4>{props.title}</h4></a>
    </div>
  )
}

export default Song;
