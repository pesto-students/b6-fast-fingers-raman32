import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {routes } from '../../utils/constants'
import './index.css'
import TextBox from '../../components/TextBox'
import DropDownList from '../../components/DropDownList'
import keyboardIcon from '../../assets/icons/keyboard-icon.svg'
import playIcon from '../../assets/icons/play-icon.svg'
import Button from '../../components/Button'
import {difficulties} from '../../utils/difficulty'
function Entry(){
const [playerName,setPlayerName] =useState('');
const [difficulty, setDifficulty] = useState(1);
return (
    <div className="Entry">
       <img className="keyboardLogo" src={keyboardIcon} alt="logo" />   
       <div className="logoTitle"> fast finger</div>
       <div className="logoDescription">____________the ultimate typing game___________</div>
        <TextBox text={playerName} setText={setPlayerName} placeholder="Type your name"/>
        <DropDownList items={difficulties} setItem={setDifficulty} placeholder="Difficulty Level"/>
        <Link to={`${routes.game}/${playerName}/${difficulty}`} >
            <Button icon={playIcon} text="Start Game" />
        </Link>
    </div>
);
}                           
export default Entry