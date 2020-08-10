import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Hook1 from "./hook1.js";
import Hook2 from "./hook2.js";
import Hook3 from "./hook3.js";
import Hook4 from "./hook4.js";
import Hook5 from "./hook5.js";

const App = () => {
  return (
    <div className="App">
      <Hook1 />
      <Hook2 />
      <Hook3 />
      <Hook4 />
      <Hook5 />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
