import React, { useState, useEffect } from "react";
import "./index.css";
function Input({ type, text, setText, placeholder = "", required = false, emptyErrorMessage="Required" }) {
 const [{start,empty},setTextState] = useState({start:false,empty:!text});
 useEffect(() => {
    if(!start&&!!text) setTextState((prev)=>({...prev,start:true,empty:false}))
    if(start&&!text) setTextState((prev)=>({...prev,empty:true}))
    if(start&&text) setTextState((prev)=>({...prev,empty:false}))
 }, [start, text])
  return (
    <div className="Input">
      <input
        type={type}
        value={text}
        onChange={({ target: { value } }) => setText(value)}
        required={required}
        placeholder={placeholder}
      />
      {required && start && empty ? <div className="errorText"> {emptyErrorMessage} </div>: null}
    </div>
  );
}
export default Input;
