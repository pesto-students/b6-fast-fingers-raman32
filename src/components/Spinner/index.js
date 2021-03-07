import React from 'react'
import './index.css'
function Spinner({size="2rem", show=true}) {
    return (
        <span className={show? "loading": ""} style={{height:size, width:size}}>          
        </span>
    )
}

export default Spinner
