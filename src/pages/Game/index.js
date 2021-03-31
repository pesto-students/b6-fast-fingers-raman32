import React, { useContext } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import "./index.css";

import Header from "../../components/Header";
import GameArea from "../../components/GameArea";
import ScoreBoard from "../../components/ScoreBoard";
import EndScoreCard from "../../components/EndScoreCard";
import Button from "../../components/Button";

import reloadIcon from "../../assets/icons/reload-icon.svg";
import crossIcon from "../../assets/icons/cross-icon.svg";

import { routes } from "../../utils/constants";

import useGame from "../../hooks/useGame";
import { UserContext } from "../../App";

function Game() {
  const { initialDifficulty } = useParams();
  const { user } = useContext(UserContext);
  const history = useHistory();
  if (!user.loggedIn) {
    history.push(routes.login);
  }

  const { gameControl, textControl, timeControl, score, difficulty } = useGame(
    Number(initialDifficulty)
  );

  return (
    <div className="Game">
      <Header difficulty={difficulty} score={score} />
      <div className="body">
        {gameControl.gameState === "running" ? (
          <>
            <ScoreBoard />
            <GameArea textControl={textControl} timeControl={timeControl} />
            <div style={{ flex: 1, flexShrink: 0.5 }}></div>
          </>
        ) : (
          <div>
            <EndScoreCard score={score} isHighScore={false} />
            <Button
              icon={reloadIcon}
              text="Restart"
              onClick={() => gameControl.restartGame()}
            />
          </div>
        )}
      </div>

      <div className="footer">
        {gameControl.gameState === "running" ? (
          <Button
            icon={crossIcon}
            text="Stop Game"
            onClick={() => gameControl.stopGame()}
          />
        ) : (
          <Link to={routes.entry}>
            <Button icon={crossIcon} text="Quit" />
          </Link>
        )}
      </div>
    </div>
  );
}
export default Game;
