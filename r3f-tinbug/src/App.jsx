// import { useState } from 'react'
// import "./App.css";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, PositionalAudio, Text3D } from "@react-three/drei";

function App() {
  // const config = { fov: 35, position: [0, -1, 2], far: 1000, near: 0.1 };
  return (
    <Canvas>
      {/* <ambientLight intensity={0.7} /> */}
      <directionalLight position={[0, 0, 2]} />
      <mesh position={[2, 0, 2]}>
        <boxGeometry />
        <meshStandardMaterial color={"orange"} />
      </mesh>

      <mesh position={[0, 0, 2]}>
        <boxGeometry />
        <meshStandardMaterial color={"orange"} />
      </mesh>
      <mesh position={[0, 2, 2]}>
        <boxGeometry />
        <meshStandardMaterial color={"orange"} />
      </mesh>
      <mesh position={[2, 2, 2]}>
        <boxGeometry />
        <meshStandardMaterial color={"orange"} />
      </mesh>
    </Canvas>
  );
}

export default App;
