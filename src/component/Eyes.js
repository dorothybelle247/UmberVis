import React from "react";

export const Eyes = ({eyeOffsetX, eyeOffsetY, eyeRadius}) => (
  <div>
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
      cy={-eyeOffsetY}
      r={eyeRadius}
      fill="black"
      stroke="black"
      // stroke-width="8"
    />
  </div>
)