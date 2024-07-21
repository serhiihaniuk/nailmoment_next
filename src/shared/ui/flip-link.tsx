import React, { useEffect, useState } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { cn } from "../utils/cn";

const DURATION = 0.65;
const STAGGER = 0.025;

interface FlipTextProps {
  children: string;
  href: string;
  delay?: number;
  secondaryText?: string;
  className?: string;
}

const letterVariants: Variants = {
  initial: {
    y: 0,
  },
  visible: {
    y: "-100%",
  },
};

//  get random number between min and max
function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const hiddenLetterVariants: Variants = {
  initial: {
    y: "100%",
  },
  visible: {
    y: 0,
  },
};

export const FlipText: React.FC<FlipTextProps> = ({
  children,
  href,
  delay = 0,
  secondaryText,
  className,
}) => {
  const ref = React.useRef<HTMLAnchorElement>(null);

  const [animationTrigger, setAnimationTrigger] = useState(false);

  useEffect(() => {
    let stop = false;

    const toggleAnimation = () => {
      setTimeout(() => {
        setAnimationTrigger((t) => !t);
        !stop && toggleAnimation();
      }, getRandomInt(2000, 6000));
    };

    toggleAnimation();

    return () => {
      stop = true;
    };
  }, []);

  return (
    <motion.a
      ref={ref}
      initial="initial"
      animate={animationTrigger ? "visible" : "initial"}
      href={href}
      className={cn(
        "relative block overflow-hidden whitespace-nowrap font-black text-stone-900 uppercase text-[75px] md:text-[100px]",
        className
      )}
      style={{
        lineHeight: 1.05,
      }}
    >
      <div>
        {children.split("").map((letter, index) => (
          <motion.span
            variants={letterVariants}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * index + delay,
            }}
            className="inline-block"
            key={index}
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <div className={cn("absolute inset-0", secondaryText)}>
        {children.split("").map((letter, index) => (
          <motion.span
            variants={hiddenLetterVariants}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * index + delay,
            }}
            className="inline-block"
            key={index}
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <div className="w-0 h-0 absolute" />
    </motion.a>
  );
};
