import React, { useEffect, useReducer } from 'react';
import './index.css'


import Timer from '../../components/Timer'
import WordDisplay from '../../components/WordDisplay'
import TextBox from '../../components/TextBox'
import { getTotalTime } from '../../utils/time';
import { DIFFICULTY_INCREMENT_FACTOR } from '../../utils/constants';
import useWord from '../../hooks/useWord';


const initialState = { start: false, restart: false, totalTime: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'start':
            return { start: true, restart: false, totalTime: action.payload }
        case 'restart':
            return { ...state, restart: !state.restart, totalTime: action.payload };
        default:
            return state;
    }
}

function GameArea({ difficulty, setDifficulty, setScore, handleFinish }) {
    const [timerState, dispatch] = useReducer(reducer, initialState);
    const onComplete = (word) => {
        setScore((prev) => prev + timerState.totalTime);
        setDifficulty((prev) => prev + DIFFICULTY_INCREMENT_FACTOR);
        dispatch({type:'restart', payload: getTotalTime(difficulty, word.length) });
    }
    const {word, text, setText} = useWord(difficulty,onComplete)

    useEffect(()=>{
    if(!!text && !timerState.start){
        dispatch({type:'start', payload: getTotalTime(difficulty, word.length)});
        }
    },[text, word, timerState.start, difficulty])
    
    return (
        <div className="GameArea">
            <Timer
                onFinish={handleFinish}
                timerControl={timerState}
            />
            <WordDisplay word={word} typedText={text} />
            <TextBox text={text} setText={setText} textAlign="center" />
        </div>
    );
}
export default GameArea