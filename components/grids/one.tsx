import { images } from "@/constants";
import { gsap, EASE } from "@/lib/gsap";
import useIsomorphicLayoutEffect from "@/lib/use-iso";
import { useRef } from "react";

const GridOne = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const grid = gridRef.current;
      if (!grid) return;

      const parentNode = grid.parentNode;
      if (!(parentNode instanceof Element)) return;

      const gridImages = grid?.querySelectorAll(".grid__img");

      gsap
        .timeline({
          defaults: {
            ease: EASE,
          },
          scrollTrigger: {
            trigger: grid,
            start: "center center",
            end: "+=250%",
            pin: parentNode,
            scrub: 1,
          },
        })
        .set(grid, { perspective: 1000 })
        .from(gridImages, {
          stagger: {
            amount: 0.4,
            from: "random",
            grid: [4, 9],
          },
          y: window.innerHeight,
          rotationX: -60,
          transformOrigin: "50% 0%",
          z: -900,
          autoAlpha: 0,
        });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className='relative min-h-dvh bg-[#020202] [align-content:_center] p-2 h-screen grid place-items-center [grid-template-areas:"main"] [grid-template-columns:100%] [grid-template-rows:100%]'>
      <div
        ref={gridRef}
        data-grid-fifth
        className='[grid-area:"main"] grid w-full h-full gap-2 [grid-template-columns:_repeat(5,1fr)] [grid-template-rows:_repeat(4,1fr)]'
      >
        {images.map((image, idx) => (
          <img
            key={idx}
            src={image.src}
            className="bg-cover grid__img [background-position:50%_50%] pointer-events-none will-change-transform [transform:_translateZ(0.1px)]"
          />
        ))}
      </div>
      <div className='[grid-area:"main"] flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <h2 className="text-[clamp(2rem,7vw,4.5rem)] leading-[1] area-variable--semibold tracking-tight">
          Explorations
        </h2>
        <p className="text-body-small text-right self-end uppercase">
          Nothing left unseen
        </p>
      </div>
    </section>
  );
};

export default GridOne;
