// @ts-ignore
import * as THREE from "three";
import { useRef, useState, useMemo, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Billboard, Text, TrackballControls } from "@react-three/drei";

function Word({ children, ...props }: { children: string }) {
  const color = new THREE.Color();
  const fontProps = {
    font: "/SF-Pro-Display-Regular.otf",
    fontSize: 10,
    letterSpacing: -0.05,
    lineHeight: 1,
    color: "black",
    "material-toneMapped": true,
  };
  const ref = useRef<THREE.Mesh>(null);

  return (
    <Billboard {...props}>
      <Text
        ref={ref}
        onClick={() => console.log("clicked")}
        {...fontProps}
      >
        {children}
      </Text>
    </Billboard>
  );
}

function generateCurvedLineWordPositions(count: number, radius: number) {
  const positions = [];
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    const z = Math.sin(angle) * radius * 0.5;
    positions.push(new THREE.Vector3(x, y, z));
  }
  return positions;
}

function Cloud({
  text = "It's a marathon, not a sprint, but I still gotta win the race",
  radius = 20,
}: {
  text?: string;
  radius?: number;
}) {
  const words = useMemo(() => {
    const temp: [THREE.Vector3, string][] = [];
    const positions = generateCurvedLineWordPositions(
      text.split(" ").length,
      radius * 0.8
    );
    positions.forEach((pos, i) => temp.push([pos, text.split(" ")[i]]));
    return temp;
  }, [text, radius]);
  return (
    <>
      {words.map(([pos, word], index) => (
        // @ts-ignore
        <Word key={index} position={pos}>
          {word}
        </Word>
      ))}
    </>
  );
}

export default function App() {
  return (
    <Canvas
      style={{height: "100svh", width: "100%"}}
      dpr={[2, 5]}
      camera={{ position: [0, 2, 40], fov: 100 }}
    >
      <Suspense fallback={null}>
        <group rotation={[10, -10.5, 10]} scale={[10, 10, 10]}>
          <Cloud radius={50} />
        </group>
      </Suspense>
      <TrackballControls />
    </Canvas>
  );
}
