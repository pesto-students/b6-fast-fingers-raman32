import React from 'react'
import './index.css'
import keyboardIcon from '../../assets/icons/keyboard-icon.svg'
function Logo(){
return (
    <div className="Logo">
            <img className="keyboardLogo" src={keyboardIcon} alt="logo" />
            <div className="logoTitle"> fast finger</div>
            <div className="logoDescription">____________the ultimate typing game___________</div>
    </div>
);
}                           
export default Logo