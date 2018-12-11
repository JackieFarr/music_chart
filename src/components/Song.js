import React from 'react';

const Song = (props) => {
  if(!props) return null;

  return (
    <div className="song">
      <div className="position-box"><h4 className='position'>{props.position}</h4></div>
      <h3 className='song-icon'>{props.index}</h3>
      <img className="image" src={props.image} alt={props.title}/>
      <h3>{props.title} - {props.artist}</h3>
    </div>
  )
}

export default Song;
