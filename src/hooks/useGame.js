import { useEffect, useCallback, useReducer } from 'react'
import { getTotalTime } from '../utils/time';
import useWord from './useWord'
import useTimer from './useTimer'
import { DIFFICULTY_INCREMENT_FACTOR } from '../utils/constants';
import { addScoreToLocalStorage } from '../utils/storage';
import { getDifficulty } from '../utils/difficulty';
import getRandomizedWord from '../utils/getWord';

function reducer(state, { type, payload: { initialDifficulty, wordLength } }) {
    switch (type) {
        case "game/success":
            return { ...state,  difficulty: state.difficulty + DIFFICULTY_INCREMENT_FACTOR, score: state.score + getTotalTime(state.difficulty, wordLength) };
        case "game/start":
            return { ...state, difficulty: initialDifficulty, score: 0, gameState: "running" };
        case "game/stop":
            return { ...state, difficulty: initialDifficulty, gameState: "stopped" };
        case "game/pause":
            return { ...state, gameState: "paused" };
        case "game/restart":
            return { ...state, difficulty: initialDifficulty, score: 0, gameState: "running" };

        default:
            return state;
    }
}

function useGame(initialDifficulty) {
    const [{ gameState, difficulty, score }, dispatch] = useReducer(reducer, { difficulty: initialDifficulty, score: 0, gameState: "running" });
    
    const onSuccesfulEntry = (prev) => {
        dispatch({ type: "game/success", payload: { initialDifficulty, wordLength: prev.length } });
        setRestart(true);
    }
    const { word, text, setText } = useWord(getRandomizedWord(getDifficulty(difficulty)), onSuccesfulEntry);
    const { time, setStart, setRestart } = useTimer(getTotalTime(difficulty, word.length));


    const restartGame = () => {
        dispatch({ type: "game/restart", payload: { initialDifficulty} })
        setStart(false);
    }

    const pauseGame = () => {
        setStart(false);
        dispatch({type: "game/pause", payload: {}});
    }

    const quitGame = () => {
        //Future Logic Implementation for Quit Directly
    }

    const stopGame = useCallback(() => {
        dispatch({ type: "game/stop", payload: { initialDifficulty} })
        setStart(false);
        setRestart(true);
        setText('');
        if (score !== 0)
            addScoreToLocalStorage(score);
    }, [initialDifficulty, score, setRestart, setStart, setText]);

    useEffect(() => {
        if (time <= 0)
            stopGame();
    }, [time, stopGame])

    useEffect(() => {
        // Starts the timer to start at first text entry
        if (text !== '') {
            setStart(true)
        }
    }, [setStart, text])
    return {
        gameControl: {
            gameState,
            pauseGame,
            restartGame,
            quitGame,
            stopGame
        },
        textControl: {
            word,
            text,
            setText
        },
        timeControl: {
            time,
            totalTime: getTotalTime(difficulty, word.length),
        },
        score,
        difficulty
    }
}

export default useGame
