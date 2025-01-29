// import { useState } from 'react'
// import "./App.css";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, PositionalAudio, Text3D } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { create } from "zustand";

const useStore = create((set) => ({
  isPlaying: false,
  selectedTrack: "0KoSzqJC4pDWNdZdqJhgA4",
  playpause: () => set((state) => ({ isPlaying: !state.isPlaying })),
}));

const SpotifyIframe = ({ emitController = () => {} }) => {
  // const bears = useBearStore((state) => state.bears){
  const spotifyId = useStore((state) => state.selectedTrack);
  const isPlaying = useStore((state) => state.isPlaying);
  const type = "track";
  // const spotifyId = "0KoSzqJC4pDWNdZdqJhgA4";

  const spotifyScriptUrl = "https://open.spotify.com/embed/iframe-api/v1";

  const [controller, setController] = useState(null);
  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("id", "spotify-iframe-api");
    script.src = spotifyScriptUrl;
    document.body.appendChild(script);

    script.onload = () => {
      window.onSpotifyIframeApiReady = (IFrameAPI) => {
        const element = document.getElementById("spotify-iframe-api");
        const options = {
          width: 200,
          height: 0,
        };
        const callback = (EmbedController) => {
          setController(EmbedController);
        };
        IFrameAPI.createController(element, options, callback);
      };
    };

    return () => document.body.removeChild(script);
  }, []);

  useEffect(() => {
    if (controller) {
      controller.loadUri(`spotify:${type}:${spotifyId}`);

      // Use the emit controller to pass the EmbedController
      // to the parent component for more interactions
      emitController(controller);
    }
  }, [controller, spotifyId, type]);
  console.log(isPlaying);
  console.log("isPlaying");
  useEffect(() => {
    if (controller) {
      if (isPlaying) {
        // controller.play()
        controller.resume();
      } else {
        controller.pause();
      }
    }
  }, [isPlaying]);

  return <div id="spotify-iframe-api" />;
};

const CustomCube = ({ position, size, color }) => {
  const ref = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const playpause = useStore((state) => state.playpause);
  const isPlaying = useStore((state) => state.isPlaying);

  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2;
  });
  return (
    <mesh
      position={position}
      ref={ref}
      onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
      onPointerLeave={() => setIsHovered(false)}
      onClick={playpause}
    >
      <boxGeometry args={size} />
      <meshStandardMaterial color={isHovered ? "orange" : "lightblue"} />
    </mesh>
  );
};

function App() {
  // const App = () => {
  // const config = { fov: 35, position: [0, -1, 2], far: 1000, near: 0.1 };
  return (
    <>
      <div style={{ display: "hidden" }}>
        <SpotifyIframe />
      </div>
      <Canvas>
        <ambientLight intensity={0.7} />
        <directionalLight position={[0, 0, 2]} />
        <group>
          <CustomCube position={[0, 0, 2]} color={"red"} size={[1, 1, 1]} />
          {/* <CustomCube position={[0, 2, 2]} color={"red"} size={[1, 1, 1]} /> */}
          {/* <CustomCube position={[-2, 0, 2]} color={"orange"} size={[1, 1, 1]} />
        <CustomCube position={[2, -2, 2]} color={"hotpink"} size={[1, 1, 1]} />
        <CustomCube position={[0, -2, 2]} color={"hotpink"} size={[1, 1, 1]} />
        <CustomCube position={[-2, 2, 2]} color={"hotpink"} size={[1, 1, 1]} /> */}
        </group>
      </Canvas>
    </>
  );
}

export default App;
