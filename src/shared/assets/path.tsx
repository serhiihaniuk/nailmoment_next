import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export const AnimatedPath = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 30,
    damping: 30,
    restDelta: 0.001,
  });

  const pathLength = useTransform(smoothProgress, [0.3, 0.8], [0, 1]);

  return (
    <div ref={ref} className="w-full h-full">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 598 334"
        initial="hidden"
        animate="visible"
      >
        <motion.path
          d="M-304,17 C-304,17 -54.319000244140625,-178.7729949951172 20,-154 C53,-143 -97,-38 -190,68 C-243.6840057373047,129.18800354003906 0,-75 156,-82 C204,-82 48,32 21,78 C-6,124 162,22 192,26 C222,30 19,152 61,156 C103,160 249,69 287,84 C305.0069885253906,94.42500305175781 270.0190124511719,122.81500244140625 253.54400634765625,137.67100524902344"
          stroke="#ec4899"
          strokeWidth="31"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          style={{ pathLength: pathLength }}
          custom={0}
        />
      </motion.svg>
    </div>
  );
};
