import React from "react";
import "./style.css";
import { arc } from "d3";
import {Face} from "./component/Face"

console.log(arc);




const width = 200;
const height = 200;

// Method chaining - set multiple chain

    {/*
const noseArc = arc()
  .innerRadius(0)
  .outerRadius(40)
  .startAngle(0)
  .endAngle(Math.PI / 2);
*/}



const App = () => (
  <>
  <Face 
width = {width}
height = {height}
 centerX ={width / 2}
 centerY = {height / 2}
strokeWidth = {10}
eyeOffsetX = {30}
eyeOffsetY = {30}
eyeRadius = {10}
mouthWidth = {5}
 mouthRadius = {40}
 />
  <Face 
width = {width}
height = {height}
 centerX ={width / 2}
 centerY = {height / 2}
strokeWidth = {5}
eyeOffsetX = {90}
eyeOffsetY = {110}
eyeRadius = {25}
mouthWidth = {15}
 mouthRadius = {130}
 />
 </>
);

export default App;