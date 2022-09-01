import { Suspense, useRef, useEffect, useMemo } from "react";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import { Environment, Loader, OrbitControls } from "@react-three/drei";
import { FPSControls } from "react-three-fpscontrols";
import { Physics, Debug, useBox } from "@react-three/cannon";
import hotspotsData from '../src/util/hotspotsData.json';

import MainStage from "./MainStage";
import Hotspot from "./components/hotspot";
import Player from "./components/player";
import VideoTexture from "./components/videoTexture";
import { EffectComposer, Noise, Bloom, SelectiveBloom, DepthOfField, Vignette } from "@react-three/postprocessing";

export default function Viewer() {

  return (
    <>
      <Canvas shadows
      >
        <EffectComposer>
          <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
          {/* <SelectiveBloom >
          </SelectiveBloom> */}
          {/* <Vignette eskil={false} offset={0.1} darkness={1.1} /> */}
          <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} />
          <Noise opacity={0.01} />
        </EffectComposer>
        <pointLight position={[10, 10, 3]} />
        <MainStage />
        <ambientLight intensity={0.4} />
        {
          hotspotsData.map((element, index) => (
            <Hotspot data={element} key={index} />
          ))
        }
        <VideoTexture />
        <FPSControls
          camProps={{
            makeDefault: true,
            fov: 60,
            position: [0, 2.537, 0],
          }}
          orbitProps={{
            target: [0, 2.537, 0]
          }}
          enableJoystick
          enableKeyboard
        />
        <Suspense fallback={null}>
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}
