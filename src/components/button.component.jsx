import { useContext, useEffect } from "react";
import { digitContext } from "../context/digitContext";

const Button = (props)=>{
    const {setDisplayDigit} = useContext(digitContext);
    
    const handleClick=(event) =>{
        const value=parseInt(event.target.innerHTML);
        setDisplayDigit(value);
    }

    return(
        <button type="button" onClick={handleClick}>{props.string}</button>
    )
}

export default Button;