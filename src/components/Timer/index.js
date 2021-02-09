import React, { useState, useEffect } from 'react'
import './index.css'
import ProgressCircle from '../ProgressCircle'
import { convertToSecondsAndCenti } from '../../utils/time';

function Timer({totalTime, onFinish, restart}) {
    const [time, setTime] =useState(0);
    const [total,setTotal] = useState(2);
    const [progress, setProgress] = useState(0);
    useEffect(()=>{
        setTotal(totalTime);
        setTime(0);
    },[restart, totalTime])
    useEffect(()=>{
        const timer = setInterval(()=>setTime((prev)=>parseInt(prev)+10),100);
        return ()=>{clearInterval(timer)}
    },[])
    useEffect(() => {
        setProgress(time  * 100/ total);
        if(time>total){
            onFinish();
            setTime(0);
        }
    }, [onFinish, time, total])
    return (
        <ProgressCircle progress={progress}>
            {convertToSecondsAndCenti(time)}
        </ProgressCircle>
    );
}
export default Timer