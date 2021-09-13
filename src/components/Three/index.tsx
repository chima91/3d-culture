import { useRef } from "react";
import { useFrame } from "react-three-fiber";

export const Three = () => {
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
};