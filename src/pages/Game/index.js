import React, { useRef, useState} from 'react'
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
import {addScoreToLocalStorage, getScoresFromLocalStorage} from '../../utils/storage'

 
function Game() {
    const { playerName, initialDifficulty } = useParams();
    const [difficulty, setDifficulty] = useState(parseFloat(initialDifficulty));
    const [isFinished, setIsFinished] = useState(false);
    const [score, setScore] = useState(0);

    let scores = useRef(getScoresFromLocalStorage());

    const handleFinish = () => {
        if(score !==0 )
            addScoreToLocalStorage(score);
        scores.current = getScoresFromLocalStorage();
        setIsFinished(true);
    }

    const handleRestart = () => {
        setScore(0);
        setDifficulty(parseFloat(initialDifficulty));
        setIsFinished(false);
    }
    return (
        <div className="Game">
            <Header difficulty={difficulty} playerName={playerName} score={score} />
            <div className="body">
                {!isFinished ?
                    <>
                        <ScoreBoard scores={scores.current} />
                        <GameArea
                            difficulty={difficulty}
                            setDifficulty={setDifficulty}
                            setScore={setScore}
                            handleFinish={handleFinish}
                        />
                        <div style={{flex:1,flexShrink:.5}}></div>
                    </>
                    :
                    <div>
                        <EndScoreCard 
                            score={score} 
                            isHighScore={Math.max(...scores.current)===score} 
                        />
                        <Button icon={reloadIcon} text="Restart" onClick={handleRestart} />
                    </div>
                }
            </div>

            <div className="footer">
                {!isFinished ?
                    <Button icon={crossIcon} text="Stop Game" onClick={handleFinish} /> :
                    <Link to={routes.entry}>
                        <Button icon={crossIcon} text="Quit" />
                    </Link>
                }
            </div>

        </div>
    );
}
export default Game