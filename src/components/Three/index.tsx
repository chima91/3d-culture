import * as Fiber from '@react-three/fiber';
import * as Drei from '@react-three/drei';
import { VFC } from 'react';

export type ThreeProp = {
  glbSrc: string;
};

export const Three: VFC<ThreeProp> = ({ glbSrc }) => {
  const { scene } = Drei.useGLTF(glbSrc);

  return (
    <Fiber.Canvas>
      {/* fov(field of view)とは、視点を動かさずに見える範囲(視野角)のことで、数値が大きいほど広い範囲が見えるようになるが、遠くは見えにくくなる。 */}
      <Drei.PerspectiveCamera makeDefault fov={60} />
      <Drei.OrbitControls enablePan enableZoom enableRotate />
      <Drei.Stage>
        <group dispose={null}>
          <primitive scale={[10, 10, 10]} object={scene} />
        </group>
      </Drei.Stage>
    </Fiber.Canvas>
  );
};
