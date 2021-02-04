import React from 'react'
import './index.css'
function Quit({onQuit}){
return <>
    <div className="Quit" onClick={onQuit}>
    Quit
    </div>
</>
}
export default Quit