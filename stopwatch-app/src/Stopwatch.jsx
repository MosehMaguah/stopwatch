import React, {useState, useEffect, useRef} from 'react';

function Stopwatch(){

    function start(){

    }

    function stop(){

    }

    function reset(){

    }

    function formatTime(){
        return `00:00:00`;
    }


    return (
        <div className='stopwatch'>
            <div className='display'>
                {formatTime()}
            </div>
            <div className='controls'>
                <button className='start-button' onClick={start}>Start</button>
                <button className='stop-button'>Stop</button>
                <button className='reset-button'>Reset</button>
            </div>
            
        </div>
    );
}

export default Stopwatch;