import React, { useState, useEffect, useRef, useCallback } from "react";
import "./styles.css";
import useAxios from "./useAxios";

export default function Hook8() {
  const { loading, data, error, refetch } = useAxios({
    url:
      "https://cors-anywhere.herokuapp.com/https://yts.am/api/v2/list_movies.json"
  });
  // console.log(
  //   `Loading:${loading}\nError:${error}\nData:${JSON.stringify(data)}`
  // );
  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"} </h2>
      <h2>{error} </h2>
      <button onClick={refetch}>refetch</button>
    </div>
  );
}
