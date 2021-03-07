import React from 'react'
import './index.css'
function StrikeWrapper(props){
return (
    <div className="wrapperStyles">
        <div className= "strike"></div>
        <div>{props.children}</div>
        <div className= "strike"></div>
    </div>
);
}                           
export default StrikeWrapper