import React, { useState, useEffect } from 'react';
import { Pad } from './Pad.js';
import './Pads.css';

export const Pads = (props) => {
  const { data } = props;
  const [isAudioOn, setIsAudioOn] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (isAudioOn) {
      const interval = setInterval(() => {
        if (timer >= 7) {
            setTimer(0);
        } else setTimer((seconds) => seconds + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer, isAudioOn]);

  //Handle the Play/Stop button
  const handleClick = () => {
    setIsAudioOn((prev) => {
      if (!prev) return true;
      setTimer(0);
      return false;
    });
    setIsAudioOn(!isAudioOn);
  };

  return (
    <div className="pads">
      {timer}
      <br/> <br/>
      {data.map((pad) => (
        <Pad
          timer={timer}
          key={pad.name}
          name={pad.name}
          url={pad.url}
          isAudioOn={isAudioOn}
          id={pad.id}
        />
      ))}

      <div className = "playButtonContainer">
        <button className="playButton" onClick={handleClick} >
          {`${isAudioOn ? 'Stop' : 'Play'}`}
        </button>

        <div>{isAudioOn ? 'AUDIO ON' : ' AUDIO Off'}</div>
      </div>

    </div>
  );
};
