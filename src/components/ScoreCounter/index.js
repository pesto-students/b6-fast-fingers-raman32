import React from 'react'
import { convertToSecondsAndCenti } from '../../utils/time';
import './index.css'
function ScoreCounter({score}){
return (
    <div>
        SCORE : {convertToSecondsAndCenti(score)}
    </div>
);
}                           
export default ScoreCounter