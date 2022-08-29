import React, { useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

const Hotspot = ({ data }) => {

    let size_1, size_2, size_3;
    switch (data.type) {
        case "type_1":
            size_1 = 1.1;
            size_2 = 1.1;
            size_3 = 0.3;
            break;
        case "type_2":
            size_1 = 0.8;
            size_2 = 0.8;
            size_3 = 0.3;
            break;
        case "type_3":
            size_1 = 1.95;
            size_2 = 1.5;
            size_3 = 0.1;
            break;
        case "type_4":
            size_1 = 2.7;
            size_2 = 1.7;
            size_3 = 0.3;
            break;
        case "type_5":
            size_1 = 1.2;
            size_2 = 1.2;
            size_3 = 0.3;
            break;
        default:
            break;
    };

    const texture = useLoader(TextureLoader, data.sourceURL);

    return (
        <group position={[data.position[0], data.position[1], data.position[2]]} rotation={[data.rotation[0], data.rotation[1], data.rotation[2]]} >
            <mesh
                onPointerOver={() => {
                    document.body.style.cursor = "pointer";
                }}
                onPointerOut={() => {
                    document.body.style.cursor = "auto";
                }}
                onClick={() => {
                    window.open(data.linkURL, '_blank');
                }}
            >
                <boxBufferGeometry attach="geometry" args={[size_1, size_2, size_3]} /> :
                <meshStandardMaterial
                    attach="material"
                    map={texture}
                />
            </mesh>
        </group>
    );
}

export default Hotspot;