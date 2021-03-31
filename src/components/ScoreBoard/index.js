import React from "react";
import "./index.css";
import ScoreCard from "./ScoreCard";
import Spinner from "../Spinner";
import useFetch from "../../hooks/useFetch";
import { GET_HIGH_SCORES_API_ENDPOINT } from "../../utils/constants";
function ScoreBoard() {
  const { fetching, data: scores } = useFetch(GET_HIGH_SCORES_API_ENDPOINT);
  return (
    <>
      <div className="ScoreBoard">
        <div className="scoreBoardHeader">HIGH SCORE BOARD</div>
        {fetching ? (
          <Spinner show={true} />
        ) : (
          <div className="scoresContainer">
            {scores &&
              scores.map((element, index, array) => (
                <ScoreCard
                  key ={index}
                  score={element.score}
                  playerName={element.name}
                  isHighScore={index === array.length-1 }
                />
              ))}
          </div>
        )}
      </div>
    </>
  );
}
export default React.memo(ScoreBoard);
