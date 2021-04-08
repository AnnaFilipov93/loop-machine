import React from 'react';
import {useState, useEffect} from 'react';

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

export const Pad = (props) => {
  const [playing, toggle] = useAudio(props.url);

  return (
    <div>
      <div className="Squer" onClick={toggle}>{playing ? "On" : "Off"}</div>
    </div>
  );
};


