import React from "react";

import {FaceContainer} from "./FaceContainer"
import { BackgroundCircle } from "./BackgroundCircle";
import {Eyes} from "./Eyes"
import {Mouth} from "./Mouth"



const width = 920;
const height = 460;


// Method chaining - set multiple chain


export const Face = ({width,
height,
centerX,
centerY,
strokeWidth,
eyeOffsetX,
eyeOffsetY,
eyeRadius,
mouthWidth,
mouthRadius}) => (
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