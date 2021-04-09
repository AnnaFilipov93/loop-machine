import React, { useEffect, useState } from 'react';
import { Pad } from './Pad.js';
import './Pads.css'

export const Pads = (props) => {
  const { data } = props;
  //const [isAudioOn, setIsAudioOn] = useState(false);
  const [isLoopOn, setIsLoopOn] = useState(false);
  const [counter, setCounter] = useState(0);
  const [intervalId, setIntervalId] = useState(0);

  //let arr = [];
  
  const handleClick = () => {
    //setIsAudioOn((prev) => !prev);
    setIsLoopOn((prev) => !prev);
    
  };
const printArr = () => {
  
  /*

    for(const i in arr){
        console.log(`${i}: `);
        console.dir(arr[i]);{}
    }
*/
  };

  useEffect(() => {
    if(isLoopOn){
      const id = setInterval(() => {
      setCounter(counter=> counter+1)
      }, 9000);
      
      setIntervalId(()=>id)
      
    }
      else{
      clearInterval(intervalId);
    }
  }, [isLoopOn]);
  

  return (
    <div className="pads">
      {data.map((pad) => (
        <Pad
          key={pad.name}
          name={pad.name}
          url={pad.url}
          isLoopOn={isLoopOn}
          id={pad.id}
          counter={counter}
        />
      ))}
        
      <div className = "playButtonContainer">
          <button className="playButton" onClick={handleClick} >
              {`${isLoopOn ? 'Stop' : 'Play'}`}
          </button>

      
          <div>{isLoopOn ? 'AUDIO ON' : ' AUDIO Off'}</div>
      </div>
      <div>{printArr()}</div>
      <div> {}</div>
    </div>
  );
};

