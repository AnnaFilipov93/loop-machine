import React from 'react';
import useAudio from '../useAudio.js';
import './Pad.css'


export const Pad = ({ url, isAudioOn, isLoopOn, name }) => {
  const [playing, toggle] = useAudio(url, isAudioOn, isLoopOn, name);


  return (
    <>
      <button className="squere" onClick={toggle}>
        {name +' '}
        {playing ? 'On' : 'Off'}
        
      </button>
    </>
  );
};

