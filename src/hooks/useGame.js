import { useEffect, useCallback, useReducer } from "react";
import { getTotalTime } from "../utils/time";
import useWord from "./useWord";
import useTimer from "./useTimer";
import { DIFFICULTY_INCREMENT_FACTOR } from "../utils/constants";
import { getDifficulty } from "../utils/difficulty";

function reducer(state, { type, payload: { initialDifficulty, wordLength } }) {
  switch (type) {
    case "game/success":
      return {
        ...state,
        difficulty: state.difficulty + DIFFICULTY_INCREMENT_FACTOR,
        score: state.score + getTotalTime(state.difficulty, wordLength),
      };
    case "game/start":
      return {
        ...state,
        difficulty: initialDifficulty,
        score: 0,
        gameState: "running",
      };
    case "game/stop":
      return { ...state, difficulty: initialDifficulty, gameState: "stopped" };
    case "game/pause":
      return { ...state, gameState: "paused" };
    case "game/restart":
      return {
        ...state,
        difficulty: initialDifficulty,
        score: 0,
        gameState: "running",
      };
    default:
      return state;
  }
}

function useGame(initialDifficulty) {
  const [{ gameState, difficulty, score }, dispatch] = useReducer(reducer, {
    difficulty: initialDifficulty,
    score: 0,
    gameState: "running",
  });

  const { word, text, setText } = useWord(
    getDifficulty(difficulty),
    // eslint-disable-next-line no-use-before-define
    onSuccesfulEntry
  );

  const { time, setStart, setRestart } = useTimer(
    getTotalTime(difficulty, word.length),
    // eslint-disable-next-line no-use-before-define
    stopGame
  );
  const onSuccesfulEntry = useCallback((prev) => {
    dispatch({
      type: "game/success",
      payload: { wordLength: prev.length },
    });
    setRestart(true);
  }, [setRestart]);

  const stopGame = useCallback(() => {
    dispatch({ type: "game/stop", payload: { initialDifficulty } });
    setText("");
  }, [initialDifficulty, setText]);
  const restartGame = useCallback(() => {
    dispatch({ type: "game/restart", payload: { initialDifficulty } });
    setStart(false);
  }, [initialDifficulty, setStart]);

  const pauseGame = useCallback(() => {
    setStart(false);
    dispatch({ type: "game/pause", payload: {} });
  }, [setStart]);

  const quitGame = useCallback(() => {
    //Future Logic Implementation for Quit Directly
  }, []);

  useEffect(() => {
    if (text !== "") setStart(true);
  }, [setStart, text]);

  return {
    gameControl: {
      gameState,
      pauseGame,
      restartGame,
      quitGame,
      stopGame,
    },
    textControl: {
      word,
      text,
      setText,
    },
    timeControl: {
      time,
      totalTime: getTotalTime(difficulty, word.length),
    },
    score,
    difficulty,
  };
}

export default useGame;
