import React, { useState, useEffect } from 'react'
import './index.css'
import ProgressCircle from '../ProgressCircle'
import { convertToMinutesAndSeconds } from '../../utils/time';
function Timer({totalTime, onFinish, timerControl}) {
    const {start, restart} = timerControl;
    const [time, setTime] =useState(0);
    const [total,setTotal] = useState(0);
    const [progress, setProgress] = useState(0);
    useEffect(()=>{
        setTotal(totalTime);
        setTime(0);
    },[restart, totalTime])
    useEffect(()=>{
        let timer;
        if(start){
        setInterval(()=>setTime((prev)=>parseInt(prev)+10),100);
        }
        return ()=>{clearInterval(timer)}
    },[start])
    useEffect(() => {
        setProgress(time  * 100/ total);
        if(!!total && time>total){
            onFinish();
            setTime(0);
        }
    }, [onFinish, time, total])
    return (
        <ProgressCircle progress={progress}>
            {convertToMinutesAndSeconds(time)}
        </ProgressCircle>
    );
}
export default Timer