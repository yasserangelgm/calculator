import "./App.css";
import Calculator from "./components/calculator.component";
import { CalculatorProvider } from "./context/Context";

function App() {
  return (
    <>
      <CalculatorProvider>
        <Calculator />
      </CalculatorProvider>
    </>
  );
}

export default App;
