import React from 'react'
import './index.css'
import keyboardIcon from '../../assets/icons/keyboard-icon.svg'
import StrikeWrapper from '../StrikeWrapper';
function Logo(){
return (
    <div className="Logo">
            <img className="keyboardLogo" src={keyboardIcon} alt="logo" />
            <div className="logoTitle"> fast finger</div>
            <StrikeWrapper>the ultimate typing game</StrikeWrapper>
    </div>
);
}                           
export default Logo