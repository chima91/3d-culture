import * as Fiber from "@react-three/fiber";
import * as Drei from "@react-three/drei";

export type ThreeProp = {
  glbSource: string;
}

export const Three = ({ glbSource }: ThreeProp) => {
  const { scene } = Drei.useGLTF(glbSource);

  return (
    <Fiber.Canvas>
      <Drei.PerspectiveCamera makeDefault fov={15} />
      <Drei.OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      <Drei.Stage>
        <group dispose={null}>
          <primitive scale={[10, 10, 10]} object={scene} />
        </group>
      </Drei.Stage>
    </Fiber.Canvas>
  )
};