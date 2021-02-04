import React, { useState, useEffect } from 'react'
import './index.css'
import ProgressCircle from '../ProgressCircle'
import { convertToSecondsAndCenti } from '../../utils/time';

function Timer({totalTime, onFinish}) {
    const [time, setTime] =useState(0);
    const [total,setTotal] = useState(2);
    const [progress, setProgress] = useState(0);
    useEffect(()=>{
        setTotal(totalTime);
        setTime(0);
    },[totalTime])
    useEffect(() => {
        const timer = setTimeout(()=>setTime(time+10),100);
        setProgress(time  * 100/ total);
        if(time>total){
            onFinish();
            clearTimeout(timer);
            setTime(0);
        }
        return ()=>{clearTimeout(timer)}
    }, [onFinish, time, total])
    return (
        <ProgressCircle progress={progress}>
            {convertToSecondsAndCenti(time)}
        </ProgressCircle>
    );
}
export default Timer