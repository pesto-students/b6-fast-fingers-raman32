import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import './index.css'

import ScoreBoard from '../../components/ScoreBoard'
import EndScoreCard from '../../components/EndScoreCard'
import Button from '../../components/Button'
import GameArea from '../../components/GameArea'
import Text from '../../components/Text'

import reloadIcon from '../../assets/icons/reload-icon.svg'
import crossIcon from '../../assets/icons/cross-icon.svg'

import { getDifficulty } from '../../utils/difficulty'
import { convertToMinutesAndSeconds } from '../../utils/time'
import { routes } from '../../utils/constants'
import {addScoreToLocalStorage, getScoresFromLocalStorage} from '../../utils/storage'

 
function Game() {
    const { playerName, initialDifficulty } = useParams();
    const [difficulty, setDifficulty] = useState(parseFloat(initialDifficulty));
    const [isFinished, setIsFinished] = useState(false);
    const [score, setScore] = useState(0);
    const scores = getScoresFromLocalStorage();

    const handleFinish = () => {
        setIsFinished(true);
        if(score !==0 )
            addScoreToLocalStorage(score);
    }

    const handleRestart = () => {
        setScore(0);
        setDifficulty(parseFloat(initialDifficulty));
        setIsFinished(false);
    }
    return (
        <div className="Game">
            <div className="header">
                <div className="headerLeft">
                    <Text text={`player_${playerName}`} />
                    <Text text={`difficulty: ${getDifficulty(difficulty)}`} />
                </div>
                <div className="headerRight">
                    <Text text="Fast Fingers" />
                    <Text text={`Score: ${convertToMinutesAndSeconds(score)}`} />
                </div>
            </div>
            <div className="body">
                {!isFinished ?
                    <>
                        <ScoreBoard scores={scores} />
                        <GameArea
                            difficulty={difficulty}
                            setDifficulty={setDifficulty}
                            setScore={setScore}
                            handleFinish={handleFinish}
                        />
                        <div style={{flex:1}} />
                    </>
                    :
                    <div>
                        <EndScoreCard 
                            score={score} 
                            isHighScore={Math.max(...scores)===score} 
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