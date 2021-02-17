import React from 'react'
import './index.css'
import ScoreCard from '../ScoreCard'
function ScoreBoard({ scores }) {
    const maxScore = Math.max(...scores);
    return (
        <>
        <div className="ScoreBoard">
            <div className="soreBoardHeader">
                SCORE BOARD
        </div>
            <div className="scoresContainer">
                {scores.map((element, index) =>
                    <ScoreCard
                        gameId={index + 1}
                        score={element}
                        isHighScore={element === maxScore}
                    />
                )}
            </div>
        </div>
        </>
    );
}
export default React.memo(ScoreBoard,({scores: prevScores },{scores: newScores})=>prevScores.length === newScores.length)