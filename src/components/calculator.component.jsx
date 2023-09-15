import Display from "../features/display/display.component";
import DigitButton from "../features/Buttons/digit-button.component";
import DecimalButton from "../features/Buttons/decimal-button.component";
import BackButton from "../features/Buttons/back-button.component";
const Calculator = () => {
  return (
    <div className="App">
      <Display />
      <div className="row">
        <DigitButton digit={7} />
        <DigitButton digit={8} />
        <DigitButton digit={9} />
        <BackButton />
      </div>
      <div className="row">
        <DigitButton digit={4} />
        <DigitButton digit={5} />
        <DigitButton digit={6} />
      </div>
      <div className="row">
        <DigitButton digit={1} />
        <DigitButton digit={2} />
        <DigitButton digit={3} />
      </div>
      <div className="row">
        <DigitButton digit={0} />
        <DecimalButton />
      </div>
    </div>
  );
};

export default Calculator;
