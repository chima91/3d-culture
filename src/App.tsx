// import React from 'react';
import { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";

const Thing = () => {
  const ref: any = useRef();
  useFrame(() => ref.current.rotation.z += 0.05);
  return (
    <mesh
      ref={ref}
      onClick={e => console.log('click')}
      onPointerOver={e => console.log('hover')}
      onPointerOut={e => console.log('unhover')}
    >
      <planeBufferGeometry attach='geometry' args={[1, 1]} />
      <meshBasicMaterial
        attach='material'
        color='hotpink'
        opacity={0.5}
        transparent
      />
    </mesh>
  )
}

const App = () => {
  return (
    <>
      <h1>react-three-fiberのテスト</h1>
      <Canvas>
        <Thing />
      </Canvas>
    </>
  );
}

export default App;
