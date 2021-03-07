import React, { useContext, useMemo } from "react";
import useFetchPost from "../../hooks/useFetchPost";
import { USER_ADD_SCORE_API_ENDPOINT } from "../../utils/constants";
import { convertToMinutesAndSeconds } from "../../utils/time";
import "./index.css";
function EndScoreCard({ score, isHighScore }) {
  const fetchBody = useMemo(()=>score!==0 ? {score} : null,[score]);
  useFetchPost(USER_ADD_SCORE_API_ENDPOINT,fetchBody,true);
  return (
    <div className="EndScoreCard">
      <div>Your Score</div>
      <div>{convertToMinutesAndSeconds(score)}</div>
      <div>{isHighScore ? "New High Score" : ""}</div>
    </div>
  );
}
export default React.memo(EndScoreCard);
