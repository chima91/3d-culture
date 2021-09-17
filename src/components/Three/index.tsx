import React from "react";
import * as Fiber from "@react-three/fiber";
import * as Drei from "@react-three/drei";

import { Model } from "../Model";

export const Three = () => {
  return (
    <React.Suspense fallback={<span>loading...</span>}>
      <Fiber.Canvas>
        <Drei.PerspectiveCamera makeDefault fov={15} />
        <Drei.OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        <Drei.Stage>
          <Model />
        </Drei.Stage>
      </Fiber.Canvas>
    </React.Suspense>
  )
};