"use client";
import { Card } from "@/entities/ui/card";
import { FlipText } from "@/shared/ui/flip-link";
import Marquee from "@/shared/ui/marquee";
import { Section } from "@/shared/ui/section";
import { AnimatedTitle } from "@/shared/ui/title";
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

  const sectionOneScale = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
  const sectionOneRotate = useTransform(scrollYProgress, [0, 0.5], [0, -2.5]);

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
    <main className="relevant max-w-full">
      <div ref={containerRef} className="relative h-[300dvh] z-20 bg-black">
        <Section
          className="bg-slate-blue sticky top-0 flex flex-col items-center justify-center p-5"
          style={sectionOneStyle}
        >
          <div className="relative">
            <div className="relative z-20">
              <FlipText secondaryText="text-pink-300" delay={0.5} href="#">
                Nail
              </FlipText>
              <FlipText delay={1.5} href="#" secondaryText="text-emerald-300">
                Moment
              </FlipText>
            </div>
          </div>
          <div className="absolute rotate-12  bottom-5 flex items-center justify-center">
            <Marquee>
              {"  "}КОНФЕРЕНЦІЯ КОНФЕРЕНЦІЯ КОНФЕРЕНЦІЯ КОНФЕРЕНЦІЯ КОНФЕРЕНЦІЯ
              КОНФЕРЕНЦІЯ КОНФЕРЕНЦІЯ КОНФЕРЕНЦІЯ КОНФЕРЕНЦІЯ КОНФЕРЕНЦІЯ
              КОНФЕРЕНЦІЯ КОНФЕРЕНЦІЯ КОНФЕРЕНЦІЯ КОНФЕРЕНЦІЯ КОНФЕРЕНЦІЯ
              КОНФЕРЕНЦІЯ КОНФЕРЕНЦІЯ КОНФЕРЕНЦІЯ КОНФЕРЕНЦІЯ КОНФЕРЕНЦІЯ
              КОНФЕРЕНЦІЯ КОНФЕРЕНЦІЯ КОНФЕРЕНЦІЯ КОНФЕРЕНЦІЯ {"  "}
            </Marquee>
          </div>
        </Section>
        <Section
          className="bg-[#ffe699] flex flex-col justify-center items-center sticky top-0"
          style={sectionTwoStyle}
        >
          <AnimatedTitle text="Квитки" />
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
