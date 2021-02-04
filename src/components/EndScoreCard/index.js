import React from 'react'
function EndScoreCard({scores}){

return(<view>
<view>
    Your Score: {scores[scores.length -1]}
</view>
</view>);
}
export default EndScoreCard