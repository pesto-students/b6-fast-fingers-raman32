import React from 'react'
import { convertToSecondsAndCenti } from '../../utils/time';
import './index.css'
function ScoreBoard({scores}){
const scoreList = scores.map((element,index) => <div>
    Game {index} : {convertToSecondsAndCenti(element)}
    </div>);
return (
    <div className="ScoreBoard">
        <div>
        SCORE BOARD
        </div>
        <div>
        {scoreList}
        </div>
    </div>
);
}                           
export default ScoreBoard