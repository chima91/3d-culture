import { useRef } from "react";
import { useFrame } from "react-three-fiber";
import * as THREE from "three";
import CameraControls from "camera-controls";

export const Three = () => {
  const ref: any = useRef();
  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref}>
      <boxGeometry attach="geometry" args={[400, 400, 400]} />
      <meshNormalMaterial attach='material' />
    </mesh>
  )
};