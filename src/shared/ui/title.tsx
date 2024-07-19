import React, { useState, useEffect } from "react";
import { motion, useInView, useAnimation, delay } from "framer-motion";

interface AnimatedTitleProps {
  text: string;
  className?: string;
}

export const AnimatedTitle: React.FC<AnimatedTitleProps> = ({
  text,
  className = "",
}) => {
  const ref = React.useRef(null);
  const words = text.split(" ");
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const wordVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const letterVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 32,
        stiffness: 200,
        delay: 0.5,
      },
    },
  };

  return (
    <motion.h1
      ref={ref}
      className={`inline-block relative z-30 text-3xl uppercase font-black ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {words.map((word, wordIndex) => (
        <motion.span
          key={`word-${wordIndex}`}
          className="inline-block whitespace-nowrap mr-2"
          variants={wordVariants}
        >
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={`char-${wordIndex}-${charIndex}`}
              variants={letterVariants}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </motion.h1>
  );
};
