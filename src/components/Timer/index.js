import React from 'react'
import './index.css'
import ProgressCircle from '../ProgressCircle'
import { convertToMinutesAndSeconds } from '../../utils/time';
function Timer({time,totalTime}) {
    return (
        <ProgressCircle progress={totalTime === 0 ? 1 : time*100/totalTime} size={240}>
            <span className="timeText">{convertToMinutesAndSeconds(time)}</span>
        </ProgressCircle>
    );
}
export default Timer