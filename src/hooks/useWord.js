import { useEffect, useState } from "react"

import getRandomizedWord from '../utils/getWord'
import { getDifficulty } from '../utils/difficulty'

function useWord(difficulty, onComplete) {
    const [word, setWord] = useState(getRandomizedWord(getDifficulty(difficulty)));
    const [text, setText] = useState('');
    useEffect(() => {
        if (word !== '' && word === text) {
            const newWord = getRandomizedWord(getDifficulty(difficulty));
            setWord(newWord);
            onComplete(newWord);
            setText('');
        }
    }, [text, word, difficulty, onComplete])
    return { word, text, setText }
}
export default useWord;