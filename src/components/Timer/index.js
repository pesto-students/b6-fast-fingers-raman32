import React, { useEffect } from 'react'
import './index.css'
import ProgressCircle from '../ProgressCircle'
import { convertToMinutesAndSeconds } from '../../utils/time';
import useTimer from '../../hooks/useTimer';
function Timer({timerControl, onFinish}) {
    
    const {start, restart, totalTime} = timerControl;
    const {time, setStart, setRestart} = useTimer(totalTime);
    
    useEffect(()=>{
        if(start)
         setStart(true);
     },[setStart, start])

    useEffect(()=>{
        if(start)
        setRestart(true);
    },[restart, setRestart, start])
   
    useEffect(() => {
        if(time < 0)
            onFinish();
    }, [time, onFinish])

    return (
        <ProgressCircle progress={time*100/totalTime} size={240}>
            <span className="timeText">{convertToMinutesAndSeconds(time)}</span>
        </ProgressCircle>
    );
}
export default Timer