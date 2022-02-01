import * as Fiber from "@react-three/fiber";
import * as Drei from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader"
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

export const Obj_Mtl_Test = () => {
  const materials = useLoader(MTLLoader, '/static/No508SUEMUR.mtl');
  const object = useLoader(OBJLoader, '/static/No508SUEMURA.obj', loader => {
    materials.preload()
    loader.setMaterials(materials)
  })

  return (
    <Fiber.Canvas>
      {/* fov(field of view)とは、視点を動かさずに見える範囲(視野角)のことで、数値が大きいほど広い範囲が見えるようになるが、遠くは見えにくくなる。 */}
      <Drei.PerspectiveCamera makeDefault fov={60} />
      <Drei.OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      <Drei.Stage>
        <group dispose={null}>
          <primitive scale={[10, 10, 10]} object={object} />
        </group>
      </Drei.Stage>
    </Fiber.Canvas>
  )
};