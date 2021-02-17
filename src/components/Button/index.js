import React from 'react';
import './index.css'
function Button({ icon, text, onClick }) {
    return (
            <div className="Button" onClick={onClick}>
                {icon ? <img className="icon" src={icon} alt="icon" /> : null}
                <span>{text}</span>
            </div>
    );
}
export default Button;