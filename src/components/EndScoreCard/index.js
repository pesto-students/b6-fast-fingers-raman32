import React from 'react'
import './index.css'
function EndScoreCard({scores}){

return(<div className="EndScoreCard">
<div>
    Your Score: {scores[scores.length -1]}
</div>
{
    scores[scores.length-1] === Math.max(...scores)
    &&
    <div>
HIGH SCORE
</div>}
</div>);
}
export default EndScoreCard