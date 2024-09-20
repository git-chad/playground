"use client"
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, AsciiRenderer } from "@react-three/drei";
import { useRef } from "react";
//@ts-ignore
import * as THREE from "three";

export default function Component() {
  const phrase = "don't talk if you can't improve the silence";
  function CircularText({ radius = 6, text = "" }) {
    const groupRef = useRef<THREE.Group>(null);
    const words = text.split(" ");
    const angleStep = (Math.PI * 2) / words.length;

    useFrame((state) => {
      if (groupRef.current) {
        groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      }
    });

    return (
      <group ref={groupRef}>
        {words.map((word: string, index: number) => {
          const angle = index * angleStep;
          const x = Math.sin(angle) * radius;
          const z = Math.cos(angle) * radius;
          return (
            <Text
              key={index}
              position={[x, 0, z]}
              fontSize={2.8}
              color="#010101"
              anchorX="center"
              anchorY="middle"
              rotation={[0, -angle, 0]}
            >
              {word}
            </Text>
          );
        })}
      </group>
    );
  }

  return (
    <div className="w-full h-screen" style={{ backgroundColor: "#f5f5dc" }}>
      <Canvas camera={{ position: [0, 0, 12] }}>
        <color attach="background" args={["#f5f5dc"]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <CircularText text={phrase} />
        <OrbitControls enableZoom={false} />
        <AsciiRenderer
          fgColor="#010101"
          bgColor="#f5f5dc"
          resolution={0.15}
          characters=" .:-+*=%@#"
          invert={false}
        />
      </Canvas>
    </div>
  );
}
