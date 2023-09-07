import Button from "./button.component";
import Display from "./display.component";
import { useContext } from "react";
import { digitContext } from "../context/digitContext";

const Calculator = ()=>{
    const {displayDigit} = useContext(digitContext);
    return(
        <div className="App">
            <h1>Calculator</h1>
            <Display />
            <div className="buttons-container">
                <div className="row">
                    <Button string="7" />
                    <Button string="8" />
                    <Button string="9" />
                </div>
                <div className="row">
                    <Button string="4" />
                    <Button string="5" />
                    <Button string="6" />
                </div>
                <div className="row">
                    <Button string="1" />
                    <Button string="2" />
                    <Button string="3" />
                </div>
            </div>
    </div>
    )
}

export default Calculator;