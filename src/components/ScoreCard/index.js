import React from 'react'
import { convertToMinutesAndSeconds } from '../../utils/time';
import './index.css'
function ScoreCard({gameId, score, isHighScore}){
return (
    <div className="ScoreCard">
        <div >
        SCORE : GAME {gameId} 
        </div>
        <div>
            {convertToMinutesAndSeconds(score)}
        </div>
        <div>
        {isHighScore ? "New High Score" : ""}
        </div>
    </div>
);
}                           
export default ScoreCard