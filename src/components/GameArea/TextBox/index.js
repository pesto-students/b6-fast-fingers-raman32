import React from 'react'
import './index.css'
function TextBox({text, setText, isError=false, placeholder= '', textAlign='left'}){
return (
    <div className="textBoxContainer">
        <input 
            autoFocus 
            className={isError ? "textBox error" : "textBox"} 
            style={{textAlign:textAlign}}
            type="text"     
            placeholder={placeholder} 
            value={text} 
            onChange={({target:{value}})=>setText(value.toLowerCase())} 
        />
    </div>
);
}                           
export default TextBox