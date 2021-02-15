import React, { useEffect, useReducer, useState } from 'react';
import './index.css'

import getRandomizedWord from '../../utils/getWord'

import Timer from '../../components/Timer'
import WordDisplay from '../../components/WordDisplay'
import TextBox from '../../components/TextBox'
import { getDifficulty } from '../../utils/difficulty';
import { getTotalTime } from '../../utils/time';

const initialState = { start: false, restart: false };

function reducer(state, action) {
    switch (action.type) {
        case 'start':
            return { start: true, restart: false }
        case 'restart':
            return { ...state, restart: !state.restart };
        default:
            return state;
    }
}


function GameArea({ difficulty, setDifficulty, setScore, handleFinish }) {
    const [word, setWord] = useState(getRandomizedWord(getDifficulty(difficulty)));
    const [text, setText] = useState();
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if(!!text)
            dispatch({type:'start'});
        if (word !== '' && word === text) {
            setScore((prev) => prev + getTotalTime(difficulty, word.length));
            setDifficulty((prev) => parseFloat(prev) + 0.01);
            setWord(getRandomizedWord(getDifficulty(difficulty)));
            setText('');
            dispatch({type:'restart'});
        }
    }, [text, word, difficulty, setScore, setDifficulty])
    return (
        <div className="GameArea">
            <Timer
                totalTime={getTotalTime(difficulty, word.length)}
                onFinish={handleFinish}
                timerControl={state}
            />
            <WordDisplay word={word} typedText={text} />
            <TextBox text={text} setText={setText} textAlign="center" />
        </div>
    );
}
export default GameArea