import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { routes } from "../../utils/constants";
import "./index.css";

import DropDownList from "../../components/DropDownList";
import Button from "../../components/Button";
import Logo from "../../components/Logo";

import playIcon from "../../assets/icons/play-icon.svg";

import { difficulties } from "../../utils/difficulty";
import { UserContext } from "../../App";

function Entry() {
  const { user,setUser } = useContext(UserContext);
  const [difficulty, setDifficulty] = useState(1);
  const history = useHistory();
  if (!user.loggedIn) {
    history.push(routes.login);
  }

  return (
    <div className="Entry">
      <Logo />
      <div className="welcomeText"> Welcome!!! {user.name} </div>
      <DropDownList
        items={difficulties}
        setItem={setDifficulty}
        placeholder="Difficulty Level"
      />
      <Link to={`${routes.game}/${difficulty}`}>
        <Button icon={playIcon} text="Start Game" />
      </Link>

      <button onClick={()=>setUser({})} > Logout </button>
    </div>
  );
}
export default Entry;
