import React, { useState } from 'react';

const VideoTexture = () => {

    const [video1] = useState(() => {
        const vid = document.createElement('video');
        vid.id = 'video_1'
        vid.src = "/assets/video_1.mp4";
        vid.crossOrigin = "Anonymous";
        vid.loop = true;
        vid.muted = true;
        vid.play();
        return vid;
    });

    const [video2] = useState(() => {
        const vid = document.createElement('video');
        vid.id = 'video_2';
        vid.src = "/assets/video_2.mp4";
        vid.crossOrigin = "Anonymous";
        vid.loop = true;
        vid.muted = true;
        vid.play();
        return vid;
    });

    const [video3] = useState(() => {
        const vid = document.createElement('video');
        vid.id = 'video_3';
        vid.src = "/assets/video_3.mp4";
        vid.crossOrigin = "Anonymous";
        vid.loop = true;
        vid.muted = true;
        vid.play();
        return vid;
    });

    return (
        <>
            <mesh
                onPointerOver={() => {
                    document.body.style.cursor = "pointer";
                }}
                onPointerOut={() => {
                    document.body.style.cursor = "auto";
                }}
                onClick={() => {
                    window.open('https://rejolut.com/', '_blank');
                }}
                scale={[0.8, 0.8, 1]} position={[-14.65, 2.7, 17]} rotation={[0, 1.57, 0]}>
                <planeBufferGeometry args={[2.6, 1.5]} />
                <meshBasicMaterial>
                    <videoTexture attach="map" args={[video1]} />
                </meshBasicMaterial>
            </mesh>
            <mesh
                onPointerOver={() => {
                    document.body.style.cursor = "pointer";
                }}
                onPointerOut={() => {
                    document.body.style.cursor = "auto";
                }}
                onClick={() => {
                    window.open('https://rejolut.com/', '_blank');
                }}
                scale={[0.8, 0.8, 1]} position={[-14.65, 2.7, 13]} rotation={[0, 1.57, 0]}>
                <planeBufferGeometry args={[2.6, 1.5]} />
                <meshBasicMaterial>
                    <videoTexture attach="map" args={[video2]} />
                </meshBasicMaterial>
            </mesh>
            <mesh
                onPointerOver={() => {
                    document.body.style.cursor = "pointer";
                }}
                onPointerOut={() => {
                    document.body.style.cursor = "auto";
                }}
                onClick={() => {
                    window.open('https://rejolut.com/', '_blank');
                }}
                scale={[0.8, 0.8, 1]} position={[-14.65, 2.7, 9]} rotation={[0, 1.57, 0]}>
                <planeBufferGeometry args={[2.6, 1.5]} />
                <meshBasicMaterial>
                    <videoTexture attach="map" args={[video3]} />
                </meshBasicMaterial>
            </mesh>
        </>
    )
}

export default VideoTexture;