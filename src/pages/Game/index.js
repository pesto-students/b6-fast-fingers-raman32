import React, { useState, useEffect } from 'react'
import './index.css'
import LevelIndicator from '../../components/LevelIndicator'
import Timer from '../../components/Timer'
import WordDisplay from '../../components/WordDisplay'
import ScoreCounter from '../../components/ScoreCounter'
import TextBox from '../../components/TextBox'
import ScoreBoard from '../../components/ScoreBoard'
import EndScoreCard from '../../components/EndScoreCard'
import getRandomizedWord from '../../utils/getWord'
import  Button from '../../components/Button'
import reloadIcon from '../../assets/icons/reload-icon.svg'
import crossIcon from '../../assets/icons/cross-icon.svg'
import Text from '../../components/Text'
function Entry(props) {
    const { playerName, difficulty, setDifficulty, setPage } = props;
    const [currentWord, setCurrentWord] = useState('');
    const [totalTime, setTotalTime] = useState(400);
    const [typedText, setTypedText] = useState('');
    const [isFinished, setIsFinished] = useState(false);
    const [timerRestart, setTimerRestart] = useState(true);
    const [restart, setRestart] = useState(false);
    const [score, setScore] = useState(0);
    const [scores, setScores] = useState([]);
    const getRandomizedWordEasy = getRandomizedWord(1);
    const getRandomizedWordMedium = getRandomizedWord(2);
    const getRandomizedWordHard = getRandomizedWord(3);
    useEffect(() => {

        if (currentWord === typedText || currentWord === '') {
            if (difficulty > 3)
                setCurrentWord(getRandomizedWordHard());
            else if (difficulty > 2)
                setCurrentWord(getRandomizedWordMedium());
            else
                setCurrentWord(getRandomizedWordEasy());
            setDifficulty(difficulty + 0.01);
            setTypedText('');
            setScore(score + totalTime);
            setTotalTime(Math.ceil(currentWord.length / difficulty) > 2 ? Math.ceil(currentWord.length / difficulty) * 100 : 200);
            setTimerRestart(!timerRestart);
        }
    }, [currentWord, difficulty, getRandomizedWordEasy, getRandomizedWordHard, getRandomizedWordMedium, score, setDifficulty, totalTime, typedText,timerRestart])
    useEffect(() => {
        if (isFinished) {
            setScores((prev) => [...prev, score])
        }
    }, [isFinished, score])
    useEffect(() => {
        if (restart) {
            setScore(0);
            setDifficulty(1);
            setCurrentWord(getRandomizedWordEasy());
            setTypedText('');
            setIsFinished(false);
            setRestart(false);
        }
    }, [getRandomizedWordEasy, restart, setDifficulty])
    return (
        <div className="Game">
            <div className="header">
                <div className="headerLeft">
                    <Text text={`player_${playerName}`} />
                    <LevelIndicator level={difficulty} />
                </div>
                <div className="headerRight">
                    <div className="headerLogo">
                        fast fingers
    </div>
                    <ScoreCounter score={score} />
                </div>
            </div>
            {!isFinished ?
                <div className="scoreAndGameContainer">
                    <div className="scoreBoard" >
                        <ScoreBoard scores={scores} />
                        <Button icon={crossIcon} text="Stop Game" onClick={()=>setIsFinished(true)} />
                    </div>
                    <div className="gameInner">
                        <div className="timer">
                            <Timer totalTime={totalTime} onFinish={() => setIsFinished(true)} restart={timerRestart}/>

                        </div>
                        <WordDisplay word={currentWord} typedText={typedText} />
                        <TextBox text={typedText} setText={setTypedText} />
                    </div>
                    <div className="collapsableDiv">
                    </div>
                </div>
                :
                <>
                    <EndScoreCard scores={scores} />
                    <Button icon={reloadIcon} text="Restart" onClick={()=>setRestart(true)} />
                    <div className="quit">
                    <Button icon={crossIcon} text="Quit" onClick={()=>setPage(0)} />
                    </div>
                </>
            }


        </div>
    );
}
export default Entry