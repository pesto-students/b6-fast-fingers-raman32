import React from 'react'
import { convertToMinutesAndSeconds } from '../../../utils/time'
import './index.css'

function ScoreCard({playerName, score, isHighScore}){
return (
    <div className="ScoreCard">
        <div className="gameText">
            {playerName}
        </div>
        <div className="scoreText">
        <div>{convertToMinutesAndSeconds(score)}</div>  
            {isHighScore ? <div className="highScoreBadge"> High </div> : null}
        </div>
    </div>
);
}                           
export default ScoreCard