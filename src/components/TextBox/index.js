import React from 'react'
import './index.css'
function TextBox({text, setText, isError='false', placeholder= ''}){
return (
    <div>
        <input 
            autoFocus 
            className={isError ? "textBox error" : "textBox"} 
            type="text" 
            placeholder={placeholder} 
            value={text} 
            onChange={({target:{value}})=>setText(value.toLowerCase())} 
        />
    </div>
);
}                           
export default TextBox