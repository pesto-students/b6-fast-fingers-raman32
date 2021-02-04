import React from 'react'
import './index.css'
import TextBox from '../../components/TextBox'
import DropDownList from '../../components/DropDownList'
import StartGame from '../../components/StartGame'
import keyboardIcon from '../../assets/icons/keyboard-icon.svg'
function Entry(props){
const {playerName, setPlayerName, setDifficulty, setPage } =  props;
const items =  [{label:"Easy", value:1},
{label:"Medium", value:2},
{label:"Hard", value:3}]
                
return (
    <div className="Entry">
       <img className="keyboardLogo" src={keyboardIcon} alt="logo" />   
       <div className="logoTitle"> fast finger</div>
       <div className="logoDescription">____________the ultimate typing game___________</div>
        <TextBox text={playerName} setText={setPlayerName} placeholder="Type your name"/>
        <DropDownList items={items} setItem={setDifficulty} placeholder="Difficulty Level"/>
        <StartGame setPage={setPage} />
    </div>
);
}                           
export default Entry