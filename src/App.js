import React from "react";
import "./style.css";
import { arc } from "d3";
import {Face} from "./component/Face"

console.log(arc);




const width = 920;
const height = 460;

// Method chaining - set multiple chain

    {/*
const noseArc = arc()
  .innerRadius(0)
  .outerRadius(40)
  .startAngle(0)
  .endAngle(Math.PI / 2);
*/}



const App = () => (
  <Face 
width = {width}
height = {height}
 centerX ={width / 2}
 centerY = {height / 2}
strokeWidth = {15}
eyeOffsetX = {90}
eyeOffsetY = {110}
eyeRadius = {25}
mouthWidth = {15}
 mouthRadius = {130}
 />
);

export default App;