import React from "react";
import "./style.css";
import {arc} from "d3";

console.log(arc)

const width = 920;
const height = 460;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 15;
const eyeOffsetX = 90;
const eyeOffsetY = 110;
const eyeRadius = 25;
const mouthWidth = 15;
const mouthRadius = 130;
// Method chaining - set multiple chain


const noseArc = arc()
    .innerRadius(0)
    .outerRadius(40)
    .startAngle(0)
    .endAngle(Math.PI / 2);

const mouthArc = arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius + mouthWidth)
    .startAngle(Math.PI /2)
    .endAngle(Math.PI * 3/2);
  
const App = () => 
 (
    <div>
      <svg width={width} height={height}>
       <g transform={`translate(${centerX}, ${centerY}) rotate(9)`}>
        <circle
          r={centerY - strokeWidth / 2}
          fill="#F7C1B4"
          stroke="black"
          stroke-width={strokeWidth}
        />

        <circle
          cx={-eyeOffsetX}
          cy={-eyeOffsetY}
          r={eyeRadius}
          fill="black"
          // stroke="black"
          // stroke-width="8"
        />

        <circle
          cx={eyeOffsetX}
          cy={- eyeOffsetY}
          r={eyeRadius}
          // fill="black"
          // stroke="black"
          // stroke-width="8"
        />
        <path d={noseArc()}/>
        <path d={mouthArc()}/>
        </g>
      </svg>
    </div>
  );


export default App;
