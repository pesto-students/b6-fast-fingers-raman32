import { useEffect, useState } from "react"

function useWord(val, onSuccesfulEntry) {
    const [word, setWord] = useState(val);
    const [text, setText] = useState('');
    useEffect(() => {
        if (word !== '' && word === text) {
            setText('');
            const prevVal = word;
            setWord(val);
            onSuccesfulEntry(prevVal);
        }
    }, [text, word, val, onSuccesfulEntry])
    return { word, text, setText}
}
export default useWord;