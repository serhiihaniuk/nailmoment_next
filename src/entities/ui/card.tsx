import React, { FC } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Flower2, Flower3 } from "@/shared/assets/flower";
import { cn } from "@/shared/utils/cn";

const cardVariants: Variants = {
  hidden: { scale: 0.95 },
  visible: { scale: 1 },
};

const priceVariants: Variants = {
  hidden: { scale: 0.85, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const bulletVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export type TicketType = "regular" | "vip" | "premium";
type CardProps = {
  type: TicketType;
  bullets: { value: string; type: TicketType }[];
  price: number;
};
export const Card: FC<CardProps> = ({ type, bullets, price }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        duration: 1,
        ease: "backInOut",
        delay: 0.2,
      }}
      variants={cardVariants}
      className="relative z-50 min-h-[400px] w-[92vw] max-w-96 md:w-[375px] shrink-0 overflow-hidden rounded-xl bg-stone-900 p-8"
    >
      <div className="relative z-10 text-white">
        {type === "vip" && (
          <span className="mb-3 text-emerald-300 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm uppercase font-bold">
            {type}
          </span>
        )}
        {type === "premium" && (
          <div className="relative z-20 w-28 h-8 rounded-[20px]">
            <div className="inset-0 btn rounded-[18px]">
              <span className="absolute inset-0 flex items-center text-base justify-center rounded-[18px] font-light text-white z-20 bg-black w-full h-full">
                Premium
              </span>
            </div>
          </div>
        )}
        <motion.span
          animate={{ rotate: 360 }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="absolute -top-5 right-0"
        >
          {type === "premium" && <Flower2 />}
        </motion.span>
        <motion.span
          variants={priceVariants}
          transition={{
            duration: 1,
            ease: "backInOut",
            delay: 0.2,
          }}
          className="my-2 block origin-top-left font-mono text-5xl font-black leading-[1.2]"
        >
          {price}zł.
        </motion.span>
        <motion.p
          variants={textVariants}
          className="text-[16px] font-light mb-8 flex flex-col gap-1"
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.3,
          }}
        >
          {bullets.map((bullet, index) => (
            <motion.span
              key={index}
              variants={bulletVariants}
              className={cn("flex gap-2 bg-stone-700/40 rounded-md px-4 py-1", {
                "text-emerald-300 font-regular": bullet.type === "vip",
                "text-pink-300 font-regular": bullet.type === "premium",
              })}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.3 + index * 0.1,
              }}
            >
              <span
                className={cn("self-center justify-self-center", {
                  "text-emerald-300 font-regular": bullet.type === "vip",
                  "text-pink-300 font-regular": bullet.type === "premium",
                })}
              >
                ✔
              </span>{" "}
              {bullet.value}
            </motion.span>
          ))}
        </motion.p>
      </div>
      <motion.button
        variants={buttonVariants}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: 0.4,
        }}
        className="relative z-20 w-full h-14 rounded-xl"
      >
        <div className="inset-0 btn rounded-xl">
          <span className="absolute inset-0 flex items-center justify-center uppercase rounded-xl text-white z-20 bg-black w-full h-full">
            {" "}
            Приєднатися{" "}
          </span>
        </div>
      </motion.button>
      <Background isInView={isInView} />
    </motion.div>
  );
};

interface BackgroundProps {
  isInView: boolean;
}

const backgroundVariants: Variants = {
  hidden: { scale: 1 },
  visible: { scale: 1.5 },
};

const circleVariants: Variants = {
  hidden: { scaleY: 1, y: 0 },
  visible: { scaleY: 0.5, y: -25 },
};

const ellipseVariants: Variants = {
  hidden: { scaleY: 1, y: 0 },
  visible: { scaleY: 2.25, y: -25 },
};

const Background: React.FC<BackgroundProps> = ({ isInView }) => {
  return (
    <motion.svg
      width="320"
      height="384"
      viewBox="0 0 320 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 z-0"
      variants={backgroundVariants}
      animate={isInView ? "visible" : "hidden"}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
    >
      <motion.circle
        variants={circleVariants}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="114.5"
        r="101.5"
        fill="#262626"
      />
      <motion.ellipse
        variants={ellipseVariants}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="265.5"
        rx="101.5"
        ry="43.5"
        fill="#262626"
      />
    </motion.svg>
  );
};
