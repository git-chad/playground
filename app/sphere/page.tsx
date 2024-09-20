"use client"
import NeuralNetwork from "@/components/sphere/sphere";
import React from "react";

type Props = {};

const SpherePage = (props: Props) => {
  return (
    <main className="bg-white min-h-svh">
      <NeuralNetwork />
    </main>
  );
};

export default SpherePage;
