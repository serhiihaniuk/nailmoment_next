"use client";
import { Card, TicketType } from "@/entities/ui/card";
import { Flower, Flower2, Flower3 } from "@/shared/assets/flower";
import { Wave } from "@/shared/assets/wave";
import { FlipText } from "@/shared/ui/flip-link";
import Marquee from "@/shared/ui/marquee";
import { Section } from "@/shared/ui/section";
import { AnimatedTitle } from "@/shared/ui/title";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const sectionOneScale = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
  const sectionOneRotate = useTransform(scrollYProgress, [0, 0.5], [0, -2.5]);

  const sectionTwoRotate = useTransform(scrollYProgress, [0, 0.35], [10, 0]);
  const sectionTwoScale = useTransform(scrollYProgress, [0, 0.4], [0.3, 1]);

  const sectionThreeRotate = useTransform(scrollYProgress, [0, 0.65], [5, 0]);
  const sectionThreeScale = useTransform(scrollYProgress, [0, 0.7], [0.3, 1]);

  const flowerRotate = useTransform(scrollYProgress, [0, 0.8], [0, 100]);
  const flowerScale = useTransform(scrollYProgress, [0, 0.8], [1, 1.8]);

  const flower2Rotate = useTransform(scrollYProgress, [0, 0.8], [0, -100]);
  const flower2Y = useTransform(scrollYProgress, [0, 0.8], [0, -225]);

  const flower3Rotate = useTransform(scrollYProgress, [0.2, 1], [0, -100]);
  const flower3X = useTransform(scrollYProgress, [0.2, 1], [-225, 0]);
  const flower3Scale = useTransform(scrollYProgress, [0.2, 1], [1.8, 1]);

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

  const basicBenefits: Array<{ value: string; type: TicketType }> = [
    { value: "Місце в залі в категорії фан", type: "regular" },
    { value: "Виступ спікерів", type: "regular" },
    { value: "Нетворкінг з учасниками", type: "regular" },
    { value: "Закритий телеграм канал з учасниками", type: "regular" },
    { value: "Сертифікат про участь", type: "regular" },
  ];

  const vipBenefits: Array<{ value: string; type: TicketType }> = [
    ...basicBenefits,
    { value: "Презентації від спікерів", type: "vip" },
  ];

  const premiumBenefits: Array<{ value: string; type: TicketType }> = [
    ...vipBenefits,
    { value: "Кава брейк зі спікерами у Преміум - румі", type: "premium" },
    { value: "Нетворкінг зі спікерами", type: "premium" },
    { value: "Подарунок від спонсорів", type: "premium" },
    { value: "Окрема стійка реєстрації", type: "premium" },
  ];

  return (
    <main className="relevant max-w-full">
      <div ref={containerRef} className="relative h-[300dvh] z-20 bg-black">
        <Section
          className="bg-stone-900 overflow-hidden sticky top-0 flex flex-col items-center justify-center p-5"
          style={sectionOneStyle}
        >
          <motion.div
            style={{ rotate: flowerRotate, scale: flowerScale }}
            className="absolute top-0 right-0 w-[200px] h-[200px] overflow-hidden"
          >
            <Flower baseDelay={1} />
          </motion.div>
          <motion.div
            style={{ rotate: flower2Rotate, scale: flowerScale, y: flower2Y }}
            className="absolute bottom-0 left-0 w-[200px] h-[200px] overflow-hidden z-20"
          >
            <Flower2 baseDelay={1.5} />
          </motion.div>
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
              КОНФЕРЕНЦІЯ 22.10.2024 КОНФЕРЕНЦІЯ 22.10.2024 КОНФЕРЕНЦІЯ
              22.10.2024 КОНФЕРЕНЦІЯ 22.10.2024 КОНФЕРЕНЦІЯ 22.10.2024
              КОНФЕРЕНЦІЯ 22.10.2024 КОНФЕРЕНЦІЯ 22.10.2024 КОНФЕРЕНЦІЯ
              22.10.2024 КОНФЕРЕНЦІЯ 22.10.2024 КОНФЕРЕНЦІЯ 22.10.2024
              КОНФЕРЕНЦІЯ 22.10.2024 КОНФЕРЕНЦІЯ 22.10.2024 КОНФЕРЕНЦІЯ
              22.10.2024 КОНФЕРЕНЦІЯ 22.10.2024 КОНФЕРЕНЦІЯ 22.10.2024
            </Marquee>
          </div>
        </Section>
        <Section
          className="bg-[#ffe699] gap-5 flex flex-col justify-center items-center sticky top-0"
          style={sectionTwoStyle}
        >
          <AnimatedTitle className="text-4xl" text="Квиток" />
          <Card type="regular" bullets={basicBenefits} price={299} />
          <div className="absolute md:hidden rotate-180 top-0 left-0 w-full flex flex-col justify-end overflow-hidden z-20">
            <Wave />
          </div>
        </Section>
        <Section
          className="relative flex gap-5 overflow-hidden flex-col justify-start pt-12 items-center bg-cyan-500"
          style={sectionThreeStyle}
        >
          <AnimatedTitle className="text-4xl" text="VIP квиток" />
          <Card type="vip" bullets={vipBenefits} price={299} />
          <motion.div
            style={{ rotate: flower3Rotate, x: flower3X, scale: flower3Scale }}
            className="absolute top-[25px] right-0 w-[100px] h-[100px] overflow-hidden z-20"
          >
            <Flower3 fill3="orange" />
          </motion.div>
          <motion.div
            style={{ rotate: flower3Rotate, y: flower3X, scale: flower3Scale }}
            className="absolute md:bottom-[25%] bottom-[0%] left-10 w-[200px] h-[200px] overflow-hidden z-20"
          >
            <Flower3
              rotate={-360}
              fill1="orange"
              fill2="pink"
              fill3="#c33d3d"
            />
          </motion.div>
          <div className="absolute bottom-0 left-0 w-full flex flex-col justify-end overflow-hidden z-20">
            <Wave />
          </div>
        </Section>
        <Section className="relative min-h-[20vh] pb-10 top-black gap-5 bg-black text-white flex flex-col justify-start items-center">
          <AnimatedTitle className="text-4xl" text="PREMIUM квиток" />
          <Card type="premium" bullets={premiumBenefits} price={299} />
        </Section>
        <Section className="relative overflow-hidden min-h-[20vh] py-10 top-black gap-5 bg-black text-white flex flex-col justify-end items-center">
          <div className="font-light max-w-96 flex gap-10 mx-auto pb-10">
            <div className="text-sm relative">
              <FlipText
                className="text-[25px] md:text-[35px]"
                secondaryText="text-pink-300"
                delay={0.5}
                href="#"
              >
                Nail
              </FlipText>
              <FlipText
                className="text-[25px] md:text-[35px]"
                delay={1.5}
                href="#"
                secondaryText="text-emerald-300"
              >
                Moment
              </FlipText>
            </div>
            <ul className="flex flex-col gap-2">
              <li>
                <a target="_blank" href="https://t.me/+THVRcBRhyWc5OWY0">
                  Напиши до нас в підтримку
                </a>
              </li>
              <li>
                <a href="/polityka">Polityka prywatności</a>
              </li>
              <li>
                <a type="tel" href="/polityka">
                  +48 555 5555
                </a>
              </li>
              <li className="flex gap-2 items-center">
                <a href="instagram.com/nailmoment">Instagram</a>
              </li>
            </ul>
          </div>

          <div className="absolute  bottom-0 flex items-center justify-center">
            <Marquee>
              КОНФЕРЕНЦІЯ 22.10.2024 КОНФЕРЕНЦІЯ 22.10.2024 КОНФЕРЕНЦІЯ
              22.10.2024 КОНФЕРЕНЦІЯ 22.10.2024 КОНФЕРЕНЦІЯ 22.10.2024
              КОНФЕРЕНЦІЯ 22.10.2024 КОНФЕРЕНЦІЯ 22.10.2024 КОНФЕРЕНЦІЯ
              22.10.2024 КОНФЕРЕНЦІЯ 22.10.2024 КОНФЕРЕНЦІЯ 22.10.2024
              КОНФЕРЕНЦІЯ 22.10.2024 КОНФЕРЕНЦІЯ 22.10.2024 КОНФЕРЕНЦІЯ
              22.10.2024 КОНФЕРЕНЦІЯ 22.10.2024 КОНФЕРЕНЦІЯ 22.10.2024
            </Marquee>
          </div>
        </Section>
      </div>
    </main>
  );
}
