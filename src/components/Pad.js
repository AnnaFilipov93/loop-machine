import React from 'react';
import useAudio from '../useAudio.js';
import './Pad.css'


export const Pad = ({ url, isAudioOn, isLoopOn, name, id }) => {
  const [playing, toggle] = useAudio(url, isAudioOn, isLoopOn, name);


  return (
    <span className="squereContainer">
      <button className={"squere" + id} onClick={toggle}>
        {name +' '}
        {playing ? 'On' : 'Off'}
        
      </button>
    </span>
  );
};

