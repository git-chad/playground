"use client";

import GridOne from "@/components/grids/one";
import GridThree from "@/components/grids/three";
import GridTwo from "@/components/grids/two";

const Grids = () => {
  return (
    <main className="overflow-x-hidden">
      <section className="min-h-dvh">
        <GridThree />
      </section>
      <section className="min-h-dvh">
        <GridOne />
      </section>
      <section className="min-h-dvh">
        <GridTwo />
      </section>
    </main>
  );
};

export default Grids;
