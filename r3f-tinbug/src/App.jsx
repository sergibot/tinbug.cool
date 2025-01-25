// import { useState } from 'react'
// import "./App.css";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, PositionalAudio, Text3D } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";


const CustomCube = ({ position, size, color }) => {
  const ref = useRef();
  const [isHovered, setIsHovered] = useState(false);

  // delta is the difference in time betw current frame and the previous frame
  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    // ref.current.position.z = Math.sin(state.clock.elapsedTime)*2
  });
  return (
    <mesh
      position={position}
      ref={ref}
      onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
      onPointerLeave={() => setIsHovered(false)}
      onClick={()=>console.log('sjdflksjdklfjskldfjls')}
    >
      <boxGeometry args={size} />
      <meshStandardMaterial color={isHovered ? "orange" : "lightblue"} />
    </mesh>
  );
};

// window.onSpotifyIframeApiReady = (IFrameAPI) => {
//   const element = document.getElementById("embed-iframe");
//   const options = {
//     uri: "spotify:track:0KoSzqJC4pDWNdZdqJhgA4",
//   };
//   const callback = (EmbedController) => {
//     document.querySelector(".play").addEventListener("click", () => {
//       alert();
//       console.log("sdfs");
//       EmbedController.play();
//     });
//   };
//   IFrameAPI.createController(element, options, callback);
// };

function App() {
  // const App = () => {
  // const config = { fov: 35, position: [0, -1, 2], far: 1000, near: 0.1 };
  return (
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
  );
}

export default App;
