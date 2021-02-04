import React from 'react'
import { convertToSecondsAndCenti } from '../../utils/time';
import './index.css'
function ScoreCard({gameId, score, isHighScore}){
return (
    <div>
        <div>
        SCORE : GAME {gameId} 
        </div>
        <div>
            {convertToSecondsAndCenti(score)}
        </div>
        {isHighScore && <div> New High Score</div>}
    </div>
);
}                           
export default ScoreCard