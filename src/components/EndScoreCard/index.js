import React from 'react'
import { convertToMinutesAndSeconds } from '../../utils/time';
import './index.css'
function EndScoreCard({ score, isHighScore }) {

    return (<div className="EndScoreCard">
        <div>
            Your Score
        </div>
        <div>
            {convertToMinutesAndSeconds(score)}
        </div>
        <div>
        { isHighScore ? "New High Score" : ""}
        </div>
    </div>);
}
export default EndScoreCard