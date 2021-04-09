import React from 'react';
import { useState, useEffect } from 'react';
import './Pad.css'

const useAudio = (url, isAudioOn, timer, id) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    if (playing && isAudioOn) {
      if (timer === 0) {
        audio.play();
        audio.loop = true;
      }
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [playing, audio, isAudioOn, timer]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [audio]);

  return [playing, toggle];
};

export const Pad = ({ url, isAudioOn, timer, name, id }) => {
  const [playing, toggle] = useAudio(url, isAudioOn, timer);

  return (
    <span className="squereContainer">
      <button className={"squere" + id} onClick={toggle}>
         {name + " "} 
         {playing ? 'On' : 'Off'}
        
      </button>
    </span>
  );
};
