import React, { useState, useEffect } from 'react'
import './index.css'
function ProgressCircle(props) {
    const {
        size = 120,
        progress = 0
    } = props;
    const [rotateStyle, setRotateStyle] = useState({});
    useEffect(() => {
        setRotateStyle({
            transform: `rotate(${(progress) * 360 / 100}deg)`,
        });
    }, [progress])
    const sizeStyle = { height: size, width: size};
    const clipStyle = { clip: `rect(0 ${size / 2}px ${size}px 0)`};
    return (
        <div className="container" style={sizeStyle}>
            <div className="background" style={sizeStyle} />
            <div className="rotate" style={{...sizeStyle,...clipStyle,...rotateStyle}} />
            <div className="left" style={{ ...sizeStyle,...clipStyle,opacity: progress >=50 ? 0  : 1 }} />
            <div className="right" style={{...sizeStyle, ...clipStyle,opacity: progress>=50 ? 1 : 0 }} />
            <div className="textContainer" style={sizeStyle}>
                <div>{props.children}</div> 
            </div>
        </div>
    );
}
export default ProgressCircle