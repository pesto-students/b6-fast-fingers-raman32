import { useEffect, useRef, useState } from "react"

function useTimer(value,onTimerEnd) {
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
            setRestart(true)
            onTimerEnd();
        }
    }, [onTimerEnd, time])
    useEffect(() => {
        setTime(value);
        setRestart(false)   ;
    }, [restart, value])

    return {
        time,
        setStart,
        setRestart
    };
}
export default useTimer;