import {  useContext} from "react";
import { digitContext } from "../context/digitContext";


const Display = (props)=>{
    const {displayDigit} = useContext(digitContext);


return(
    <label>{displayDigit}</label>
)
}

export default Display;