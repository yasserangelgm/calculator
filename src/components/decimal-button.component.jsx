import { handleDecimalClick } from "../utils/clickHandlers";
import Button from "./button.component";

const DecimalButton = ({ symbol, type, context }) => {
  return (
    <Button
      symbol={symbol}
      type={type}
      clickHandler={() => handleDecimalClick(context)}
      context={context}
    ></Button>
  );
};

export default DecimalButton;
