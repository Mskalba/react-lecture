import React from "react";

function Button(props) {
    let {text, handleChange} = props;
    return (
        <div>
            <button className="btn btn-secondary" onClick={handleChange} type={props.type || 'button'}>{text}</button>
        </div>
        
    )
    
}

export default Button;