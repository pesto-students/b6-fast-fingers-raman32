import React, { useState } from 'react'
import DropDownOption from '../DropDownOption';
import './index.css'
function DropDownList({ items, setItem, placeholder }) {
    const [selected,setSelected] = useState('');
    const options = items.map((item) => <DropDownOption item={item} onSelect={()=>{setSelected(item.label); setItem(item.value);}} />);
    return ( 
        <div className="dropdown">
            <div className="options">{!selected ? placeholder : selected}</div>
            <div className="dropdown-content" >
                {options}
            </div>
        </div>
    );
}
export default DropDownList