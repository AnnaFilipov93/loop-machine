import { useState, useEffect } from 'react';



const useAudio = (url, isAudioOn, isLoopOn, name) => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);
    const toggle = () => setPlaying(!playing);
  
    useEffect(() => { 
        if (playing && isAudioOn && isLoopOn) {
            audio.play();
        } else {
            audio.pause();
            audio.currentTime = 0;
        }
    }, [playing, audio, isAudioOn, isLoopOn]);
  
    useEffect(() => {
      audio.loop = true;
      audio.addEventListener('ended', () => setPlaying(false));
      return () => {
        audio.removeEventListener('ended', () => setPlaying(false));
      };
    }, [audio]);
  
    return [playing, toggle];
  };

  export default useAudio;

  