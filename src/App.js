import React from "react";
import "./style.css";

const width = 960;
const height = 500;

export default function App() {
  return (
    <div>
       <svg width={width} height={height}>
        <circle cx="480" cy="250" r="200" fill="pink" stroke="black" stroke-width="8"></circle>

        <circle cx="330" cy="180" r="25" fill="black" stroke="black" stroke-width="8"></circle>

        <circle cx="480" cy="250" r="200" fill="pink" stroke="black" stroke-width="8"></circle>
    </svg>
    </div>
  );
}
