import React from "react";
import "/src/index.css"

function Input_field(props){
    return (
        <div className="input_box">
            <input type="text" className="text" placeholder="Enter the item" onChange={props.update_item}/>
            <button className="btn" onClick={props.add}>Add</button>
        </div> 
    );
} 

export {Input_field}; 