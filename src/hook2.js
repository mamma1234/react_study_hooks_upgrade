import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const useTitle = initialTitle => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

const useClick = onClick => {
  if (typeof onClick !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        console.log("remove event");
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

export default function Hook2() {
  const [item, setItem] = useState(2);
  const sayHello = () => console.log("hello");

  // useEffect(() => {
  //   sayHello();
  // });
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  useEffect(sayHello, []);

  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000);

  const potato = useRef();
  setTimeout(() => potato.current.focus(), 5000);

  // const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1>Hello Effect Hook {item}</h1>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
      <input ref={potato} placeholder="la" />
      <h1 ref={title}>Hi</h1>
    </div>
  );
}
