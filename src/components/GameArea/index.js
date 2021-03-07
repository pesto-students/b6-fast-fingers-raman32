import React from 'react';
import './index.css'
import Timer from './Timer'
import WordDisplay from './WordDisplay'
import TextBox from './TextBox'

function GameArea({textControl: {word,text,setText}, timeControl}) {    
    return (
        <div className="GameArea">
            <Timer {...timeControl}/>
            <WordDisplay word={word} typedText={text} />
            <TextBox text={text} setText={setText} textAlign="center" />
        </div>
    );
}
export default GameArea