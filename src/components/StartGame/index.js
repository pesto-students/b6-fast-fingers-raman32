import React from 'react'
import './index.css'
import playIcon from '../../assets/icons/play-icon.svg'
function StartGame({setPage}){
return (
    <div className="StartGame" onClick={() => setPage(1)}>
    <img className ="playIcon" src={playIcon} alt="Click To play" />
    <div>Start Game</div>
    </div>
);
}                           
export default StartGame