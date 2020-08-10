import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const useFadeIn = (duration = 1, delay = 0) => {
  if (typeof duration != "number" || typeof delay != "number") {
    return;
  }
  const element = useRef();
  // console.log("element.current", element.current);
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      console.log("opacity");
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};

export default function Hook5() {
  // const [item, setItem] = useState(5);
  const handleNetworkChange = (online) => {
    console.log(online ? "web online" : "we offine");
  };
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div className="App">
      <h1>Hello Ref Hook {onLine ? "onLine" : "offline"} </h1>
    </div>
  );
}
