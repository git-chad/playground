import React, { useRef } from "react";
import { seventeenimages } from "@/constants";
import useIsomorphicLayoutEffect from "@/lib/use-iso";
import { gsap, EASE } from "@/lib/gsap";

const GridThree = () => {
  const gridThreeRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const grid = gridThreeRef.current;
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
            scrub: 1.5,
          },
        })
        .from(gridImages, {
          stagger: 0.07,
          y: () => gsap.utils.random(window.innerHeight, window.innerHeight * 1.8),
        })
        .from(textRef.current, {
            duration: 1.2,
            ease: EASE,
            yPercent: 180,
            autoAlpha: 0,
        }, 0.8)
    }, gridThreeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={gridThreeRef} className="relative min-h-dvh bg-[#020202] [align-content:_center] p-2">
      <div className='[grid-area:"main"] grid w-full h-full gap-2 [grid-template-columns:_repeat(8,1fr)] [grid-template-rows:_repeat(1fr,1fr,1fr)]'>
        {seventeenimages.map((image, idx) => {
          console.log(image.src);
          return (
            //   <img
            //     className="grid__img bg-cover object-cover h-full pointer-events-none will-change-transform"
            //     key={idx}
            //     src={image.src}
            //   />
            <div
              key={idx}
              className={`grid__img bg-cover w-full aspect-[8/11] pointer-events-none will-change-transform ${image.class}`}
              style={{ backgroundImage: `url(${image.src})` }}
            />
          );
        })}
      </div>
      <div ref={textRef} className='[grid-area:"main"] flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-difference'>
        <h2 className="text-[clamp(2rem,7vw,4.5rem)] leading-[1] area-variable--semibold tracking-tight">
          Rawness
        </h2>
        <p className="text-body-small text-right self-end uppercase w-1/2">
          Captured in every moment
        </p>
      </div>
    </section>
  );
};

export default GridThree;
