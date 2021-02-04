import React from 'react'
import './index.css'
import crossIcon from '../../assets/icons/cross-icon.svg'
function StopGame({ onStop }) {
    return (
        <div className="StopGame" onClick={onStop}>
            <img src={crossIcon} className="crossIcon" alt="Stop Game" />
            <div>
                Stop Game
        </div>
        </div>
    );
}
export default StopGame