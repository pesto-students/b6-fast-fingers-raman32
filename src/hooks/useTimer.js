import { useEffect, useRef, useState } from "react"

function useTimer(value, onSuccesfulEntry) {
    const [time, setTime] = useState(value);
    const [start, setStart] = useState(false);
    const [restart, setRestart] = useState(false);
    let timer = useRef(null);
    useEffect(() => {
        timer.current = start ? setInterval(() => setTime((prev) => prev - 1), 10) : null;
        return () => clearInterval(timer.current);
    }, [start])
    useEffect(() => {
        if (time <= 0) {
            clearInterval(timer.current);
            setStart(false);
        }
    }, [time])
    useEffect(() => {
        if (restart){
            setTime(value);
        }
        setRestart(false);
    }, [restart, value])

    return {
        time,
        setStart,
        setRestart
    };
}
export default useTimer;