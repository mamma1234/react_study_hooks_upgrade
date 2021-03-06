import React, { useState, useEffect, useRef, useCallback } from "react";
import "./styles.css";

const useNotification = (title, options) => {
  // console.log("call useNotification");
  if (!("Notification" in window)) {
    console.log("is");
    return;
  }
  // console.log("useNotification");
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };

  return fireNotif;
};

export default function Hook7() {
  const triggerNotif = useNotification("Can I steal your kimchi ?", {
    body: "i love kimchi"
  });

  return (
    <div className="App">
      <button onClick={triggerNotif}>hello</button>
    </div>
  );
}
