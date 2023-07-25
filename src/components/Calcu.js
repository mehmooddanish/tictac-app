import React, { useState } from "react";

const Calcu = () => {
  const [input, setInput] = useState(0);
  const [firstInput, setFirstInput] = useState("");
  const [operator, setOperator] = useState();
  const [secondInput, setSecondInput] = useState("");

  const handleValue = (value) => {
    if (operator) {
      if (input === 0) {
        setInput(value);
        setSecondInput(value);
      } else {
        setInput((preState) => preState + value);
        setSecondInput((preState) => preState + value);
      }
    } else {
      if (input === 0) {
        setInput(value);
        setFirstInput(value);
      } else {
        setInput(input + value);
        setFirstInput(firstInput + value);
      }
    }
  };

  const handleOperator = (oper) => {
    if (firstInput) {
      setOperator(oper);
      setInput(0);
    }
  };

  const handleClear = () => {
    setInput("");
    setFirstInput("");
    setSecondInput("");
    setOperator("");
  };

  const total = () => {
    const num1 = parseInt(firstInput);

    const num2 = parseInt(secondInput);

    switch (operator) {
      case "+":
        setInput(num1 + num2);
        break;

      case "-":
        setInput(num1 - num2);

        break;
      case "*":
        setInput(num1 * num2);

        break;
      case "/":
        setInput(num1 / num2);

        break;
      default:
        break;
    }

    if (input !== 0) {
      setTimeout(() => {
        setInput(0);
      }, 2000);
    }
  };



  // const handleTotal = (first, oper, secnd) => {
  //   if (oper === "+") {
  //     return first + secnd;
  //   } else if (oper === "-") {
  //     return first - secnd;
  //   } else if (oper === "*") {
  //     return first * secnd;
  //   } else {
  //     return first / secnd;
  //   }
  // };

  return (
    <div className="">
      <div className="w-full max-w-[400px] mx-auto flex flex-col gap-2 justify-center">
        <h2 className="text-center">Simple Calculator</h2>
        {/* <input
          type="text"
          value={input}
          className="input border-2 border-gray-400 max-w-[300px] mx-auto text-right px-1"
       
        /> */}  
        <div className="p-0.5 rounded-full w-full max-w-[300px] bg-gray-600 mx-auto active:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
 
  <input className="p-1 px-2 h-full w-full text-right rounded-full outline-none" type="text" id="name" readOnly value={input}/>
</div>
        <div className="w-full grid grid-cols-4 gap-2">
          <button onClick={() => handleValue("1")}>1</button>
          <button onClick={() => handleValue("2")}>2</button>
          <button onClick={() => handleValue("3")}>3</button>
          <button onClick={() => handleOperator("+")}>+</button>

          <button onClick={() => handleValue("4")}>4</button>
          <button onClick={() => handleValue("5")}>5</button>
          <button onClick={() => handleValue("6")}>6</button>
          <button onClick={() => handleOperator("-")}>-</button>

          <button onClick={() => handleValue("7")}>7</button>
          <button onClick={() => handleValue("8")}>8</button>
          <button onClick={() => handleValue("9")}>9</button>
          <button onClick={() => handleOperator("*")}>*</button>

          <button onClick={() => handleValue("0")}>0</button>
          <button>.</button>
          <button onClick={handleClear}>C</button>
          <button onClick={() => handleOperator("/")}>/</button>

          <button onClick={total}>=</button>
   
        </div>
      </div>
    </div>
  );
};

export default Calcu;
