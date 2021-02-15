import { useEffect, useRef, useState } from "react"

function useTimer(value, interval = 100){
const [time, setTime] = useState(value);
let timer = useRef(null);
useEffect(()=>{
 timer.current = setInterval(()=>setTime((prev) => prev > 0 ? prev-interval : 0) ,interval);
 return ()=> clearInterval(timer.current);  
},[interval])
return time;
}
export default useTimer