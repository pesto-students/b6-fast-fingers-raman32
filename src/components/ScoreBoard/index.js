import React from 'react'
import './index.css'
import ScoreCard from '../ScoreCard'
function ScoreBoard({scores}){
const maxScore = Math.max(...scores);
const scoreList =  scores.map((element,index) => 
    <ScoreCard 
        gameId={index+1} 
        score={element} 
        isHighScore={element===maxScore} 
    />
    );
return (
    <div className="ScoreBoard">
        <div className="ScoreBoardHeader">
        SCORE BOARD
        </div>
        {scoreList}
    </div>
);
}                           
export default ScoreBoard