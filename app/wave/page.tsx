"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { AsciiRenderer } from "@react-three/drei";
import { useMemo, useRef } from "react";
//@ts-ignore
import * as THREE from "three";

function Wave() {
  const meshRef = useRef<THREE.Mesh>(null);
  const geometry = useMemo(() => new THREE.PlaneGeometry(20, 2, 150, 20), []);

  useFrame(({ clock }) => {
    if (meshRef.current && meshRef.current.geometry) {
      const positions = meshRef.current.geometry.attributes.position;
      const time = clock.getElapsedTime();

      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        const z =
          Math.sin((x + time) * 0.5) * 0.1 +
          Math.sin((y + time) * 0.5) * 0.1 +
          Math.sin((x * 0.2 + y * 0.3 + time) * 2) * 0.05;
        positions.setZ(i, z);
      }

      positions.needsUpdate = true;
    }
  });

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      position={[0, -1, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <meshStandardMaterial color="#010101" wireframe />
    </mesh>
  );
}

export default function WavePage() {
  return (
    <div className="relative w-full h-screen bg-[#f5f5dc] overflow-hidden">
      <div className="inset-0 flex flex-col max-w-7xl mx-auto justify-center h-full">
        <h1 className="text-display-giant font-bold mb-4 text-[#010101] tracking-[-7px] leading-[85%]">
          SOUNDWAVE SYNERGY
        </h1>
        <p className="text-body-large text-[#010101] max-w-lg text-balance paradroid--regular uppercase ml-2">
          Elevate your audio experience with cutting-edge hi-fi technology
        </p>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-96">
        <Canvas camera={{ position: [0, 2, 1], fov: 50 }}>
          <color attach="background" args={["#f5f5dc"]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Wave />
          <AsciiRenderer
            fgColor="#010101"
            bgColor="#f5f5dc"
            resolution={0.15}
            characters=" .:-+*=%@#"
            invert={false}
          />
        </Canvas>
      </div>
    </div>
  );
}
