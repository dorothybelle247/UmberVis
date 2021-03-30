import React from "react";
import "./style.css";

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height/2;
const strokeWidth = 30;

export default function App() {
  return (
    <div>
       <svg width={width} height={height}>
        <circle cx={centerX} cy={centerY} r="200" fill="pink" stroke="black" stroke-width={strokeWidth}></circle>

        <circle cx="330" cy="180" r={centerY -strokeWidth / 2} fill="black" stroke="black" stroke-width="8"></circle>

        <circle cx="480" cy="250" r="200" fill="pink" stroke="black" stroke-width="8"></circle>
    </svg>
    </div>
  );
}
