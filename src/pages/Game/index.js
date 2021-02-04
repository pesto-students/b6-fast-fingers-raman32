import React, { useState, useEffect } from 'react'
import './index.css'
import NameCard from '../../components/NameCard'
import LevelIndicator from '../../components/LevelIndicator'
import Timer from '../../components/Timer'
import WordDisplay from '../../components/WordDisplay'
import ScoreCounter from '../../components/ScoreCounter'
import TextBox from '../../components/TextBox'
import StopGame from '../../components/StopGame'
import ScoreBoard from '../../components/ScoreBoard'
import EndScoreCard from '../../components/EndScoreCard'
import Restart from '../../components/Restart';
import getRandomizedWord from '../../utils/getWord'
function Entry(props){
const {playerName, difficulty, setDifficulty, setPage } =  props;
const [currentWord,setCurrentWord] = useState('start');
const [totalTime,setTotalTime] = useState(400);
const [typedText, setTypedText] = useState('');
const [isFinished,setIsFinished] = useState(false);
const [restart,setRestart] = useState(false);
const[score,setScore] = useState(0);
const[scores,setScores] =useState([]);
const getRandomizedWordEasy = getRandomizedWord(1);
const getRandomizedWordMedium = getRandomizedWord(2);
const getRandomizedWordHard = getRandomizedWord(3);
useEffect(() => {
    if(currentWord===typedText) {
        if(difficulty > 3)
        setCurrentWord(getRandomizedWordHard());
        else if(difficulty >2)
        setCurrentWord(getRandomizedWordMedium());
        else
        setCurrentWord(getRandomizedWordEasy());
        setDifficulty(difficulty+0.01);
        setTypedText('');
        setScore(score+totalTime);
        setTotalTime(Math.ceil(currentWord.length/difficulty) > 2 ? Math.ceil(currentWord.length/difficulty)*100 : 200);
             
    }
}, [currentWord, difficulty, getRandomizedWordEasy, getRandomizedWordHard, getRandomizedWordMedium, score, setDifficulty, totalTime, typedText])
useEffect(()=>{
    if(isFinished) {
    setScores((prev)=>[...prev,score])  
    }
},[isFinished, score])
useEffect(()=>{
if(restart){
    setScore(0);
    setDifficulty(1);
    setCurrentWord(getRandomizedWordEasy());
    setTypedText('');
    setIsFinished(false);
    setRestart(false);
}
},[restart])
return (
    <div className="Game">
    <div className="header">
    <div className="headerLeft">
    <NameCard name={playerName}/>
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
    <StopGame onStop={()=>setPage(0)} />
    </div>
    <div className="gameInner">
    <div className="timer">
    <Timer totalTime={totalTime}  onFinish={()=>setIsFinished(true)}/>
    
    </div>
    <WordDisplay word={currentWord} typedText={typedText} />
    <TextBox text={typedText} setText={setTypedText}/>
    </div>
    <div className="collapsableDiv">
        </div>
    </div>
    :
    <>
    <EndScoreCard scores={scores} />
    <Restart setRestart={setRestart} />
    </>
    }
   

    </div>
);
}                           
export default Entry