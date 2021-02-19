import React from 'react';
import './index.css'
import Timer from '../../components/Timer'
import WordDisplay from '../../components/WordDisplay'
import TextBox from '../../components/TextBox'

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