import React from "react";
import "./style.css";
import { arc } from "d3";
import {Face} from "./component/Face"
import {FaceContainer} from "./component/FaceContainer"
import { BackgroundCircle } from "./component/BackgroundCircle";
import {Eyes} from "./component/Eyes"
import {Mouth} from "./component/Mouth"

console.log(arc);


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

    {/*
const noseArc = arc()
  .innerRadius(0)
  .outerRadius(40)
  .startAngle(0)
  .endAngle(Math.PI / 2);
*/}

const Face = () => (
  <FaceContainer 
  width={width}
  height={height}
  centerX={centerX}
  centerY={centerY}>
    <BackgroundCircle 
    radius={centerY - strokeWidth / 2}
    strokeWidth={strokeWidth}
     />
    <Eyes 
    eyeOffsetX={eyeOffsetX}
    eyeOffsetY={eyeOffsetY}
    eyeRadius={eyeRadius}
    />
    <Mouth 
    mouthRadius={mouthRadius}
    mouthWidth={mouthWidth}
    />
    {/* <path d={noseArc()} /> */}
      
  </FaceContainer>
)

const App = () => (
  <Face />
);

export default App;
