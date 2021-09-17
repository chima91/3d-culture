import * as Drei from "@react-three/drei";

export const Model = () => {
  const { scene } = Drei.useGLTF("/static/eren.glb");

  return (
    <group dispose={null}>
      <primitive scale={[10, 10, 10]} object={scene} />
    </group>
  )
}