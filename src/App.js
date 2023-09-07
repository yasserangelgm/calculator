import { useState } from "react";
import "./App.css";
import Calculator from "./components/calculator.component";
import { digitContext } from "./context/digitContext";

function App() {
  const [displayDigit, setDisplayDigit] = useState("0");

  return (
    <>
      <digitContext.Provider value={{ displayDigit, setDisplayDigit }}>
        <Calculator />
      </digitContext.Provider>
    </>
  );
}

export default App;
