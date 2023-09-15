import NumberButton from "./number-button.component";
import Display from "./display.component";
import DecimalButton from "./decimal-button.component";
import { useCalculator } from "../context/Context";
import BackButton from "./back-button.component";

const Calculator = () => {
  const context = useCalculator();
  return (
    <div className="App">
      <h1>Calculator</h1>
      <Display />
      <div className="buttons-container">
        <div className="row">
          <BackButton symbol={"←"} type="back" context={context} />
        </div>
        <div className="row">
          <NumberButton digit={7} type="number" />
          <NumberButton digit={8} type="number" />
          <NumberButton digit={9} type="number" />
        </div>
        <div className="row">
          <NumberButton digit={4} type="number" />
          <NumberButton digit={5} type="number" />
          <NumberButton digit={6} type="number" />
        </div>
        <div className="row">
          <NumberButton digit={1} type="number" />
          <NumberButton digit={2} type="number" />
          <NumberButton digit={3} type="number" />
        </div>
        <div className="row">
          <NumberButton digit={0} type="number" />
          <DecimalButton symbol={"."} type="decimal" context={context} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
