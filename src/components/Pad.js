import React  from 'react';
import { useState, useEffect } from 'react';
import './Pad.css'

const useAudio = (url, isAudioOn, timer) => {

  //Hooks capturing the audio => url, playing => if the user used on/off on the pad
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  const toggle = () => setPlaying(!playing);

  //If the user do some actions
  useEffect(() => {
    //If the user pushed the on and the play buttons
    if (playing && isAudioOn) {
      //The audio start to play just in the start of a loop
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

//A single pad component
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
