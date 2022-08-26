import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, scene } = useGLTF("/land_2.glb");

  useEffect(() => {
    scene.children[0].visible = false;
  }, [nodes, materials])

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh>
        <boxBufferGeometry args={[1, 1, 1]} position={[0, 1, 0]} />
      </mesh>
      <primitive object={scene} {...props}>
        <mesh />
      </primitive>
    </group>
  );
}

useGLTF.preload("/land.gltf");
