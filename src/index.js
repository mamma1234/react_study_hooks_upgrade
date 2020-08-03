import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Hook1 from "./hook1.js";
import Hook2 from "./hook2.js";

const App = () => {
  return (
    <div className="App">
      <Hook1 />
      <Hook2 />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
