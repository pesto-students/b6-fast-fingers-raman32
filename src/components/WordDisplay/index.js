import React from 'react'
import './index.css'
function WordDisplay({word,typedText}){
const wordsInsideDiv = word.split('').map((letter,index)=><div className= {typedText && typedText[index] ? letter===typedText[index] ? "correct" : "incorrect" :""}> {letter}</div>)
return (
    <div className="wordDisplay">
        {wordsInsideDiv}
    </div>
);
}                           
export default WordDisplay