import React, { useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import './index.css'

import Header from '../../components/Header'
import GameArea from '../../components/GameArea'
import ScoreBoard from '../../components/ScoreBoard'
import EndScoreCard from '../../components/EndScoreCard'
import Button from '../../components/Button'

import reloadIcon from '../../assets/icons/reload-icon.svg'
import crossIcon from '../../assets/icons/cross-icon.svg'

import { routes } from '../../utils/constants'
import {getScoresFromLocalStorage} from '../../utils/storage'
import useGame from '../../hooks/useGame'

 
function Game() {
    const { playerName, initialDifficulty } = useParams();
    const {gameControl,textControl,timeControl,score,difficulty} = useGame(Number(initialDifficulty));

    let scores = useRef(getScoresFromLocalStorage());
    
    return (
        <div className="Game">
            <Header difficulty={difficulty} playerName={playerName} score={score} />
            <div className="body">
                {gameControl.gameState==="running" ?
                    <>
                        <ScoreBoard scores={scores.current} />
                        <GameArea
                           textControl={textControl}
                           timeControl={timeControl}
                        />
                        <div style={{flex:1,flexShrink:.5}}></div>
                    </>
                    :
                    <div>
                        <EndScoreCard 
                            score={score} 
                            isHighScore={Math.max(...scores.current)===score} 
                        />
                        <Button icon={reloadIcon} text="Restart" onClick={()=>gameControl.restartGame()} />
                    </div>
                }
            </div>

            <div className="footer">
                {gameControl.gameState==="running"  ?
                    <Button icon={crossIcon} text="Stop Game" onClick={()=>gameControl.stopGame()} /> :
                    <Link to={routes.entry}>
                        <Button icon={crossIcon} text="Quit" />
                    </Link>
                }
            </div>

        </div>
    );
}
export default Game