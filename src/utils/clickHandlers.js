export function handleDigitClick(digit, context) {
  // Lógica para manejar el clic en un número
  const { displayValue, setDisplayValue } = context;

  if (displayValue === "0") {
    setDisplayValue(digit.toString());
  } else {
    setDisplayValue(displayValue + digit.toString());
  }
}

export function handleOperatorClick(operator) {
  // Lógica para manejar el clic en un operador
}

export function handleDecimalClick(context) {
  const { displayValue, setDisplayValue } = context;
  // Lógica para manejar el clic en el punto decimal
  if (!displayValue.includes(".")) {
    setDisplayValue(displayValue + ".");
  }
}

export function handleBackClick(context) {
  // Lógica para manejar el clic en un operador
  const { displayValue, setDisplayValue } = context;
  if (displayValue !== "0") {
    if (displayValue.length !== 1) {
      setDisplayValue(displayValue.slice(0, -1));
    } else {
      setDisplayValue("0");
    }
  }
}
