// import React from 'react';
// import { css, jsx } from '@emotion/core'
import styled from "@emotion/styled";
import { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";

const Sdiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #88ee88;
`;

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
    <Sdiv>
      <Canvas>
        <Thing />
      </Canvas>
    </Sdiv>
  );
}

export default App;
