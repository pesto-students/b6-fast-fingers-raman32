import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../utils/constants'
import './index.css'
import TextBox from '../../components/TextBox'
import DropDownList from '../../components/DropDownList'
import keyboardIcon from '../../assets/icons/keyboard-icon.svg'
import playIcon from '../../assets/icons/play-icon.svg'
import Button from '../../components/Button'
import { difficulties } from '../../utils/difficulty'
import useName from '../../hooks/useName'

function Entry() {
    const { name, setName, emptyError, setEmptyShowError } = useName('');
    const [difficulty, setDifficulty] = useState(1);


    return (
        <div className="Entry">
            <img className="keyboardLogo" src={keyboardIcon} alt="logo" />
            <div className="logoTitle"> fast finger</div>
            <div className="logoDescription">____________the ultimate typing game___________</div>
            <TextBox text={name} setText={setName} placeholder="Type your name" isError={emptyError} />
            {emptyError ? <div className="errorText"> Please Enter your Name </div> : null}
            <DropDownList items={difficulties} setItem={setDifficulty} placeholder="Difficulty Level" />
            <Link to={name !== '' ? `${routes.game}/${name}/${difficulty}` : "#"} onClick={() => !name && setEmptyShowError(true)} >
                <Button icon={playIcon} text="Start Game" />
            </Link>
        </div>  
    );
}
export default Entry