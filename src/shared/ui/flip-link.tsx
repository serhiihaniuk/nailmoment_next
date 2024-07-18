import React from "react";
import { motion, useInView, Variants } from "framer-motion";

const DURATION = 0.65;
const STAGGER = 0.025;

interface FlipTextProps {
  children: string;
  href: string;
  delay?: number;
}

const letterVariants: Variants = {
  initial: {
    y: 0,
  },
  visible: {
    y: "-100%",
  },
};

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
}) => {
  const ref = React.useRef<HTMLAnchorElement>(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.a
      ref={ref}
      initial="initial"
      animate={isInView ? "visible" : "initial"}
      href={href}
      className="relative block overflow-hidden whitespace-nowrap font-black text-white uppercase text-[75px]"
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
      <div className="absolute inset-0">
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
    </motion.a>
  );
};
