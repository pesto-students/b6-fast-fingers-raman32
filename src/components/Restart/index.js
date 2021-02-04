import React from 'react'
import './index.css'
import reloadIcon from '../../assets/icons/reload-icon.svg'
function Restart({setRestart}){
return <>
    <div className="Restart" onClick={()=>{
        setRestart(true);
    }}>
    <img src={reloadIcon} className="reloadIcon" alt="Restart game" />
    <div>Restart</div>
    </div>
</>
}
export default Restart