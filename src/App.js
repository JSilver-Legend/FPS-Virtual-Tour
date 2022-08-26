import { Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Loader, OrbitControls } from "@react-three/drei";
import { FPSControls } from "react-three-fpscontrols";
import { Physics, Debug, useBox } from "@react-three/cannon";
import hotspotsData from '../src/util/hotspotsData.json'

import MainStage from "./MainStage";
import Hotspot from "./components/hotspot";
import Player from "./components/player";

export default function Viewer() {

  return (
    <>
      <Canvas shadows dpr={[1, 2]} gl={{ antialias: false }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 3]} />
          <MainStage />
          {
            hotspotsData.map((element) => (
              <Hotspot data={element} />
            ))
          }
          <FPSControls
            camProps={{
              makeDefault: true,
              fov: 60,
              position: [0, 2.537, 0.7],
            }}
            orbitProps={{
              target: [0, 2.537, 0]
            }}
            enableJoystick={false}
            enableKeyboard
          />
          {/* <Player /> */}
          {/* <OrbitControls /> */}
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}
