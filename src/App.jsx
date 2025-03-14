import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState(""); // Almacena el valor de la pantalla

  // Función para manejar los clics de los botones
  const handleClick = (value) => {
    setInput(input + value);
  };

  // Función para manejar la operación de evaluación de la expresión
  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString()); // Evalúa la expresión y convierte el resultado a string
    } catch (error) {
      setInput("Error"); // En caso de error, muestra "Error"
    }
  };

  // Función para borrar la pantalla
  const handleClear = () => {
    setInput(""); // Resetea el valor de la pantalla
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
      </div>
      <div className="buttons">
        <button onClick={() => handleClick("1a")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("")}></button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={handleEvaluate}>=</button>
        <button onClick={handleClear}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
