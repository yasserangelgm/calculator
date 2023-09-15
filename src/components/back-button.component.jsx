import { handleBackClick } from "../utils/clickHandlers";
import Button from "./button.component";

const BackButton = ({ symbol, type, context }) => {
  return (
    <Button
      symbol={symbol}
      type={type}
      clickHandler={() => handleBackClick(context)}
    ></Button>
  );
};

export default BackButton;
