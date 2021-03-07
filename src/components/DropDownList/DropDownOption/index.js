import React from 'react'
import './index.css'
function DropDownOption({ item , onSelect}) {
  return <div 
            className="options" 
            key={item.label}
            onClick={() => onSelect()}
        >
                {item.label}
        </div>
}
export default DropDownOption