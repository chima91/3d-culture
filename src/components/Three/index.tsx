import { useRef } from "react";
import { useFrame } from "react-three-fiber";

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