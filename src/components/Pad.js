import React,{useState, useEffect} from 'react';
import useAudio from '../useAudio.js';
import './Pad.css'




export const Pad = ({ url, isLoopOn, name, id, counter }) => {
  //const [playing, toggle] = useAudio(url, isAudioOn, isLoopOn, name);

  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  const toggle = () => setPlaying(!playing);

  useEffect(() => { 
      if (playing && isLoopOn) {
          audio.play();
      } else {
          audio.pause();
          audio.currentTime = 0;
      }
  }, [playing, audio, isLoopOn]);

  useEffect(() => {
    audio.loop = true;
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [audio]);

  useEffect(() => {
    //if active -> start playing from 0
    //if is On
    //audio.play
    //if(counter)
    if(playing )
    {
      audio.play();
    
    }
  }, [counter]);
  

  return (
    <span className="squereContainer">
      <button className={"squere" + id} onClick={toggle}>
        {name +' '}
        {playing ? 'On' : 'Off'}

        <div>{counter}</div>
        
      </button>
    </span>
  );
};

