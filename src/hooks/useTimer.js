import { useEffect, useRef, useState } from "react"

function useTimer(value, interval = 10) {
    const [time, setTime] = useState(value);
    const [start, setStart] = useState(false);
    const [restart, setRestart] = useState(false);
    let timer = useRef(null);
    useEffect(() => {
        if(start)
        timer.current = setInterval(() => setTime((prev) => prev > 0 ? prev - interval : 0), interval);
        return () => clearInterval(timer.current);
    }, [interval,start])
    useEffect(() => {
        timer.current && clearInterval(timer.current);
        setRestart(false);
    },[restart])
    return {
        time,
        setStart,
        setRestart
    };
}
export default useTimer