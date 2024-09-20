import { useRef } from "react";
import { fiveimages } from "@/constants";
import useIsomorphicLayoutEffect from "@/lib/use-iso";
import { gsap, EASE } from "@/lib/gsap";

const GridTwo = () => {
  const gridtwoRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const grid = gridtwoRef.current;
      if (!grid) return;
      const gridItems = grid?.querySelectorAll(".grid__item");

      const parentNode = grid.parentNode;
      if (!(parentNode instanceof Element)) return;

      const gridImages = grid?.querySelectorAll(".grid__img");

      const middleIndex = Math.floor(gridImages.length / 2);

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
            scrub: 0.5,
            markers: true,
          },
        })
        .from(gridImages, {
          stagger: {
            amount: 0.3,
            from: "center",
          },
          y: window.innerHeight,
          transformOrigin: "50% 0%",
          rotation: (pos) => {
            const centerDistance = Math.abs(pos - middleIndex);
            return pos < middleIndex ? centerDistance * 3 : centerDistance * -3;
          },
        })
        .from(gridItems, {
          stagger: {
            amount: 0.3,
            from: "center",
          },
          yPercent: 100,
          autoAlpha: 0,
        });
    }, gridtwoRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={gridtwoRef}
      className="relative min-h-dvh bg-[#020202] [align-content:_center] p-2"
    >
      <div className='[grid-area:"main"] grid w-full h-max gap-2 [grid-template-columns:_repeat(5,1fr)] [grid-template-rows:_repeat(1fr,1fr,1fr)]'>
        {fiveimages.map((image, idx) => (
          <img
            key={idx}
            src={image.src}
            className="grid__img bg-cover w-full h-full pointer-events-none will-change-transform"
          />
        ))}
        <div className="grid__item [grid-area:2/1]">
          <h4 className="text-body uppercase mt-3">Vision</h4>
          <p className="leading-[1] area-variable--semibold tracking-tight my-2">
            Unveiling the unseen
          </p>
        </div>
        <div className="grid__item [grid-area:2/3]">
          <h4 className="text-body uppercase mt-3">Focus</h4>
          <p className="leading-[1] area-variable--semibold tracking-tight my-2">
            Where color meets form
          </p>
        </div>
        <div className="grid__item [grid-area:2/5]">
          <h4 className="text-body uppercase mt-3">Essence</h4>
          <p className="leading-[1] area-variable--semibold tracking-tight my-2">
            Moments in motion
          </p>
        </div>
      </div>
    </section>
  );
};

export default GridTwo;
