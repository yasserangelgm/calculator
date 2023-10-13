import React from "react";
import Button from "../buttons/Button";
import Display from "../display/Display";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Calculator = () => {
  const displayValue = useSelector((state) => state.calculator.displayValue);
  const editNumber = useSelector((state) => state.calculator.editNumber);
  const operation = useSelector((state) => state.calculator.operation);
  return (
    <>
      <div className="calculator-grid">
        <div className="div1">
          <Display />
        </div>
        <div className="div2">
          <Button type="back" text="←" />
        </div>
        <div className="div3">
          <Button type="CE" text="CE" />
        </div>
        <div className="div4">
          <Button type="C" text="C" />
        </div>
        <div className="div5">
          <Button type="plusminus" text="&#177;" />
        </div>
        <div className="div6">
          <Button type="radix" text="&#8730;" />
        </div>
        <div className="div7">
          <Button type="digit" text="7" />
        </div>
        <div className="div8">
          <Button type="digit" text="8" />
        </div>
        <div className="div9">
          <Button type="digit" text="9" />
        </div>
        <div className="div10">
          <Button type="operator" text="/" />
        </div>
        <div className="div11">
          <Button type="operator" text="%" />
        </div>
        <div className="div12">
          <Button type="digit" text="4" />
        </div>
        <div className="div13">
          <Button type="digit" text="5" />
        </div>
        <div className="div14">
          <Button type="digit" text="6" />
        </div>
        <div className="div15">
          <Button type="operator" text="*" />
        </div>
        <div className="div16">
          <Button type="operator" text="1/x" />
        </div>
        <div className="div17">
          <Button type="digit" text="1" />
        </div>
        <div className="div18">
          <Button type="digit" text="2" />
        </div>
        <div className="div19">
          <Button type="digit" text="3" />
        </div>
        <div className="div20">
          <Button type="operator" text="-" />
        </div>
        <div className="div21">
          <Button type="equal" text="=" />
        </div>
        <div className="div22">
          <Button type="digit" text="0" />
        </div>
        <div className="div23">
          <Button type="decimal" text="." />
        </div>
        <div className="div24">
          <Button type="operator" text="+" />
        </div>
      </div>
      <div>
        <p>{`Display Value: ${displayValue}`}</p>
        <p>{`Edit Number: ${editNumber}`}</p>
        <p>{`Primer Operador: ${operation.firstOperand}`}</p>
        <p>{`Operador: ${operation.operator}`}</p>
        <p>{`Segundo Operador: ${operation.secondOperand}`}</p>
        <p>{`Resultado: ${operation.result}`}</p>
      </div>
    </>
  );
};

export default Calculator;
