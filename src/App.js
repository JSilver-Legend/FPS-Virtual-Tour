import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import { FPSControls } from "react-three-fpscontrols";

import MainStage from "./MainStage";

export default function Viewer() {
  return (
    <>
      <Canvas shadows dpr={[1, 2]}>
        <Suspense fallback={null}>
          <pointLight position={[10, 10, 10]} />
          <MainStage />
          <FPSControls
            camProps={{
              makeDefault: true,
              fov: 80,
              position: [0, 2.537, 0.7]
            }}
            orbitProps={{
              target: [0, 2.537, 0]
            }}
            enableJoystick
            enableKeyboard
          />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}
