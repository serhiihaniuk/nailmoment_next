"use client";
import { Card } from "@/entities/ui/card";
import { RotatingBadgeWithText } from "@/shared/assets/badge";
import { FlipText } from "@/shared/ui/flip-link";
import { Section } from "@/shared/ui/section";
import { useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    // Subscribe to scrollYProgress changes
    return scrollYProgress.onChange((v) => {
      console.log(v);
    });
  }, [scrollYProgress]);

  const sectionOneScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const sectionOneRotate = useTransform(scrollYProgress, [0, 0.5], [0, -5]);

  const sectionTwoRotate = useTransform(scrollYProgress, [0, 0.35], [10, 0]);
  const sectionTwoScale = useTransform(scrollYProgress, [0, 0.4], [0.3, 1]);

  const sectionThreeRotate = useTransform(scrollYProgress, [0, 0.65], [5, 0]);
  const sectionThreeScale = useTransform(scrollYProgress, [0, 0.7], [0.3, 1]);

  const sectionOneStyle = {
    scale: sectionOneScale,
    rotate: sectionOneRotate,
  };

  const sectionTwoStyle = {
    rotate: sectionTwoRotate,
    scale: sectionTwoScale,
  };

  const sectionThreeStyle = {
    rotate: sectionThreeRotate,
    scale: sectionThreeScale,
  };

  return (
    <main className="relevant">
      <div ref={containerRef} className="relative h-[300dvh] z-20 bg-black">
        <Section
          className="bg-slate-blue sticky top-0 flex flex-col items-center justify-center p-5"
          style={sectionOneStyle}
        >
          <div className="relative">
            <div className="relative z-20">
              {" "}
              <FlipText delay={0.5} href="#">
                Nail
              </FlipText>
              <FlipText delay={1.5} href="#">
                Moment
              </FlipText>
            </div>
            <div className="absolute -right-[25%] bottom-0 flex items-center justify-center"></div>
          </div>
        </Section>
        <Section
          className="bg-[#ffe699] flex justify-center items-center sticky top-0"
          style={sectionTwoStyle}
        >
          <Card />
        </Section>
        <Section
          className="sticky top-0 bg-stone-700"
          style={sectionThreeStyle}
        ></Section>
      </div>
    </main>
  );
}
