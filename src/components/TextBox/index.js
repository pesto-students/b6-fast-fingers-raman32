import React from 'react'
import './index.css'
function TextBox({text,setText,placeholder= ''}){
return (
    <div>
        <input autoFocus className="textBox" type="text" placeholder={placeholder} value={text} onChange={(event)=>setText(event.target.value)} />
    </div>
);
}                           
export default TextBox