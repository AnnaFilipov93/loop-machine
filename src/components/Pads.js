import React from 'react';
import {Pad} from './Pad.js';

export const Pads = function (props)  {

    
    

    return (
        <div className="pads">
             {props.data.map(pad => 
                <Pad key={pad.name} name={pad.name} url={pad.url}/> )} 
            

        </div>
    )
}