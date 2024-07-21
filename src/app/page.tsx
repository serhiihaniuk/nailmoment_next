"use client";
import { Card, TicketType } from "@/entities/ui/card";
import AnimatedDate from "@/entities/ui/date";
import { Flower, Flower2, Flower3 } from "@/shared/assets/flower";
import { AnimatedPath } from "@/shared/assets/path";
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

  interface Benefit {
    value: string;
    type: TicketType;
  }

  const createBenefit = (value: string, type: TicketType): Benefit => ({
    value,
    type,
  });

  const commonBenefits: Benefit[] = [
    createBenefit("Виступ спікерів", "regular"),
    createBenefit("Нетворкінг з учасниками", "regular"),
    createBenefit("Закритий телеграм канал з учасниками", "regular"),
    createBenefit("Сертифікат про участь", "regular"),
  ];

  const ticketBenefits = {
    regular: [
      createBenefit("Місце в залі в категорії фан", "regular"),
      ...commonBenefits,
    ],
    vip: [
      createBenefit("Місце в залі в категорії VIP", "vip"),
      ...commonBenefits,
      createBenefit("Презентації від спікерів", "vip"),
    ],
    premium: [
      createBenefit("Місце в залі в категорії Преміум", "premium"),
      ...commonBenefits,
      createBenefit("Презентації від спікерів", "vip"),
      createBenefit("Кава брейк зі спікерами у Преміум - румі", "premium"),
      createBenefit("Нетворкінг зі спікерами", "premium"),
      createBenefit("Подарунок від спонсорів", "premium"),
      createBenefit("Окрема стійка реєстрації", "premium"),
    ],
  };

  // Usage example:
  const regularBenefits = ticketBenefits.regular;
  const vipBenefits = ticketBenefits.vip;
  const premiumBenefits = ticketBenefits.premium;

  return (
    <main className="relevant max-w-full">
      <div ref={containerRef} className="relative h-[300dvh] z-20 bg-stone-900">
        <Section
          className="bg-gradient-to-r from-emerald-900 to-emerald-950 overflow-hidden sticky top-0 flex flex-col items-center justify-center p-5"
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
            <h1 className="relative z-20">
              <FlipText secondaryText="text-pink-300" delay={0.5} href="#">
                Nail
              </FlipText>
              <FlipText delay={1.5} href="#" secondaryText="text-emerald-300">
                Moment
              </FlipText>
              <AnimatedDate date="13.10.2024" delay={1.5} />
            </h1>
          </div>
          <div className="absolute rotate-12  bottom-5 flex items-center justify-center">
            <Marquee>
              КОНФЕРЕНЦІЯ 13.10.2024 КОНФЕРЕНЦІЯ 13.10.2024 КОНФЕРЕНЦІЯ{" "}
              13.10.2024 КОНФЕРЕНЦІЯ 13.10.2024 КОНФЕРЕНЦІЯ 13.10.2024{" "}
              КОНФЕРЕНЦІЯ 13.10.2024 КОНФЕРЕНЦІЯ 13.10.2024 КОНФЕРЕНЦІЯ{" "}
              13.10.2024 КОНФЕРЕНЦІЯ 13.10.2024 КОНФЕРЕНЦІЯ 13.10.2024{" "}
              КОНФЕРЕНЦІЯ 13.10.2024 КОНФЕРЕНЦІЯ 13.10.2024 КОНФЕРЕНЦІЯ{" "}
              13.10.2024 КОНФЕРЕНЦІЯ 13.10.2024 КОНФЕРЕНЦІЯ 13.10.2024{" "}
            </Marquee>
          </div>
        </Section>
        <Section
          className="bg-[#FAEDCD] gap-5 flex flex-col justify-center items-center sticky top-0"
          style={sectionTwoStyle}
        >
          <AnimatedTitle className="text-3xl" text="Звичайний Квиток" />
          <Card
            type="regular"
            bullets={regularBenefits}
            price={359}
            href="https://buy.stripe.com/5kA5mk0z51wlaOY5l2"
          />
          <div className="absolute md:hidden rotate-180 top-0 left-0 w-full flex flex-col justify-end overflow-hidden z-20">
            <Wave fill="#022c22" />
          </div>
          <div className="absolute h-full rotate-180 w-full bottom-0 left-0 border overflow-hidden z-20">
            <AnimatedPath />
          </div>
        </Section>
        <Section
          className="relative flex gap-5 overflow-hidden flex-col justify-start pt-12 items-center bg-[var(--light-blue)]"
          style={sectionThreeStyle}
        >
          <AnimatedTitle className="text-4xl" text="VIP квиток" />
          <Card
            type="vip"
            bullets={vipBenefits}
            price={459}
            href="https://buy.stripe.com/fZe1640z55MB7CM28R"
          />
          <motion.div
            style={{ rotate: flower3Rotate, x: flower3X, scale: flower3Scale }}
            className="absolute top-0 md:right-52 right-0 w-[100px] h-[100px] overflow-hidden z-20"
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
            <Wave fill="#1c1917" />
          </div>
        </Section>
        <Section className="bg-stone-900 relative min-h-[20vh] pb-24 top-black gap-5  text-white flex flex-col justify-start items-center">
          <AnimatedTitle
            className="text-4xl text-white"
            text="PREMIUM квиток"
          />
          <Card
            type="premium"
            bullets={premiumBenefits}
            price={839}
            href="https://buy.stripe.com/9AQcOM81x0sh1eo3cW"
          />
        </Section>
        <Section className="relative overflow-hidden min-h-[20vh] pt-6 pb-10 top-black gap-5 bg-stone-950 px-3 text-white flex flex-col justify-end items-center">
          <footer className="font-light max-w-96 flex gap-10 mx-auto pb-10">
            <div className="text-sm relative">
              <FlipText
                className="text-[25px] md:text-[35px] text-stone-50"
                secondaryText="text-pink-300"
                delay={0.5}
                href="#"
              >
                Nail
              </FlipText>
              <FlipText
                className="text-[25px] text-stone-50 md:text-[35px] mb-2"
                delay={1.5}
                href="#"
                secondaryText="text-emerald-300"
              >
                Moment
              </FlipText>
              <AnimatedDate className="text-xl" date="13.10.2024" delay={1.5} />
            </div>
            <ul className="flex flex-col gap-2 basis-1/2">
              <li>
                <a target="_blank" href="https://t.me/+THVRcBRhyWc5OWY0">
                  Напиши до нас в підтримку
                </a>
              </li>
              <li>
                <a href="/polityka">Polityka prywatności</a>
              </li>
              <li>
                <a type="tel" href="tel:+48797533664">
                  +48 797 533 664
                </a>
              </li>
              <li className="flex gap-2 items-center">
                <a href="https://www.instagram.com/nail_moment_pl?igsh=YWZpY2JjOTFueXc5">
                  Instagram
                </a>
              </li>
            </ul>
          </footer>

          <div className="absolute  bottom-0 flex items-center justify-center">
            <Marquee>
              КОНФЕРЕНЦІЯ 13.10.2024 КОНФЕРЕНЦІЯ 13.10.2024 КОНФЕРЕНЦІЯ
              13.10.2024 КОНФЕРЕНЦІЯ 13.10.2024 КОНФЕРЕНЦІЯ 13.10.2024
              КОНФЕРЕНЦІЯ 13.10.2024 КОНФЕРЕНЦІЯ 13.10.2024 КОНФЕРЕНЦІЯ
              13.10.2024 КОНФЕРЕНЦІЯ 13.10.2024 КОНФЕРЕНЦІЯ 13.10.2024
              КОНФЕРЕНЦІЯ 13.10.2024 КОНФЕРЕНЦІЯ 13.10.2024 КОНФЕРЕНЦІЯ
              13.10.2024 КОНФЕРЕНЦІЯ 13.10.2024 КОНФЕРЕНЦІЯ 13.10.2024
            </Marquee>
          </div>
        </Section>
      </div>
    </main>
  );
}
