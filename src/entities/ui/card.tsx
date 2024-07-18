import React from "react";
import { motion, useInView, Variants } from "framer-motion";

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

export const Card: React.FC = () => {
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
      }}
      variants={cardVariants}
      className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl bg-indigo-500 p-8"
    >
      <div className="relative z-10 text-white">
        <span className="mb-3 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm font-light text-white">
          Pro
        </span>
        <motion.span
          variants={priceVariants}
          transition={{
            duration: 1,
            ease: "backInOut",
            delay: 0.2,
          }}
          className="my-2 block origin-top-left font-mono text-6xl font-black leading-[1.2]"
        >
          $299/
          <br />
          Month
        </motion.span>
        <motion.p
          variants={textVariants}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.3,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem.
        </motion.p>
      </div>
      <motion.button
        variants={buttonVariants}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: 0.4,
        }}
        className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white"
      >
        Get it now
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
