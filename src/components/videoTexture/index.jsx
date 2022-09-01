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

    // const [video4] = useState(() => {
    //     const vid = document.createElement('video');
    //     vid.id = 'video_4';
    //     vid.src = "/assets/video_4.mp4";
    //     vid.crossOrigin = "Anonymous";
    //     vid.loop = true;
    //     vid.muted = true;
    //     vid.play();
    //     return vid;
    // });

    // const [video5] = useState(() => {
    //     const vid = document.createElement('video');
    //     vid.id = 'video_5';
    //     vid.src = "/assets/video_5.mp4";
    //     vid.crossOrigin = "Anonymous";
    //     vid.loop = true;
    //     vid.muted = true;
    //     vid.play();
    //     return vid;
    // });

    // const [video6] = useState(() => {
    //     const vid = document.createElement('video');
    //     vid.id = 'video_6';
    //     vid.src = "/assets/video_6.mp4";
    //     vid.crossOrigin = "Anonymous";
    //     vid.loop = true;
    //     vid.muted = true;
    //     vid.play();
    //     return vid;
    // });

    // const [video7] = useState(() => {
    //     const vid = document.createElement('video');
    //     vid.id = 'video_7';
    //     vid.src = "/assets/video_7.mp4";
    //     vid.crossOrigin = "Anonymous";
    //     vid.loop = true;
    //     vid.muted = true;
    //     vid.play();
    //     return vid;
    // });

    // const [video8] = useState(() => {
    //     const vid = document.createElement('video');
    //     vid.id = 'video_8';
    //     vid.src = "/assets/video_8.mp4";
    //     vid.crossOrigin = "Anonymous";
    //     vid.loop = true;
    //     vid.muted = true;
    //     vid.play();
    //     return vid;
    // });

    // const [video9] = useState(() => {
    //     const vid = document.createElement('video');
    //     vid.id = 'video_9';
    //     vid.src = "/assets/video_9.mp4";
    //     vid.crossOrigin = "Anonymous";
    //     vid.loop = true;
    //     vid.muted = true;
    //     vid.play();
    //     return vid;
    // });

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
                scale={[0.8, 0.8, 1]} position={[-14.66, 2.67, 16.5]} rotation={[0, 1.57, 0]}>
                <planeBufferGeometry args={[2.82, 1.5]} />
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
                scale={[0.8, 0.8, 1]} position={[-14.66, 2.67, 13.15]} rotation={[0, 1.57, 0]}>
                <planeBufferGeometry args={[2.82, 1.5]} />
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
                scale={[0.8, 0.8, 1]} position={[-14.66, 2.67, 9.8]} rotation={[0, 1.57, 0]}>
                <planeBufferGeometry args={[2.82, 1.5]} />
                <meshBasicMaterial>
                    <videoTexture attach="map" args={[video3]} />
                </meshBasicMaterial>
            </mesh>
            {/* <mesh
                onPointerOver={() => {
                    document.body.style.cursor = "pointer";
                }}
                onPointerOut={() => {
                    document.body.style.cursor = "auto";
                }}
                onClick={() => {
                    window.open('https://rejolut.com/', '_blank');
                }}
                scale={[0.8, 0.8, 1]} position={[-7.63, 2.21, 6.913]} rotation={[0, 1.0465, 0]}>
                <planeBufferGeometry args={[3.3, 1.8]} />
                <meshBasicMaterial>
                    <videoTexture attach="map" args={[video4]} />
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
                scale={[0.8, 0.8, 1]} position={[0.26, 2.21, 6.913]} rotation={[0, 1.0465, 0]}>
                <planeBufferGeometry args={[3.3, 1.8]} />
                <meshBasicMaterial>
                    <videoTexture attach="map" args={[video5]} />
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
                scale={[0.8, 0.8, 1]} position={[8.615, 2.21, 6.913]} rotation={[0, 1.0465, 0]}>
                <planeBufferGeometry args={[3.3, 1.8]} />
                <meshBasicMaterial>
                    <videoTexture attach="map" args={[video6]} />
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
                scale={[0.8, 0.8, 1]} position={[8.61, 2.21, 18.76]} rotation={[0, 2.095, 0]}>
                <planeBufferGeometry args={[3.3, 1.8]} />
                <meshBasicMaterial>
                    <videoTexture attach="map" args={[video7]} />
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
                scale={[0.8, 0.8, 1]} position={[0.118, 2.21, 18.76]} rotation={[0, 2.095, 0]}>
                <planeBufferGeometry args={[3.3, 1.8]} />
                <meshBasicMaterial>
                    <videoTexture attach="map" args={[video8]} />
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
                scale={[0.8, 0.8, 1]} position={[-6.918, 2.21, 18.76]} rotation={[0, 2.095, 0]}>
                <planeBufferGeometry args={[3.3, 1.8]} />
                <meshBasicMaterial>
                    <videoTexture attach="map" args={[video9]} />
                </meshBasicMaterial>
            </mesh> */}
        </>
    )
}

export default VideoTexture;