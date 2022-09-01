import { PerspectiveCamera } from '@react-three/drei';
import { useBox } from "@react-three/cannon";
import { useFrame } from '@react-three/fiber';
import React, { useRef, useEffect, useState } from 'react';
import { FPSControls } from "react-three-fpscontrols";

const Box = () => {
    const [ref] = useBox(() => ({ mass: 0, args: [0.5, 1, 0.5], position: [0, 1, 0] }));

    return (
        <mesh visible={false} ref={ref} receiveShadow>
            <boxBufferGeometry attach="geometry" args={[3, 3, 0.2]} />
        </mesh>
    );
}

const Player = () => {

    const camera = useRef();
    const [moveForward, setMoveForward] = useState(false);
    const [moveBackward, setMoveBackward] = useState(false);
    const [moveLeft, setMoveLeft] = useState(false);
    const [moveRight, setMoveRight] = useState(false);

    useFrame(() => {
        const velocity = 0.05;
        if (moveForward) {
            camera.current.moveForward(velocity);
        } else if (moveLeft) {
            camera.current.moveRight(-velocity);
        } else if (moveBackward) {
            camera.current.moveForward(-velocity);
        } else if (moveRight) {
            camera.current.moveRight(velocity);
        }
    });


    useEffect(() => {
        console.log('camera', camera.current.rotation.x);
    }, [camera])


    const onKeyDown = function (event) {
        switch (event.code) {
            case "ArrowUp":
            case "KeyW":
                setMoveForward(true);
                break;
            case "ArrowLeft":
            case "KeyA":
                setMoveLeft(true);
                break;
            case "ArrowDown":
            case "KeyS":
                setMoveBackward(true);
                break;
            case "ArrowRight":
            case "KeyD":
                setMoveRight(true);
                break;
            default:
                return;
        }
    };

    const onKeyUp = function (event) {
        switch (event.code) {
            case "ArrowUp":
            case "KeyW":
                setMoveForward(false);
                break;
            case "ArrowLeft":
            case "KeyA":
                setMoveLeft(false);
                break;
            case "ArrowDown":
            case "KeyS":
                setMoveBackward(false);
                break;
            case "ArrowRight":
            case "KeyD":
                setMoveRight(false);
                break;
            default:
                return;
        }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);
    
    return (
        <group ref={camera} position={[0, 0, 0]} >
            <PerspectiveCamera
                // ref={camera}
                makeDefault={true}
                fov={80}
                position={[0, 1.5, 0]}
            />
            <Box />
        </group>
    )
}

export default Player;