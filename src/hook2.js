import React, { useState, useEffect } from "react";
import "./styles.css";

export default function Hook2() {
  const [item, setItem] = useState(2);
  const sayHello = () => console.log("hello");
  // useEffect(() => {
  //   sayHello();
  // });
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  useEffect(sayHello, []);
  return (
    <div className="App">
      <h1>Hello Effect Hook {item}</h1>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
}
