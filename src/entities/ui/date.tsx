import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/shared/utils/cn";

interface AnimatedDateProps {
  date: string;
  delay?: number;
  className?: string;
}

const AnimatedDate: React.FC<AnimatedDateProps> = ({
  className,
  date,
  delay = 0.1,
}) => {
  return (
    <div className="relative w-min">
      <motion.div
        className="absolute inset-0 bg-[var(--green-yellow)] origin-left"
        initial={{ scaleX: 0, skew: "-12deg" }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: delay,
        }}
      />
      <motion.div
        className={cn(
          "text-black font-black text-3xl px-5 relative z-20",
          className
        )}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 5,
          delay: delay + 0.2,
        }}
      >
        <span>{date}</span>
      </motion.div>
    </div>
  );
};

export default AnimatedDate;
