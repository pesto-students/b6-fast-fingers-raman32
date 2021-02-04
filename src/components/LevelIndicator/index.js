import React from 'react'
import './index.css'
function LevelIndicator({level}){
return (
    <div>
        <div>
        LEVEL
        </div>
        <div>
            {level >= 3 ? 'Hard' : level >= 2 ? 'Medium' : 'Easy'}
        </div>
    </div>
);
}                           
export default LevelIndicator