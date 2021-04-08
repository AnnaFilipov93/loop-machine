import React, { useState } from 'react';
import { Pad } from './Pad.js';

export const Pads = (props) => {
  const { data } = props;
  const [isAudioOn, setIsAudioOn] = useState(false);
  const [isLoopOn, setIsLoopOn] = useState(false);

  let arr = [];
  let counter = 0;



  const loop = () => {

    while (props.isAudioOn){
        if(counter !== 9){
            setTimeout( (counter + 1), 1000)
        }
        else if (counter = 0){
           
        }
        
    }
  }


  const handleClick = () => {
    setIsAudioOn((prev) => !prev);
    setIsLoopOn((prev) => !prev);
  };

  const printArr = () => {

    for(const i in arr){
        console.log(`${i}: `);
        console.dir(arr[i]);
    }

  };

  return (
    <div className="pads">
      {arr = data.map((pad) => (
        <Pad
          key={pad.name}
          name={pad.name}
          url={pad.url}
          isAudioOn={isAudioOn}
          isLoopOn={isLoopOn}
        />
      ))}
        
      <div className = "playButton">
            <button onClick={handleClick} style={{ marginTop: '20px' }}>
                {`${isAudioOn ? 'Stop' : 'Play'}`}
            </button>
      </div>

      <div>{isAudioOn ? 'AUDIO ON' : ' AUDIO Off'}</div>
      <div>{printArr()}</div>
    </div>
  );
};